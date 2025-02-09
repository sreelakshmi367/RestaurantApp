import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/cartSlice.ts";
import { Item, AddonItem } from "../types.ts";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { selectedItem } from "../app/constants/ItemConstants.ts";

interface AddToCartPopupProps {
  item: Item;
  onClose: () => void;
}

const AddToCartPopup: React.FC<AddToCartPopupProps> = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<{ [key: string]: AddonItem[] }>({});
  const [missingRequired, setMissingRequired] = useState<string[]>([]); // Tracks missing required categories
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable background scrolling when popup is open
    return () => {
      document.body.style.overflow = "auto"; // Enable scrolling when popup is closed
    };
  }, []);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const handleAddonSelect = (
    category: string,
    addon: AddonItem,
    multiple: boolean
  ) => {
    setSelectedAddons((prev) => {
      if (multiple) {
        const existing = prev[category] || [];
        return {
          ...prev,
          [category]: existing.some((item) => item.id === addon.id)
            ? existing.filter((item) => item.id !== addon.id)
            : [...existing, addon],
        };
      } else {
        return { ...prev, [category]: [addon] };
      }
    });

    // Remove category from missingRequired when an option is selected
    setMissingRequired((prev) => prev.filter((cat) => cat !== category));
  };

  const handleAddToCart = () => {
    const requiredCategories = selectedItem.addons
      ?.filter((addonCategory) => addonCategory.required)
      .map((addonCategory) => addonCategory.category) || [];

    const unselectedRequired = requiredCategories.filter(
      (category) => !selectedAddons[category] || selectedAddons[category].length === 0
    );

    if (unselectedRequired.length > 0) {
      setMissingRequired(unselectedRequired); // Highlight missing required categories
      return;
    }

    dispatch(addItemToCart({ ...item, quantity, selectedAddons }));
    onClose();
  };

  const totalPrice =
    item.price * quantity +
    Object.values(selectedAddons)
      .flat()
      .reduce((sum, addon) => sum + (addon ? addon.price : 0), 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-hidden flex justify-center">
      <div className="bg-white w-96 p-4 rounded-lg shadow-lg relative animate-slide-up max-h-screen overflow-y-auto mb-12 pt-0 px-10">
        <button className="absolute top-2 right-1">
          <IconButton
            onClick={onClose}
            className="border border-cyan-800 rounded-full bg-white text-cyan-800"
            sx={{
              border: "2px solid #0e7490",
              backgroundColor: "white",
              color: "#0e7490",
              "&:hover": { backgroundColor: "#e0f2f1" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </button>

        <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />
        <h3 className="text-lg font-bold mt-2">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-cyan-700">AED {item.price}</span>
          <div className="flex items-center border px-3 py-1 rounded-md">
            <button onClick={() => handleQuantityChange(-1)} className="px-2">-</button>
            <span className="mx-2">{quantity}</span>
            <button onClick={() => handleQuantityChange(1)} className="px-2">+</button>
          </div>
        </div>

        {selectedItem.addons?.map((addonCategory) => (
          <div key={addonCategory.category} className="mt-4">
            <div
              className={`flex justify-between p-2 rounded-md ${
                missingRequired.includes(addonCategory.category)
                  ? "bg-red-100 border border-red-500"
                  : "bg-gray-200"
              }`}
            >
              <h3>{addonCategory.title}</h3>
              {addonCategory.required && (
                <span className="text-red-500 text-sm">Required</span>
              )}
            </div>
            {addonCategory.items.map((addon) => (
              <div key={addon.id} className="flex justify-between items-center mt-2">
                <span>{addon.name}</span>
                <div className="flex items-center">
                  {addonCategory.multiple && (
                    <>
                      <span>+</span>
                      <span className="mx-2 text-xs">AED {addon.price}</span>
                    </>
                  )}
                  <input
                    type={addonCategory.multiple ? "checkbox" : "radio"}
                    name={addonCategory.category}
                    checked={
                      selectedAddons[addonCategory.category]?.some((item) => item.id === addon.id) || false
                    }
                    onChange={() =>
                      handleAddonSelect(
                        addonCategory.category,
                        addon,
                        addonCategory.multiple
                      )
                    }
                    className="accent-cyan-700"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}

        <button
          className="w-full mt-4 bg-cyan-700 text-white py-2 rounded-md hover:bg-cyan-600 flex items-center justify-between px-4"
          onClick={handleAddToCart}
        >
          <div className="w-6 h-6 bg-white text-cyan-800 flex items-center justify-center rounded text-xl">+</div>
          <span className="text-xl font-bold -ml-12">Add to Cart</span>
          <span className="font-bold">AED {totalPrice}</span>
        </button>
      </div>
    </div>
  );
};

export default AddToCartPopup;
