export interface Item {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
  addons?: AddonCategory[];
}

export interface AddonItem {
  id: string;
  name: string;
  price: number;
}

interface AddonCategory {
  category: string;
  title: string;
  required: boolean;
  multiple: boolean;
  items: AddonItem[];
}
