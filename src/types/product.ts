export type ProductCategory =
  | "Pre-Rolled Cones"
  | "Rolling Papers"
  | "Paper Bobbins"
  | "Hemp Wraps"
  | "Filter Tips"
  | "Accessories";

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  featured: boolean;
  badge?: string;
  specifications: { label: string; value: string }[];
}
