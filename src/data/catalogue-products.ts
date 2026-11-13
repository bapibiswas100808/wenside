import type { Product } from "@/types/product";

const image = (folder: string, file: string) => `/images/products/${folder}/${file}`;

const coneImage = (file: string) => image("prerolled_cone_all", file);

const preRolledConeVariants = [
  { quantity: 1000, style: "Pink", photos: [coneImage("1000/pink1000.jpg")] },
  { quantity: 1000, style: "White", photos: [coneImage("1000/white1000.jpg")] },
  { quantity: 1000, style: "Natural", photos: [coneImage("1000/natural1000.jpg")] },
  { quantity: 420, style: "White", photos: [coneImage("420/white420.png")] },
  { quantity: 420, style: "Natural", photos: [coneImage("420/natural420.png")] },
  { quantity: 420, style: "Color", photos: [coneImage("420/color420.png")] },
  { quantity: 300, style: "Pink", photos: [coneImage("300/pink300.jpg")] },
  { quantity: 300, style: "Ice Cream", photos: [coneImage("pink_icecream72.jpg")] },
  { quantity: 200, style: "Black", photos: [coneImage("200/black200.jpg")] },
  {
    quantity: 200,
    style: "Natural",
    photos: [coneImage("200/natural200.png"), coneImage("200box/natural200.png")],
  },
  { quantity: 200, style: "White", photos: [coneImage("200box/white200.jpg")] },
  {
    quantity: 200,
    style: "Color",
    photos: [image("prerolled_cone", "prerolled1.jpg")],
  },
  {
    quantity: 100,
    style: "Color",
    photos: [image("prerolled_cone", "prerolled1.jpg")],
  },
  {
    quantity: 100,
    style: "Pink",
    photos: [coneImage("100/pink100.jpg"), coneImage("100box/pink100.png")],
  },
  { quantity: 100, style: "Purple", photos: [coneImage("100/purple100.jpg")] },
  { quantity: 100, style: "Blue", photos: [coneImage("100/blue100.jpg")] },
  { quantity: 100, style: "Natural", photos: [coneImage("100/natural100.jpg")] },
  { quantity: 100, style: "White", photos: [coneImage("100box/white100.png")] },
  { quantity: 50, style: "Natural", photos: [coneImage("50/natural50.jpg")] },
  { quantity: 50, style: "White", photos: [coneImage("50/white50.jpg")] },
  { quantity: 50, style: "Color", photos: [coneImage("50/color50.jpg")] },
] as const;

const hempWrapFlavors = [
  "Strawberry",
  "Peach",
  "Orange",
  "Chocolate",
  "Vanilla",
  "Original",
  "Mixed",
] as const;

const hempWrapPhotos: Record<(typeof hempWrapFlavors)[number], string> = {
  Strawberry: "strawberry1.jpg",
  Peach: "peach1.jpg",
  Orange: "orange1.jpg",
  Chocolate: "chocolate1.jpg",
  Vanilla: "vanilla1.jpg",
  Original: "natural.jpg",
  Mixed: "hempwrap1.png",
};

const hempWrapProductIds: Record<(typeof hempWrapFlavors)[number], number> = {
  Strawberry: 20,
  Peach: 21,
  Orange: 22,
  Chocolate: 23,
  Vanilla: 24,
  Original: 25,
  Mixed: 40,
};

const carbonFilterTipVariants = [
  { diameter: "5.3", quantity: 50, pack: "50 pcs" },
  { diameter: "5.3", quantity: 100, pack: "100 pcs bag" },
  { diameter: "6", quantity: 50, pack: "50 pcs" },
  { diameter: "6", quantity: 100, pack: "100 pcs bag" },
  { diameter: "7", quantity: 50, pack: "50 pcs" },
  { diameter: "7", quantity: 100, pack: "100 pcs bag" },
  { diameter: "8", quantity: 50, pack: "50 pcs" },
  { diameter: "8", quantity: 100, pack: "100 pcs bag" },
] as const;

