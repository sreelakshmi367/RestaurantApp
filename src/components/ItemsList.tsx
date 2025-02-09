import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItems } from "../features/itemsSlice.ts";
import { RootState, AppDispatch } from "../app/store.ts";
import AddToCartPopup from "./AddToCartPopup.tsx";
import { Item } from "../types.ts";
import { ItemProp } from "../app/constants/ItemConstants.ts";

const ItemsList = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.items);
  const [selectedItem, setSelectedItem] = useState<Item>(ItemProp);
  const [selectedItemOpen, setSelectedItemOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("main");

  useEffect(() => {
    categoryId && dispatch(fetchItems(categoryId));
  }, [dispatch, categoryId]);

  const handleItemSelected = (item) => {
    setSelectedItemOpen(true);
    setSelectedItem(item);
  };

  const handleItemPopupClose = () => {
    setSelectedItemOpen(false);
    setSelectedItem(ItemProp);
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 mb-6 w-full max-w-md">
          <button
            className={`w-full px-6 py-2 rounded font-semibold border transition text-xs xs:text-base md:text-lg ${
              selectedCategory === "main"
                ? "bg-cyan-800 text-white border-cyan-800"
                : "bg-gray-200 text-gray-700 border-cyan-800"
            }`}
            onClick={() => setSelectedCategory("main")}
          >
            MAIN COURSES
          </button>
          <button
            className={`w-full px-6 py-2 rounded font-semibold transition border text-xs xs:text-base md:text-lg ${
              selectedCategory === "side"
                ? "bg-cyan-800 text-white border-cyan-800"
                : "bg-gray-200 text-cyan-800 border-cyan-800"
            }`}
            onClick={() => setSelectedCategory("side")}
          >
            SIDE ORDERS
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-row bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-1/3 object-cover aspect-[3/2]"
              onClick={() => handleItemSelected(item)}
            />

            <div className="w-2/3 p-3 sm:p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-between items-center pt-4 sm:pt-6">
                <span className="text-sm sm:text-lg font-bold text-cyan-800">
                  AED {item.price}
                </span>
                <button
                  className="bg-cyan-800 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-md text-xs sm:text-sm hover:bg-cyan-800"
                  onClick={() => handleItemSelected(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItemOpen && (
        <AddToCartPopup
          item={selectedItem}
          onClose={() => handleItemPopupClose()}
        />
      )}
    </div>
  );
};

export default ItemsList;
