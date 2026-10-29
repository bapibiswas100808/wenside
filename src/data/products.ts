export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
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

const image = (name: string) => `/images/${name}`;

export const products: Product[] = [
  {
    id: "pre-rolled-cones",
    name: "Pre-Rolled Cones",
    slug: "pre-rolled-cones",
    category: "Pre-Rolled Cones",
    shortDescription:
      "Ready-to-fill cones made for retail brands, private labels, and promotional kits.",
    description:
      "Premium ready-to-fill cones designed for smooth burning and consistent performance. The catalogue describes food-grade natural paper, machine rolling with hand checks, optional filters, and multiple size formats.",
    image: image("products/pre_rolled_cone1.png"),
    imageAlt: "Sample colorful pre-rolled cones in a clear display tube",
    gallery: [image("products/pre_rolled_cone2.png")],
    materials: ["Food-grade natural paper"],
    specifications: [
      {
        label: "Available sizes",
        value: "70 mm, 84 mm, 98 mm, 109 mm, King Size, and other sizes",
      },
      { label: "Filter", value: "Optional filters included" },
      { label: "Production", value: "Machine-rolled and hand-checked" },
    ],
    variants: ["Multiple sizes"],
    features: ["Even burn", "Slow combustion", "Ready-to-fill format"],
    customization: "Custom branding and packaging available, according to the catalogue.",
    keywords: ["cone", "cones", "pre-roll", "preroll", "king size"],
    featured: true,
    relatedProductSlugs: ["plastic-cone-tubes", "hemp-wraps", "pre-rolled-filter-tips"],
  },
  {
    id: "hemp-wraps",
    name: "Hemp Wraps",
    slug: "hemp-wraps",
    category: "Hemp Wraps",
    shortDescription: "Tobacco-free hemp wraps with neutral or flavored options.",
    description:
      "Natural tobacco-free wraps made from hemp fibers. The catalogue describes a smooth texture, moisture-controlled packaging, and neutral or flavored options for smoking brands and rolling products.",
    image: image("products/hemp_wrap1.png"),
    imageAlt: "Illustrative catalogue image showing flavored hemp-wrap packaging options",
    gallery: [image("products/hemp_wrap2.png")],
    materials: ["Hemp fibers"],
    variants: ["Neutral", "Flavored"],
    features: ["Tobacco-free", "Smooth texture", "Moisture-controlled packaging"],
    customization: "The catalogue lists OEM flavor, size, and packaging options.",
    keywords: ["hemp", "wrap", "wraps", "flavored"],
    featured: true,
    relatedProductSlugs: ["rolling-paper-booklets", "paper-bobbins", "pre-rolled-cones"],
  },
  {
    id: "rolling-paper-booklets",
    name: "Rolling Paper Booklets",
    slug: "rolling-paper-booklets",
    category: "Rolling Paper Booklets",
    shortDescription: "Compact rolling-paper booklets in natural wood-pulp or hemp-paper options.",
    description:
      "Compact, convenient rolling paper booklets for everyday use and brand promotion. Catalogue options include natural wood-pulp or hemp paper, ultra-thin papers, standard or custom sizes, and magnetic or classic flap styles.",
    image: image("products/rolling_paper1.png"),
    imageAlt: "Catalogue image of rolling paper booklet packaging",
    gallery: [image("products/rolling_paper2.png")],
    materials: ["Natural wood-pulp paper", "Hemp paper"],
    variants: ["Ultra-thin options", "Standard or custom sizes", "Magnetic or classic flap"],
    features: ["Compact format", "Eco-friendly material options"],
    customization:
      "Custom cover printing and private-label merchandise are listed in the catalogue.",
    keywords: ["rolling paper", "booklet", "booklets", "papers", "hemp paper"],
    featured: true,
    relatedProductSlugs: ["paper-bobbins", "paper-tips", "hemp-wraps"],
  },
  {
    id: "paper-bobbins",
    name: "Paper Bobbins",
    slug: "paper-bobbins",
    category: "Bobbin",
    shortDescription: "Continuous rolling-paper bobbins in several widths and paper types.",
    description:
      "Rolling-paper bobbins for cigarette-tobacco rolling paper. The catalogue lists several paper types and widths. The supplied bobbin visuals include both a 36 mm × 3,000 m sample and a 5,000 m maximum length; confirm the exact length and width combination for each order.",
    image: image("products/bobbins2.jpg"),
    imageAlt: "Sample white and brown paper bobbin rolls",
    gallery: [
      image("products/bobbins1.jpg"),
      image("products/bobbins3.jpg"),
      image("products/bobbins4.png"),
    ],
    specifications: [
      { label: "Available widths", value: "36 mm, 44 mm, and 54 mm" },
      {
        label: "Length",
        value:
          "5,000 m × 44 mm is specified in the catalogue; a supplied visual also shows 36 mm × 3,000 m",
      },
      {
        label: "Paper types",
        value:
          "12.5 gsm wood; 13 gsm unbleached hemp; 14 gsm rice; 14 gsm flavored; 14 gsm colored; 18.5–20 gsm wood",
      },
    ],
    variants: ["36 mm", "44 mm", "54 mm", "Different paper types"],
    features: [
      "Gum-strip option shown in catalogue imagery",
      "Compatible bobbin widths shown for paper types",
    ],
    keywords: ["bobbin", "bobbins", "roll", "gsm", "paper roll", "wood", "hemp"],
    featured: true,
    relatedProductSlugs: ["rolling-paper-booklets", "hemp-wraps", "paper-tips"],
  },
  {
    id: "paper-tips",
    name: "Paper Tips",
    slug: "paper-tips",
    category: "Tips & Filters",
    shortDescription: "Paper tips in standard or custom shapes and sizes.",
    description:
      "Paper tips are listed in the catalogue as one of Wenside’s available filter-tip formats. The catalogue does not provide a dedicated product image or further product-specific material or dimension data for this format.",
    keywords: ["paper", "tip", "tips", "filter", "perforated"],
    relatedProductSlugs: [
      "pre-rolled-filter-tips",
      "activated-carbon-tips",
      "rolling-paper-booklets",
    ],
  },
  {
    id: "pre-rolled-filter-tips",
    name: "Pre-Rolled Filter Tips",
    slug: "pre-rolled-filter-tips",
    category: "Tips & Filters",
    shortDescription: "Pre-rolled filter tips in bulk or retail packaging.",
    description:
      "Pre-rolled filter tips are listed among the available filter formats. Catalogue imagery shows packaged filter tips; exact paper, format, and pack options should be confirmed with Wenside.",
    image: image("products/pre_rolled_tips1.png"),
    imageAlt: "Packaged pre-rolled filter tips from the supplied catalogue assets",
    gallery: [image("products/pre_rolled_tips2.png"), image("products/carbon_tips1.png")],
    features: ["Bulk and retail packaging options listed", "Custom branding listed"],
    customization:
      "Custom branding is listed for tips and filters; confirm product-specific options.",
    keywords: ["pre-rolled", "prerolled", "filter tips", "tips"],
    featured: true,
    relatedProductSlugs: ["paper-tips", "activated-carbon-tips", "pre-rolled-cones"],
  },
  {
    id: "activated-carbon-tips",
    name: "Activated Coconut Charcoal Tips",
    slug: "activated-carbon-tips",
    category: "Tips & Filters",
    shortDescription: "Activated coconut-shell charcoal filters with ceramic caps.",
    description:
      "Activated carbon tips made with activated coconut-shell charcoal. The catalogue describes ceramic caps, customizable body colors, and round or cylindrical carbon shapes.",
    image: image("products/carbon_tips2.png"),
    imageAlt: "Activated charcoal filter tip with visible carbon and ceramic caps",
    specifications: [
      { label: "Material", value: "Activated coconut-shell charcoal" },
      { label: "Available sizes", value: "6 × 26 mm and 7 × 27 mm" },
      { label: "Carbon shape", value: "Round or cylindrical" },
      { label: "Caps", value: "Ceramic" },
      { label: "Body color", value: "Customizable" },
    ],
    variants: ["6 × 26 mm", "7 × 27 mm", "Round or cylindrical carbon"],
    customization: "Customization is available according to customer requirements.",
    keywords: ["activated", "carbon", "charcoal", "coconut", "ceramic", "filter"],
    featured: true,
    relatedProductSlugs: ["paper-tips", "pre-rolled-filter-tips", "metal-grinders"],
  },
  {
    id: "perforated-tips",
    name: "Perforated Tips",
    slug: "perforated-tips",
    category: "Tips & Filters",
    shortDescription: "Perforated tips listed as an available filter format.",
    description:
      "Perforated tips are identified in the catalogue as an available filter type. No dedicated image, material, model, or dimensions are supplied for this product type.",
    keywords: ["perforated", "tip", "tips", "filter"],
    relatedProductSlugs: ["paper-tips", "pre-rolled-filter-tips", "activated-carbon-tips"],
  },
  {
    id: "plastic-grinders",
    name: "Plastic Grinders",
    slug: "plastic-grinders",
    category: "Grinders",
    shortDescription: "Plastic grinder options in multiple sizes and customizable designs.",
    description:
      "The catalogue groups plastic and metal grinders as a customizable product range. Plastic grinders are listed in multiple sizes, with OEM service and branding options subject to manufacturing capabilities.",
    image: image("products/grinder1.png"),
    imageAlt: "Clear plastic grinder shown in the supplied Wenside product images",
    materials: ["Plastic"],
    specifications: [
      { label: "Available sizes", value: "Multiple sizes; confirm current options" },
    ],
    features: ["Custom colors and designs listed"],
    customization:
      "OEM service, custom colors, logo printing, and private labeling are listed in the catalogue.",
    keywords: ["plastic", "grinder", "grinders"],
    featured: true,
    relatedProductSlugs: ["metal-grinders", "smoking-trays", "silicone-storage"],
  },
  {
    id: "metal-grinders",
    name: "Metal Grinders",
    slug: "metal-grinders",
    category: "Grinders",
    shortDescription: "Metal grinder options in multiple sizes and customizable designs.",
    description:
      "The catalogue groups plastic and metal grinders as a customizable product range. Metal grinders are listed in multiple sizes, with OEM service and branding options subject to manufacturing capabilities.",
    image: image("products/grinder2.png"),
    imageAlt: "Metal grinder shown in the supplied Wenside product images",
    materials: ["Metal"],
    specifications: [
      { label: "Available sizes", value: "Multiple sizes; confirm current options" },
    ],
    features: ["Custom colors and designs listed"],
    customization:
      "OEM service, custom colors, logo printing, and private labeling are listed in the catalogue.",
    keywords: ["metal", "grinder", "grinders"],
    featured: true,
    relatedProductSlugs: ["plastic-grinders", "smoking-trays", "activated-carbon-tips"],
  },
  {
    id: "smoking-trays",
    name: "Smoking Trays",
    slug: "smoking-trays",
    category: "Smoking Trays",
    shortDescription: "Practical tray designs in different sizes, shapes, materials, and styles.",
    description:
      "Smoking trays are designed for organizing smoking accessories. The catalogue lists different size, shape, material, and design options, with customization subject to confirmation.",
    image: image("products/tray1.png"),
    imageAlt: "Printed smoking tray shown in the supplied Wenside product images",
    gallery: [image("products/tray2.png")],
    specifications: [
      { label: "Available options", value: "Different sizes, shapes, materials, and designs" },
    ],
    customization:
      "Custom colors, designs, and logos are listed; confirm available tray-specific options.",
    keywords: ["smoking tray", "tray", "trays"],
    featured: true,
    relatedProductSlugs: ["silicone-ashtrays", "plastic-grinders", "metal-grinders"],
  },
  {
    id: "rolling-machines",
    name: "Rolling Machines",
    slug: "rolling-machines",
    category: "Rolling Machines",
    shortDescription: "Rolling machines in different sizes and designs.",
    description:
      "Rolling machines are designed for a convenient, consistent rolling experience. The catalogue describes different sizes, designs, models, and styles. Materials are model-dependent.",
    image: image("products/rolling_machine1.png"),
    imageAlt: "Rolling machine shown in the supplied Wenside product images",
    gallery: [image("products/rolling_machine2.png")],
    specifications: [
      { label: "Materials", value: "Model-dependent" },
      { label: "Available sizes", value: "Multiple sizes; confirm current options" },
      { label: "Designs", value: "Different models and styles" },
    ],
    customization: "OEM service and custom branding and packaging options are listed.",
    keywords: ["rolling machine", "rolling machines", "machine"],
    featured: true,
    relatedProductSlugs: ["paper-bobbins", "rolling-paper-booklets", "pre-rolled-cones"],
  },
  {
    id: "plastic-cone-tubes",
    name: "Plastic Tubes for Cones",
    slug: "plastic-cone-tubes",
    category: "Cone Tubes",
    shortDescription: "Protective plastic tubes for portable cone storage.",
    description:
      "Plastic tubes offer a storage and protective solution for pre-rolled cones. The catalogue lists multiple sizes and customizable colors for different product dimensions and packaging requirements.",
    image: image("products/cone1.png"),
    imageAlt: "Black plastic cone tube with dimensions shown in the product image",
    gallery: [
      image("products/cone2.png"),
      image("products/cone3.png"),
      image("products/cone4.png"),
      image("products/cone5.png"),
    ],
    materials: ["Plastic"],
    specifications: [
      {
        label: "Sizes",
        value: "Multiple sizes; two supplied image labels show 11.5 × 1.5 cm and 11.8 × 1.9 cm",
      },
      {
        label: "Colors",
        value: "Customizable; the supplied images show black, white, pink, and clear examples",
      },
      { label: "Application", value: "Cone storage and protection" },
    ],
    variants: ["Multiple sizes and colors"],
    customization: "Custom colors, sizes, and branding are listed, subject to availability.",
    keywords: ["plastic tube", "cone tube", "tubes", "storage"],
    featured: true,
    relatedProductSlugs: ["pre-rolled-cones", "silicone-storage", "silicone-ashtrays"],
  },
  {
    id: "silicone-storage",
    name: "Silicone Storage Containers",
    slug: "silicone-storage",
    category: "Silicone Accessories",
    shortDescription: "Reusable silicone storage containers in various shapes, sizes, and colors.",
    description:
      "Silicone storage containers are described in the catalogue as flexible, reusable products available in various shapes, sizes, and customizable colors.",
    image: image("products/silicon_storage1.png"),
    imageAlt: "Silicone storage containers shown in five colors in the supplied product image",
    materials: ["Silicone"],
    specifications: [
      { label: "Shapes and sizes", value: "Various options; confirm current availability" },
      { label: "Colors", value: "Customizable" },
    ],
    customization:
      "Custom colors, logos, and designs are listed, subject to manufacturing capabilities.",
    keywords: ["silicone", "silicon", "storage", "container", "containers"],
    featured: true,
    relatedProductSlugs: ["silicone-ashtrays", "plastic-cone-tubes", "plastic-grinders"],
  },
  {
    id: "silicone-ashtrays",
    name: "Silicone Ashtrays",
    slug: "silicone-ashtrays",
    category: "Silicone Accessories",
    shortDescription: "Flexible, reusable silicone ashtrays in varied shapes, sizes, and colors.",
    description:
      "Silicone ashtrays are listed alongside silicone storage products. The catalogue describes flexible construction and various shapes, sizes, and customizable colors.",
    image: image("products/ash_tray1.png"),
    imageAlt: "Color options for silicone ashtrays shown in the supplied Wenside product images",
    gallery: [image("products/ash_tray2.png"), image("products/ash_tray3.png")],
    materials: ["Silicone"],
    specifications: [
      { label: "Shapes and sizes", value: "Various options; confirm current availability" },
      { label: "Colors", value: "Customizable" },
    ],
    customization:
      "Custom colors, logos, and designs are listed, subject to manufacturing capabilities.",
    keywords: ["silicone", "silicon", "ashtray", "ashtrays", "ash tray"],
    featured: true,
    relatedProductSlugs: ["smoking-trays", "silicone-storage", "metal-grinders"],
  },
];

export const productCategories = [...new Set(products.map((product) => product.category))];

export function getProductCategoryDetails() {
  return productCategories.map((name) => {
    const categoryProducts = products.filter((product) => product.category === name);
    const representative = categoryProducts.find((product) => product.image) ?? categoryProducts[0];
    return {
      name,
      count: categoryProducts.length,
      image: representative.image,
      imageAlt: representative.imageAlt ?? `${name} category`,
      description: representative.shortDescription,
    };
  });
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
