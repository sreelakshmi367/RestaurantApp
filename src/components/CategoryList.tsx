import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categoriesSlice.ts";
import { RootState, AppDispatch } from "../app/store";
import { useNavigate } from "react-router-dom";
import ApiError from "../app/common/ApiError.tsx";

const CategoryList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categories
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/items/${categoryId}`);
  };

  const handleRetry = () => {
    dispatch(fetchCategories()); 
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <ApiError message={error} onRetry={handleRetry} />;

  return (
    <div className="max-w-7xl mx-auto p-4 pb-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform relative"
          >
            <img
              src={category.image}
              alt={category.name}
              loading="lazy"
              className="w-full h-40 object-cover cursor-pointer aspect-[3/2]"
              onClick={() => handleCategoryClick(category.id)}
            />
            {category.opens_at && (
              <div className="absolute top-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-tr-lg rounded-bl-lg shadow-md">
                Opens at {category.opens_at}
              </div>
            )}
            <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-md font-bold w-full text-center">
              {category.display_name?.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
