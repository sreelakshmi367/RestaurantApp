export const ItemProp = {
    id:'',
    name: '',
    image: '',
    description: '',
    price: 0,
    quantity: 0,
    addons: []
}

export const selectedItem = {
    id: "1",
    name: "Grilled Chicken",
    image: "https://example.com/chicken.jpg",
    description: "Delicious grilled chicken with a side of fresh vegetables.",
    price: 25.0,
    addons: [
      {
        category: "sides",
        title: "Add Side",
        required: false,
        multiple: true,
        items: [
          { id: "1", name: "French Fries", price: 5.0 },
          { id: "2", name: "Mashed Potatoes", price: 6.0 },
          { id: "3", name: "Coleslaw", price: 4.0 },
          { id: "4", name: "Steamed Vegetables", price: 5 },
          { id: "5", name: "Garlic Bread", price: 3 },
        ],
      },
      {
        category: "sauces",
        title: "Add Sauce",
        required: false,
        multiple: true,
        items: [
          { id: "1", name: "Barbecue Sauce", price: 2.0 },
          { id: "2", name: "Garlic Mayo", price: 2 },
          { id: "3", name: "Sweet Chili Sauce", price: 3 },
          { id: "4", name: "Honey Mustard", price: 3 },
          { id: "5", name: "Hot Sauce", price: 1.0 },
        ],
      },
      {
        category: "glasses",
        title: "Add a Glass",
        required: false,
        multiple: true,
        items: [
          { id: "1", name: "Coca Cola", price: 4.0 },
          { id: "2", name: "Sprite", price: 4.0 },
          { id: "3", name: "Orange Juice", price: 5.0 },
          { id: "4", name: "Iced Tea", price: 4 },
          { id: "5", name: "Lemonade", price: 5.0 },
        ],
      },
      {
        category: "Choice of Side",
        title: "Choice of Side",
        required: true,
        multiple: false,
        items: [
          { id: 201, name: "Mashed Potatoes", price: 0 },
          { id: 202, name: "Steamed Veggies", price: 0 },
          { id: 203, name: "Rice", price: 0 },
        ],
      },
      {
        category: "Choice of Sauce",
        title: "Choice of Sauce",
        required: true,
        multiple: false,
        items: [
          { id: 301, name: "BBQ Sauce", price: 0 },
          { id: 302, name: "Garlic Mayo", price: 0 },
          { id: 303, name: "Ranch", price: 0 },
        ],
      },
      {
        category: "Cooking Preferences",
        title: "Cooking Preferences",
        required: true,
        multiple: false,
        items: [
          { id: 401, name: "Well Done", price: 0 },
          { id: 402, name: "Medium", price: 0 },
          { id: 403, name: "Rare", price: 0 },
        ],
      },
    ],
  };