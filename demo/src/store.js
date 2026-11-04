// ============================================================
//  EDIT THIS FILE FOR EACH NEW CLIENT. Nothing else needs changing.
// ============================================================
//  - Prices are plain numbers in taka.
//  - `image`: paste a photo URL (or put a file in /public and write "/photo.jpg").
//    Leave it out and the site draws a coloured fabric swatch instead.
//  - `color`: used for the swatch and as an accent when there is no photo.
//  - `sizes`: leave out for products without sizes.
//  - `inStock: false` shows the item as sold out.

export const store = {
  name: "নকশী ঘর",
  nameLatin: "Nakshi Ghor",
  tagline: "হাতে সেলাই করা কাঁথা, শাড়ি আর পাঞ্জাবি — সরাসরি কারিগরের কাছ থেকে।",
  about:
    "যশোর আর কুষ্টিয়ার ২২ জন নারী কারিগরের হাতে তৈরি। প্রতিটি নকশা আলাদা, তাই দুটো পণ্য কখনো হুবহু এক হয় না।",

  // Contact. WhatsApp number with country code, digits only.
  whatsapp: "8801891966267",
  messengerUsername: "nakshighor", // the part after facebook.com/
  facebookUrl: "https://facebook.com/nakshighor",
  phoneDisplay: "০১৭০০-০০০০০০",
  address: "মিরপুর ১০, ঢাকা",
  hours: "প্রতিদিন সকাল ১০টা – রাত ১০টা",

  // Delivery charge, chosen by the customer at checkout.
  delivery: [
    { id: "inside", label: "ঢাকার ভেতরে", fee: 70, time: "১–২ দিন" },
    { id: "outside", label: "ঢাকার বাইরে", fee: 130, time: "৩–৫ দিন" },
  ],
  payment: ["ক্যাশ অন ডেলিভারি", "বিকাশ", "নগদ"],

  previewNote: "এটি একটি ডেমো দোকান। অর্ডার পাঠালে সেটা Blacksheep Digital Studio-র WhatsApp-এ যাবে, যাতে আপনি নিজে দেখতে পারেন কীভাবে কাজ করে।",

  // Language for numbers and built-in labels: "bn" or "en".
  lang: "bn",

  // Your credit in the footer. Every client site advertises you.
  // Delete these two lines if a client doesn't want it.
  builtBy: "Blacksheep Digital Studio",
  builtByUrl: "../",

  categories: [
    { id: "kantha", label: "নকশী কাঁথা" },
    { id: "saree", label: "শাড়ি" },
    { id: "panjabi", label: "পাঞ্জাবি" },
    { id: "home", label: "ঘর সাজানো" },
  ],

  products: [
    {
      id: "k1",
      name: "লাল পদ্ম নকশী কাঁথা",
      category: "kantha",
      price: 4200,
      oldPrice: 4800,
      color: "#B8323F",
      description: "ডাবল বেড সাইজ (৭×৫ ফুট)। সুতি কাপড়ে পদ্ম আর লতাপাতার নকশা, পুরোটা হাতে সেলাই।",
      tag: "বেস্ট সেলার",
    },
    {
      id: "k2",
      name: "নীল মাছ কাঁথা (বাচ্চাদের)",
      category: "kantha",
      price: 1650,
      color: "#2C4A8C",
      description: "৪×৩ ফুট। নরম পুরনো শাড়ির কাপড়ে তৈরি, বাচ্চাদের জন্য আরামদায়ক।",
    },
    {
      id: "s1",
      name: "জামদানি নকশা সুতি শাড়ি",
      category: "saree",
      price: 2850,
      color: "#1F6E5C",
      description: "১২ হাত, ব্লাউজ পিস সহ। পাড়ে হাতে করা কাঁথা স্টিচ।",
      tag: "নতুন",
    },
    {
      id: "s2",
      name: "হলুদ কাঁথা স্টিচ শাড়ি",
      category: "saree",
      price: 3400,
      oldPrice: 3900,
      color: "#D9A21B",
      description: "পুরো জমিনে কাঁথা স্টিচ। অনুষ্ঠানে পরার মতো, হালকা ওজন।",
    },
    {
      id: "s3",
      name: "কালো-লাল তাঁতের শাড়ি",
      category: "saree",
      price: 1950,
      color: "#2A2A33",
      description: "টাঙ্গাইলের তাঁত, লাল পাড়। প্রতিদিন পরার জন্য।",
      inStock: false,
    },
    {
      id: "p1",
      name: "সাদা এমব্রয়ডারি পাঞ্জাবি",
      category: "panjabi",
      price: 1850,
      color: "#8A8F99",
      sizes: ["38", "40", "42", "44"],
      description: "সুতি কাপড়, বুকে হাতে করা সাদা সুতার কাজ।",
    },
    {
      id: "p2",
      name: "মেরুন কাঁথা স্টিচ পাঞ্জাবি",
      category: "panjabi",
      price: 2250,
      color: "#6E1F33",
      sizes: ["38", "40", "42", "44", "46"],
      description: "গলা আর হাতায় কাঁথা স্টিচ। ঈদ আর বিয়ের জন্য জনপ্রিয়।",
      tag: "বেস্ট সেলার",
    },
    {
      id: "h1",
      name: "কুশন কভার সেট (৫টি)",
      category: "home",
      price: 1350,
      color: "#C2683A",
      description: "১৬×১৬ ইঞ্চি, চেইন সহ। ভেতরের কুশন দেওয়া হয় না।",
    },
    {
      id: "h2",
      name: "নকশী টেবিল রানার",
      category: "home",
      price: 780,
      color: "#3E6B48",
      description: "৬ ফুট লম্বা। ডাইনিং টেবিলের জন্য।",
    },
  ],
};