const cigaretteFilterTipVariants = [
  { diameter: 6, quantity: 50 },
  { diameter: 7, quantity: 50 },
  { diameter: 6, quantity: 100 },
  { diameter: 7, quantity: 100 },
  { diameter: 6, quantity: 200 },
  { diameter: 7, quantity: 200 },
] as const;

export const products: Product[] = [
  {
    id: 1,
    slug: "zapwrap-rolling-papers",
    name: "Rolling Papers - 70mm - 50 Booklets",
    category: "Rolling Papers",
    description: "Ultra fine 70 mm rolling papers, 50 booklets.",
    longDescription:
      "A 50-booklet pack of 70 mm rolling papers. The catalogue range includes natural wood-pulp or hemp paper, ultra-thin options, classic-flap or magnetic booklets, and custom cover printing for retail or private-label collections.",
    image: image("booklet", "booklet70mm.png"),
    gallery: [
      image("booklet", "booklet70mm.png"),
      image("booklet", "booklet2.png"),
      image("booklet", "booklet3.png"),
      image("booklet", "booklet4.png"),
      image("booklet", "booklet5.png"),
    ],
    featured: true,
    badge: "50 BOOKLETS",
    specifications: [
      { label: "Size", value: "70 mm" },
      { label: "Paper options", value: "Natural wood pulp or hemp paper" },
      { label: "Paper weight", value: "Ultra-thin options available" },
      { label: "Booklet styles", value: "Classic flap or magnetic" },
      { label: "Pack", value: "50 booklets" },
      { label: "Customization", value: "Custom sizes and cover printing" },
    ],
  },
  {
    id: 26,
    slug: "rolling-papers-108mm-50-booklets",
    name: "Rolling Papers - 108mm - 50 Booklets",
    category: "Rolling Papers",
    description: "108 mm rolling papers, 50 booklets.",
    longDescription:
      "A 50-booklet pack of 108 mm rolling papers. Catalogue options include natural wood-pulp or hemp paper, ultra-thin papers, classic-flap or magnetic booklets, and custom cover printing.",
    image: image("booklet", "booklet108mm.png"),
    gallery: [
      image("booklet", "booklet108mm.png"),
      image("booklet", "booklet2.png"),
      image("booklet", "booklet3.png"),
      image("booklet", "booklet4.png"),
      image("booklet", "booklet5.png"),
    ],
    featured: false,
    badge: "50 BOOKLETS",
    specifications: [
      { label: "Size", value: "108 mm" },
      { label: "Paper options", value: "Natural wood pulp or hemp paper" },
      { label: "Paper weight", value: "Ultra-thin options available" },
      { label: "Booklet styles", value: "Classic flap or magnetic" },
      { label: "Pack", value: "50 booklets" },
      { label: "Customization", value: "Custom sizes and cover printing" },
    ],
  },
  {
    id: 37,
    slug: "paper-bobbins",
    name: "Paper Bobbins",
    category: "Paper Bobbins",
    description: "Bulk paper rolls for automatic pre-roll machines and production supply.",
    longDescription:
      "Paper bobbins for automatic pre-roll production and bulk paper supply. The catalogue lists 36, 44, and 54 mm widths with roll lengths up to 5,000 m, across wood, unbleached hemp, hemp, flavored, and colored paper grades. Confirm the paper grade and roll format when ordering.",
    image: image("bobbins", "bobbins1.jpg"),
    gallery: [
      image("bobbins", "bobbins1.jpg"),
      image("bobbins", "bobbins2.jpg"),
      image("bobbins", "bobbins3.jpg"),
    ],
    featured: false,
    specifications: [
      { label: "Widths", value: "36 mm, 44 mm, and 54 mm" },
      { label: "Roll length", value: "Up to 5,000 m" },
      {
        label: "Paper grades",
        value:
          "12.5 gsm wood; 13 gsm unbleached pure hemp; 14 gsm hemp, flavored, or colored; 18.5–20 gsm wood",
      },
      { label: "Applications", value: "Automatic pre-roll machines and bulk supply" },
    ],
  },
  ...preRolledConeVariants.map(({ quantity, style, photos }, index) => ({
    id: index + 100,
    slug:
      index === 0
        ? "zapwrap-pre-rolled-cones"
        : `pre-rolled-cones-${quantity}pcs-${style.toLowerCase().replaceAll(" ", "-")}`,
    name: `Pre-Rolled Cones - ${quantity}pcs ${style}`,
    category: "Pre-Rolled Cones" as const,
    description: `${quantity}-piece pack of ${style.toLowerCase()} ready-to-fill pre-rolled cones.`,
    longDescription: `A ${quantity}-piece pack of ${style.toLowerCase()} ready-to-fill cones. The catalogue describes food-grade natural paper, a slow and even burn, machine rolling with hand inspection, and filters available on request. Formats include 70, 84, 98, 109 mm, and King Size, with custom branding and packaging available.`,
    image: photos[0],
    gallery: [...photos],
    featured: index === 0,
    badge: `${quantity} PCS`,
    specifications: [
      { label: "Pack quantity", value: `${quantity} pieces` },
      { label: "Style", value: style },
      { label: "Paper", value: "Food-grade natural paper" },
      { label: "Available sizes", value: "70, 84, 98, 109 mm, and King Size" },
      { label: "Production", value: "Machine-rolled and hand-inspected" },
      { label: "Filter", value: "Available on request" },
    ],
  })),
  ...hempWrapFlavors.map((flavor) => ({
    id: hempWrapProductIds[flavor],
    slug:
      flavor === "Strawberry"
        ? "enhanced-natural-wraps"
        : flavor === "Original"
          ? "hemp-wraps-25-pack-natural"
          : `hemp-wraps-25-pack-${flavor.toLowerCase()}`,
    name: `Hemp Wraps - 25 Pack - ${flavor}`,
    category: "Hemp Wraps" as const,
    description: `25-pack of tobacco-free ${flavor.toLowerCase()} hemp-fiber wraps.`,
    longDescription: `A 25-pack of ${flavor.toLowerCase()} wraps made from hemp fiber. The catalogue describes a smooth, supple texture, slow-burning options, and moisture-controlled packaging. OEM sizes, flavors, and packaging are available.`,
    image: image("hempwrap", hempWrapPhotos[flavor]),
    gallery: [image("hempwrap", hempWrapPhotos[flavor])],
    featured: flavor === "Strawberry",
    badge: "25 PACK",
    specifications: [
      { label: "Flavor", value: flavor },
      { label: "Material", value: "Hemp fiber; entirely tobacco-free" },
      { label: "Texture", value: "Smooth and supple" },
      { label: "Packaging", value: "Moisture-controlled for freshness" },
      { label: "Pack", value: "25 wraps" },
      { label: "Customization", value: "OEM sizes, flavors, and packaging" },
    ],
  })),
  {
    id: 4,
    slug: "king-size-rolled-tips",
    name: "Paper Tips - 500 pcs",
    category: "Filter Tips",
    description: "Pre-rolled, unbleached kraft paper tips, 500 pieces.",
    longDescription:
      "A 500-piece pack of paper tips. The catalogue range includes paper and perforated tips in loose, pre-rolled, or retail-packaged formats, with custom shapes, sizes, branding, and bulk or retail packaging options.",
    image: image("tips", "tips500.png"),
    gallery: [
      image("tips", "tips500.png"),
      image("tips", "tips1.png"),
      image("tips", "tips2.png"),
      image("tips", "tips3.png"),
      image("tips", "tips4.png"),
      image("tips", "tips5.png"),
      image("tips", "tips6.png"),
      image("tips", "tips11.jpg"),
    ],
    featured: true,
    badge: "500 TIPS",
    specifications: [
      { label: "Format", value: "King size, pre-rolled" },
      { label: "Material", value: "Unbleached kraft paper" },
      { label: "Pack", value: "500 tips" },
      { label: "Catalogue options", value: "Paper and perforated tips" },
      { label: "Customization", value: "Custom shapes, sizes, and branding" },
    ],
  },
  {
    id: 27,
    slug: "paper-tips-600-pcs",
    name: "Paper Tips - 600 pcs",
    category: "Filter Tips",
    description: "Pre-rolled, unbleached kraft paper tips, 600 pieces.",
    longDescription:
      "A 600-piece pack of paper tips. Catalogue options include paper and perforated tips, loose or pre-rolled formats, and bulk or retail packaging, with custom shapes, sizes, and branding available.",
    image: image("tips", "tips600.jpg"),
    gallery: [image("tips", "tips600.jpg")],
    featured: false,
    badge: "600 TIPS",
    specifications: [
      { label: "Format", value: "Pre-rolled" },
      { label: "Material", value: "Unbleached kraft paper" },
      { label: "Pack", value: "600 pieces" },
      { label: "Customization", value: "Custom shapes, sizes, and branding" },
    ],
  },
  ...cigaretteFilterTipVariants.map(({ diameter, quantity }, index) => {
    const filename = `ZaPuraP_${quantity}_Filters_${diameter}mm_x_22mm.png`;

    return {
      id: index + 50,
      slug: `cigarette-filter-tips-${diameter}mm-22mm-${quantity}-pcs`,
      name: `Cigarette Filter Tips - ${diameter}mm × 22mm - ${quantity} pcs`,
      category: "Filter Tips" as const,
      description: `${quantity} cigarette filter tips, ${diameter}mm × 22mm.`,
      longDescription: `A bag of ${quantity} cigarette filter tips measuring ${diameter}mm × 22mm. Available in 6mm and 7mm diameters and 50-, 100-, or 200-piece packs.`,
      image: image("tips/ciggerate_tips", filename),
      gallery: [image("tips/ciggerate_tips", filename)],
      featured: false,
      badge: `${quantity} FILTERS`,
      specifications: [
        { label: "Type", value: "Cigarette filter tips" },
        { label: "Dimensions", value: `${diameter} mm × 22 mm` },
        { label: "Pack", value: `${quantity} filters per bag` },
      ],
    };
  }),
  {
    id: 5,
    slug: "4-in-1-rolling-accessory-kit",
    name: "4-in-1 Rolling Accessory Kit",
    category: "Accessories",
    description: "A compact kit to grind, store, pack, and press.",
    longDescription:
      "A compact four-piece accessory kit for coordinated retail ranges and branded sets. Its packaging lists a grinder, silicone jar, packing poker, and tray. Confirm the exact kit configuration and materials for the selected order; the catalogue lists OEM branding and packaging options for accessory ranges.",
    image: image("accessories", "accessories1.png"),
    gallery: [
      image("accessories", "accessories1.png"),
      image("accessories", "accessories2.jpg"),
      image("accessories", "accessories3.png"),
    ],
    featured: true,
    badge: "4-IN-1",
    specifications: [
      { label: "Includes", value: "Grinder, jar, poker, and tray" },
      { label: "Use", value: "Retail accessory ranges and branded sets" },
      { label: "Customization", value: "OEM branding and packaging options" },
    ],
  },
  {
    id: 6,
    slug: "clear-grinder",
    name: "Clear Grinder",
    category: "Accessories",
    description: "A clear plastic grinder from a customizable range of sizes and designs.",
    longDescription:
      "A clear plastic grinder from the catalogue's plastic and metal grinder range. Options include multiple sizes and designs, custom colors and finishes, logo printing, private labeling, and OEM service.",
    image: image("grinders", "grinders3.jpg"),
    gallery: [
      image("grinders", "grinders1.jpg"),
      image("grinders", "grinders2.jpg"),
      image("grinders", "grinders3.jpg"),
      image("grinders", "grinders4.jpg"),
    ],
    featured: false,
    specifications: [
      { label: "Material", value: "Plastic" },
      { label: "Available options", value: "Multiple sizes, designs, colors, and finishes" },
      { label: "Branding", value: "Logo printing and private labeling" },
      { label: "Service", value: "OEM available" },
    ],
  },
  {
    id: 7,
    slug: "metal-grinder",
    name: "Metal Grinder",
    category: "Accessories",
    description: "Metal grinders in multiple sizes, designs, and customizable finishes.",
    longDescription:
      "Metal grinders from a customizable range of sizes and designs. The catalogue lists custom colors and finishes, logo printing, private labeling, and OEM service.",
    image: image("grinders", "metal1.png"),
    gallery: [
      image("grinders", "metal1.png"),
      image("grinders", "metal2.png"),
      image("grinders", "metal3.png"),
      image("grinders", "metal4.png"),
      image("grinders", "metal5.png"),
    ],
    featured: true,
    badge: "MULTIPLE FINISHES",
    specifications: [
      { label: "Material", value: "Metal" },
      { label: "Available options", value: "Multiple sizes, designs, colors, and finishes" },
      { label: "Branding", value: "Logo printing and private labeling" },
      { label: "Service", value: "OEM available" },
    ],
  },
  {
    id: 8,
    slug: "silicone-ashtray",
    name: "Silicone Ashtray",
    category: "Accessories",
    description: "Flexible, reusable silicone ashtrays in varied shapes, sizes, and colors.",
    longDescription:
      "Silicone ashtrays for storage and disposal in accessory collections. The catalogue lists flexible, reusable designs in multiple shapes and sizes, with custom colors, logos, and designs and OEM service available.",
    image: image("silicon", "silicon2.jpg"),
    gallery: [
      image("silicon", "silicon1.jpg"),
      image("silicon", "silicon2.jpg"),
      image("silicon", "silicon3.jpg"),
      image("silicon", "silicon4.jpg"),
      image("silicon", "ash_tray2.png"),
      image("silicon", "ash_tray3.png"),
    ],
    featured: false,
    specifications: [
      { label: "Material", value: "Silicone" },
      { label: "Shapes and sizes", value: "Multiple options; confirm model availability" },
      { label: "Customization", value: "Custom colors, logos, and designs" },
      { label: "Service", value: "OEM available" },
    ],
  },
  ...carbonFilterTipVariants.map(({ diameter, quantity, pack }, index) => ({
    id: index === 0 ? 9 : index + 27,
    slug:
      index === 0 ? "carbon-filter-tips" : `carbon-filter-tips-${diameter}mm-26mm-${quantity}-pcs`,
    name: `Carbon Filter Tips - ${diameter}mm × 26mm - ${quantity} pcs`,
    category: "Filter Tips" as const,
    description: `${diameter}mm × 26mm carbon filter tips, ${pack}.`,
    longDescription: `A ${pack} of ${diameter} mm × 26 mm activated coconut-charcoal tips. The catalogue specifies ceramic caps, round or cylindrical carbon, and customizable body colors; verify the exact size and format for each order.`,
    image: image("tips", "carbon_tips1.png"),
    gallery: [image("tips", "carbon_tips1.png"), image("tips", "carbon_tips2.png")],
    featured: false,
    badge: `${quantity} PCS`,
    specifications: [
      { label: "Type", value: "Carbon filter tips" },
      { label: "Material", value: "Activated coconut charcoal with ceramic caps" },
      { label: "Dimensions", value: `${diameter} mm × 26 mm` },
      { label: "Carbon shape", value: "Round or cylindrical" },
      { label: "Body color", value: "Customizable" },
      { label: "Pack", value: pack },
    ],
  })),
  {
    id: 10,
    slug: "silicone-storage-container",
    name: "Silicone Storage Container",
    category: "Accessories",
    description: "Flexible, reusable silicone storage containers in multiple shapes and sizes.",
    longDescription:
      "Silicone storage containers for accessory collections. The catalogue describes reusable silicone products in multiple shapes and sizes, with customizable colors, logos, and designs and OEM service available.",
    image: image("silicon", "silicon5.jpg"),
    gallery: [
      image("silicon", "silicon5.jpg"),
      image("silicon", "silicon6.jpg"),
      image("silicon", "silicon7.jpg"),
      image("silicon", "silicon8.jpg"),
    ],
    featured: false,
    specifications: [
      { label: "Material", value: "Silicone" },
      { label: "Shapes and sizes", value: "Multiple options; confirm model availability" },
      { label: "Customization", value: "Custom colors, logos, and designs" },
      { label: "Service", value: "OEM available" },
    ],
  },
  {
    id: 11,
    slug: "plastic-cone-tubes",
    name: "Plastic Cone Tubes",
    category: "Accessories",
    description: "Plastic tubes that protect pre-rolled cones for storage and retail packaging.",
    longDescription:
      "Plastic tubes provide portable protection for pre-rolled cones. The catalogue lists multiple sizes, custom colors and branding, and OEM sizes subject to availability.",
    image: image("tube", "tube1.jpg"),
    gallery: [
      image("tube", "tube1.jpg"),
      image("tube", "tube2.jpg"),
      image("tube", "tube3.jpg"),
      image("tube", "tube4.jpg"),
    ],
    featured: false,
    specifications: [
      { label: "Material", value: "Plastic" },
      { label: "Sizes", value: "Multiple sizes; OEM sizes subject to availability" },
      { label: "Customization", value: "Custom colors and branding" },
    ],
  },
  {
    id: 38,
    slug: "smoking-tray",
    name: "Smoking Tray",
    category: "Accessories",
    description: "Smoking trays in multiple materials, sizes, shapes, and designs.",
    longDescription:
      "Smoking and rolling trays provide organized surfaces for accessories. The catalogue lists multiple materials, sizes, and shapes, with custom colors, artwork, logos, and OEM service available.",
    image: image("accessories", "tray/tray1.png"),
    gallery: [image("accessories", "tray/tray1.png"), image("accessories", "tray/tray2.png")],
    featured: false,
    specifications: [
      { label: "Options", value: "Multiple materials, sizes, shapes, and designs" },
      { label: "Customization", value: "Custom colors, artwork, and logos" },
      { label: "Service", value: "OEM available" },
    ],
  },
  {
    id: 39,
    slug: "rolling-machine",
    name: "Rolling Machine",
    category: "Accessories",
    description: "Rolling machines in multiple sizes, models, and styles.",
    longDescription:
      "Rolling machines are convenient tools available in multiple sizes and models. Materials vary by model; the catalogue lists custom branding and packaging and OEM service.",
    image: image("accessories", "rolling_machine/rolling_machine1.png"),
    gallery: [
      image("accessories", "rolling_machine/rolling_machine1.png"),
      image("accessories", "rolling_machine/rolling_machine2.png"),
    ],
    featured: false,
    specifications: [
      { label: "Sizes and models", value: "Multiple options; confirm model availability" },
      { label: "Materials", value: "Varies by model" },
      { label: "Customization", value: "Custom branding and packaging" },
      { label: "Service", value: "OEM available" },
    ],
  },
];

export const categories = [
  {
    name: "Pre-Rolled Cones",
    description: "Natural and flavored ready-made cones.",
    image: image("prerolled_cone", "prerolled13.jpg"),
  },
  {
    name: "Rolling Papers",
    description: "Ultra fine papers for everyday rolls.",
    image: image("booklet", "booklet70mm.png"),
  },
  {
    name: "Paper Bobbins",
    description: "Bulk paper rolls for automatic pre-roll machines and production supply.",
    image: image("bobbins", "bobbins1.jpg"),
  },
  {
    name: "Hemp Wraps",
    description: "Natural plant-fiber wraps in mixed flavors.",
    image: image("hempwrap", "strawberry1.jpg"),
  },
  {
    name: "Filter Tips",
    description: "Paper, cigarette, and carbon filter tips.",
    image: image("tips", "tips500.png"),
  },
  {
    name: "Accessories",
    description: "Storage, grinders, tubes, and rolling kits.",
    image: image("accessories", "accessories1.png"),
  },
];
