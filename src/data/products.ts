import {
  categories as categoryContent,
  products as catalogueProducts,
} from "@/data/catalogue-products";
import type { ProductCategory } from "@/types/product";

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  description: string;
  shortDescription: string;
  image?: string;
  imageAlt?: string;
  gallery?: string[];
  modelNumber?: string;
  materials?: string[];
  specifications?: { label: string; value: string }[];
  colors?: string[];
  variants?: string[];
  features?: string[];
  customization?: string;
  keywords?: string[];
  featured?: boolean;
  relatedProductSlugs?: string[];
};

export const products: Product[] = catalogueProducts.map(
  ({ id, description, longDescription, ...product }) => ({
    ...product,
    id: String(id),
    description: longDescription,
    shortDescription: description,
    imageAlt: product.name,
  }),
);

export const productCategories = [
  "Pre-Rolled Cones",
  "Hemp Wraps",
  "Paper Bobbins",
  "Filter Tips",
  "Rolling Papers",
  "Accessories",
] as const satisfies readonly ProductCategory[];

export function getProductCategoryDetails() {
  return productCategories.map((name) => {
    const category = categoryContent.find((item) => item.name === name);
    if (!category) {
      throw new Error(`Missing catalogue category details for "${name}".`);
    }

    const count = products.filter((product) => product.category === name).length;
    return {
      ...category,
      count,
      imageAlt: `${name} products`,
    };
  });
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
