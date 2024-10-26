export type ProductCategory =
  | "Flowers"
  | "Trees"
  | "Shrubs and Bushes"
  | "Vegetables"
  | "Herbs"
  | "Seeds and Bulbs"
  | "Gardening Tools"
  | "Soils and Fertilizers"
  | "Garden Decor"
  | "Pest and Disease Control";

export type TProducts = {
  _id?: string;
  name?: string;
  description?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  price?: number;
  stockQuantity?: number;
  category?: ProductCategory;
  imageUrl?: string;
};
