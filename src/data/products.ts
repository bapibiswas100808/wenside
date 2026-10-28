export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  customizationAvailable: boolean;
  featured?: boolean;
  relatedProductSlugs?: string[];
};

export const products: Product[] = [
  {
    id: "sample-filter-tips",
    name: "Activated Carbon Filter Tips",
    slug: "activated-carbon-filter-tips",
    category: "Filters & tips",
    shortDescription: "A considered filter format for everyday rolling ranges.",
    description:
      "A sample listing for activated carbon filter tips. Get in touch to confirm available formats, specifications, packaging, and customization options for your range.",
    image: "/images/filters.svg",
    imageAlt: "Illustrative sample graphic of filter-tip packaging and accessories",
    features: ["Sample product listing", "Packaging options to be confirmed", "OEM inquiry welcome"],
    customizationAvailable: true,
    featured: true,
    relatedProductSlugs: ["rolling-papers", "accessory-gift-set"],
  },
  {
    id: "sample-rolling-papers",
    name: "Rolling Papers & Paper Tips",
    slug: "rolling-papers",
    category: "Papers & tips",
    shortDescription: "Paper and tip formats for a flexible accessory assortment.",
    description:
      "A sample category listing for rolling papers and paper tips. Product details and available configurations should be confirmed with the Wenside team.",
    image: "/images/papers.svg",
    imageAlt: "Illustrative sample graphic of paper packaging and rolling papers",
    features: ["Sample product listing", "Formats to be confirmed", "Private-label inquiry welcome"],
    customizationAvailable: true,
    featured: true,
    relatedProductSlugs: ["activated-carbon-filter-tips", "rolling-machine"],
  },
  {
    id: "sample-metal-grinder",
    name: "Metal Grinder",
    slug: "metal-grinder",
    category: "Grinders",
    shortDescription: "A classic grinder concept for a coordinated product range.",
    description:
      "A sample listing only. Ask Wenside to confirm materials, sizes, finishes, and the configurations currently available.",
    image: "/images/metal-grinder.svg",
    imageAlt: "Illustrative sample graphic of a metal grinder concept",
    features: ["Sample product listing", "Finishes to be confirmed", "Custom branding inquiry welcome"],
    customizationAvailable: true,
    featured: true,
    relatedProductSlugs: ["plastic-grinder", "smoking-tray"],
  },
  {
    id: "sample-plastic-grinder",
    name: "Plastic Grinder",
    slug: "plastic-grinder",
    category: "Grinders",
    shortDescription: "A lightweight grinder concept in a range-ready format.",
    description:
      "A sample listing only. Product materials, available colors, and packaging are not verified and should be confirmed directly.",
    image: "/images/plastic-grinder.svg",
    imageAlt: "Illustrative sample graphic of a plastic grinder concept",
    features: ["Sample product listing", "Color options to be confirmed", "OEM inquiry welcome"],
    customizationAvailable: true,
    relatedProductSlugs: ["metal-grinder", "accessory-gift-set"],
  },
  {
    id: "sample-smoking-tray",
    name: "Smoking Tray",
    slug: "smoking-tray",
    category: "Trays",
    shortDescription: "A useful tabletop accessory with scope for branded design.",
    description:
      "A sample listing for smoking trays. Contact Wenside to discuss shapes, artwork, and packaging options that may be available.",
    image: "/images/tray.svg",
    imageAlt: "Illustrative sample graphic of a smoking tray concept",
    features: ["Sample product listing", "Design options to be confirmed", "Private-label inquiry welcome"],
    customizationAvailable: true,
    featured: true,
    relatedProductSlugs: ["rolling-machine", "metal-grinder"],
  },
  {
    id: "sample-rolling-machine",
    name: "Rolling Machine",
    slug: "rolling-machine",
    category: "Rolling tools",
    shortDescription: "A practical tool concept for a complete accessory assortment.",
    description:
      "A sample listing only. Please request current product information and confirm compatibility and specifications with the Wenside team.",
    image: "/images/rolling-machine.svg",
    imageAlt: "Illustrative sample graphic of a rolling tool concept",
    features: ["Sample product listing", "Specifications to be confirmed", "Custom packaging inquiry welcome"],
    customizationAvailable: true,
    relatedProductSlugs: ["rolling-papers", "smoking-tray"],
  },
  {
    id: "sample-pipe-holder",
    name: "Pipes & Holders",
    slug: "pipes-and-holders",
    category: "Pipes & holders",
    shortDescription: "A sample assortment concept for complementary accessories.",
    description:
      "A sample listing for pipes and holders. Materials, formats, and availability are not verified; contact Wenside for current information.",
    image: "/images/pipes.svg",
    imageAlt: "Illustrative sample graphic of a pipe and holder concept",
    features: ["Sample product listing", "Materials to be confirmed", "Range development inquiry welcome"],
    customizationAvailable: true,
    relatedProductSlugs: ["storage-products", "accessory-gift-set"],
  },
  {
    id: "sample-storage",
    name: "Storage Products",
    slug: "storage-products",
    category: "Storage",
    shortDescription: "Storage formats to round out a thoughtful product range.",
    description:
      "A sample category listing. Ask about product formats and any available branding or packaging choices.",
    image: "/images/storage.svg",
    imageAlt: "Illustrative sample graphic of storage containers",
    features: ["Sample product listing", "Formats to be confirmed", "Custom branding inquiry welcome"],
    customizationAvailable: true,
    relatedProductSlugs: ["pipes-and-holders", "accessory-gift-set"],
  },
  {
    id: "sample-accessory-gift-set",
    name: "Accessory Sets & Gift Boxes",
    slug: "accessory-gift-set",
    category: "Sets & packaging",
    shortDescription: "A coordinated assortment concept for retail-ready collections.",
    description:
      "A sample concept for bundled accessories and gift packaging. Components and customization options should be discussed and confirmed with Wenside.",
    image: "/images/gift-set.svg",
    imageAlt: "Illustrative sample graphic of a branded accessory gift set",
    features: ["Sample product concept", "Set contents to be confirmed", "Packaging inquiry welcome"],
    customizationAvailable: true,
    featured: true,
    relatedProductSlugs: ["rolling-papers", "storage-products"],
  },
];

export const productCategories = [...new Set(products.map((product) => product.category))];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
