const dummyData = {
  categories: [
    { name: "Lattes", description: "A tasty offering of hand crafted lattes!" },
    {
      name: "Coffees",
      description: "Try our deliciously crafted Americano, or build your own!",
    },
    {
      name: "Hot Chocolates",
      description: "Delicious hand made hot chocolate!",
    },
    {
      name: "Others",
      description: "A variety of other awe inspiring offerings!",
    },
  ],

  customizations: [
    // Drink
    { name: "Hot Drink", price: 0.0, type: "drink" },
    { name: "Iced Drink", price: 0.0, type: "drink" },
    // Milk
    { name: "Oat Milk", price: 1.0, type: "milk" },
    // Syrup
    { name: "Vanilla (3 Pumps)", price: 0.75, type: "syrup" },
    { name: "Vanilla (2 Pumps)", price: 0.5, type: "syrup" },
    { name: "Vanilla (1 Pump)", price: 0.25, type: "syrup" },
    { name: "Pistachio (3 Pumps)", price: 0.75, type: "syrup" },
    { name: "Pistachio (2 Pumps)", price: 0.5, type: "syrup" },
    { name: "Pistachio (1 Pump)", price: 0.25, type: "syrup" },
    { name: "Lavender (3 Pumps)", price: 0.75, type: "syrup" },
    { name: "Lavender (2 Pumps)", price: 0.5, type: "syrup" },
    { name: "Lavender (1 Pump)", price: 0.25, type: "syrup" },
    { name: "Caramel (3 Pumps)", price: 0.75, type: "syrup" },
    { name: "Caramel (2 Pumps)", price: 0.5, type: "syrup" },
    { name: "Caramel (1 Pump)", price: 0.25, type: "syrup" },
  ],

  menu: [
    {
      name: "El Gozo - Signature Mexican Latte",
      description:
        "The El Gozo Latte blends Southern California ease with rich Mexican tradition. This handcrafted, dairy-free latte pairs bold espresso with creamy oat milk and subtle notes of cinnamon and vanilla, inspired by the warmth of classic café de olla.\n" +
        "Smooth, spiced, and deeply comforting—it’s a joyful fusion of flavor and culture in every sip.",
      image_url:
        "https://nyc.cloud.appwrite.io/v1/storage/buckets/68daa9c7001771629ae0/files/68daad800006ae3d8d5f/view?project=68d5b889000f5a84d326&mode=admin",
      price: 6.0,
      rating: 5.0,
      calories: 0,
      category_name: "Lattes",
      customizations: ["Hot Drink", "Iced Drink"],
    },
    {
      name: "El Gozorito Hot Chocolate",
      description:
        "Rich, creamy, and full of love—just like Abuelita made it. A cozy blend of chocolate and warm spices in every sip. Part of our Just-in Joy mission—to make everyday moments feel nostalgic",
      image_url:
        "https://nyc.cloud.appwrite.io/v1/storage/buckets/68daa9c7001771629ae0/files/68daaf5e000fca22fb8d/view?project=68d5b889000f5a84d326&mode=admin",
      price: 5.0,
      rating: 5.0,
      calories: 0,
      category_name: "Hot Chocolates",
      customizations: ["Hot Drink", "Iced Drink"],
    },
    {
      name: "Americano",
      description:
        "Crafted for moments of simple joy, this lightly roasted Americano blends smooth espresso with gentle, creamy nutty notes—like toasted hazelnut and a hint of almond. Hot, it’s warm and comforting with a soft, velvety finish. Iced, it’s clean, crisp, and refreshing, with those nutty tones shining through. Part of our Just-in Joy mission—to turn everyday sips into small, feel-good moments.",
      image_url:
        "https://nyc.cloud.appwrite.io/v1/storage/buckets/68daa9c7001771629ae0/files/68dab1bc0003c71ca1ba/view?project=68d5b889000f5a84d326&mode=admin",
      price: 4.25,
      rating: 5.0,
      calories: 0,
      category_name: "Coffees",
      customizations: [
        "Hot Drink",
        "Iced Drink",
        "Oat Milk",
        "Pistachio (3 Pumps)",
        "Pistachio (2 Pumps)",
        "Pistachio (1 Pump)",
        "Lavender (3 Pumps)",
        "Lavender (2 Pumps)",
        "Lavender (1 Pump)",
        "Caramel (3 Pumps)",
        "Caramel (2 Pumps)",
        "Caramel (1 Pump)",
      ],
    },
    {
      name: "Lavender",
      description:
        "Soothing, floral, and beautifully balanced. Our handcrafted Lavender Latte blends rich espresso with steamed milk and a hint of natural lavender syrup for a calming, aromatic sip that feels like reining in the wild of your day. Made to order and available hot or iced — it’s like a quiet escape in every cup.",
      image_url:
        "https://nyc.cloud.appwrite.io/v1/storage/buckets/68daa9c7001771629ae0/files/68dab23c00292c9ef44a/view?project=68d5b889000f5a84d326&mode=admin",
      price: 6.0,
      rating: 5.0,
      calories: 0,
      category_name: "Lattes",
      customizations: ["Hot Drink", "Iced Drink"],
    },
    {
      name: "Pistachi-OOOh",
      description:
        "A uniquely handcrafted, dairy-free delight. The Just-In Joy Pistachi-oooh Latte pairs bold espresso with velvety oat milk and our signature pistachio blend for a smooth, nutty, and naturally sweet experience. Made with care and finished with a sprinkle of crushed pistachios, it’s a cozy, plant-based indulgence that brings pure joy in every sip.",
      image_url:
        "https://nyc.cloud.appwrite.io/v1/storage/buckets/68daa9c7001771629ae0/files/68dab2be002e6f61e5d1/view?project=68d5b889000f5a84d326&mode=admin",
      price: 6.0,
      rating: 5.0,
      calories: 0,
      category_name: "Lattes",
      customizations: ["Hot Drink", "Iced Drink"],
    },
    {
      name: "Caramel",
      description:
        "A uniquely handcrafted, dairy-free delight. The Just-In Joy Pistachi-oooh Latte pairs bold espresso with velvety oat milk and our signature pistachio blend for a smooth, nutty, and naturally sweet experience. Made with care and finished with a sprinkle of crushed pistachios, it’s a cozy, plant-based indulgence that brings pure joy in every sip.",
      image_url:
        "https://nyc.cloud.appwrite.io/v1/storage/buckets/68daa9c7001771629ae0/files/68dab33600084633f382/view?project=68d5b889000f5a84d326&mode=admin",
      price: 6.0,
      rating: 5.0,
      calories: 0,
      category_name: "Lattes",
      customizations: ["Hot Drink", "Iced Drink"],
    },
    {
      name: "Build Your Own",
      description:
        "Customize your perfect coffee or latte complemented by a selection of sweeteners such as raw sugar, honey, agave syrup, and a variety of premium syrup flavors.",
      image_url:
        "https://nyc.cloud.appwrite.io/v1/storage/buckets/68daa9c7001771629ae0/files/68dab37800069552292f/view?project=68d5b889000f5a84d326&mode=admin",
      price: 4.25,
      rating: 5.0,
      calories: 0,
      category_name: "Lattes",
      customizations: [
        "Hot Drink",
        "Iced Drink",
        "Oat Milk",
        "Pistachio (3 Pumps)",
        "Pistachio (2 Pumps)",
        "Pistachio (1 Pump)",
        "Lavender (3 Pumps)",
        "Lavender (2 Pumps)",
        "Lavender (1 Pump)",
        "Caramel (3 Pumps)",
        "Caramel (2 Pumps)",
        "Caramel (1 Pump)",
      ],
    },
  ],
};

export default dummyData;
