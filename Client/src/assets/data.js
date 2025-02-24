import megamenu from "../assets/menu-banner.jpg"

import slide1 from "../assets/slide-1.jpg"
import slide2 from "../assets/slide-2.jpg"

import baby from "../assets/category-baby-care.jpg"
import Atta from "../assets/category-atta-rice-dal.jpg"
import Backery from "../assets/category-bakery-biscuits.jpg"
import Meat from "../assets/category-chicken-meat-fish.jpg"
import Clean from "../assets/category-cleaning-essentials.jpg"
import Beverages from "../assets/category-cold-drinks-juices.jpg"
import Dairy from "../assets/category-dairy-bread-eggs.jpg"
import Fruits from "../assets/category-fruits-vegetables.jpg"
import Instant from "../assets/category-instant-food.jpg"
import Pet from "../assets/category-pet-care.jpg"
import Snacks from "../assets/category-snack-munchies.jpg"
import Tea from "../assets/category-tea-coffee-drinks.jpg"

import grocery1 from "../assets/grocery-banner.png"
import grocery2 from "../assets/grocery-banner-2.jpg"

import bhujia from "../assets/product-img-1.jpg"
import nutrichoice from "../assets/product-img-2.jpg"
import star from "../assets/product-img-3.jpg"
import lays from "../assets/product-img-4.jpg"
import popcorn from "../assets/product-img-5.jpg"
import yogurt from "../assets/product-img-6.jpg"
import cheese from "../assets/product-img-7.jpg"
import cornflakes from "../assets/product-img-8.jpg"
import millet from "../assets/product-img-9.jpg"
import butter from "../assets/product-img-10.jpg"

import daily from '../assets/banner-deal.jpg'
import daily1 from "../assets/product-img-11.jpg"
import daily2 from "../assets/product-img-12.jpg"
import daily3 from "../assets/product-img-13.jpg"

export const dropdownData = [
    {
      heading: "All Departments",
      icon: "fa-solid fa-border-all",
      options: [
        "Dairy, Bread & Eggs",
        "Snacks & Munchies",
        "Fruits & Vegetables",
        "Cold Drinks & Juices",
        "Breakfast & Instant Food",
        "Bakery & Biscuits",
        "Chicken, Meat & Fish",
      ],
      className: "All-Depts All-Depts-Mobile",
    },
    {
      heading: "Home",
      icon: "fa-solid fa-angle-down",
      options: [
        "Home Default",
        "Home Modern",
        "Home Creative",
        "Home Local Store",
        "Home Minimalist",
      ],
    },
    {
      heading: "Shop",
      icon: "fa-solid fa-angle-down",
      options: [
        "Shop Grid - Filter",
        "Shop Grid - Filter",
        "Shop Grid - Filter",
        "Shop Grid - Filter",
        "Shop Grid - Filter",
        "Shop Grid - Filter",
        "Shop Grid - Filter",
        "Shop Grid - Filter",
      ],
    },
    {
      heading: "Stores",
      icon: "fa-solid fa-angle-down",
      options: ["Store List", "Store List", "Store List"],
    },
    {
      heading: "Mega menu",
      icon: "fa-solid fa-angle-down",
      megaOptions: [
        {
          title: "Dairy, Bread & Eggs",
          items: [
            "Butter",
            "Milk Drinks",
            "Curd & Yogurt",
            "Eggs",
            "Buns & Bakery",
            "Cheese",
            "Condensed Milk",
            "Dairy Products",
          ],
        },
        {
          title: "Breakfast & Instant Food",
          items: [
            "Breakfast Cereal",
            "Noodles, Pasta & Soup",
            "Frozen Veg Snacks",
            "Frozen Non-Veg Snacks",
            "Instant Mixes",
            "Batter",
            "Fruit and Juices",
          ],
        },
        {
          title: "Cold Drinks & Juices",
          items: [
            "Soft Drinks",
            "Fruit Juices",
            "Coldpress",
            "Water & Ice Cubes",
            "Soda & Mixers",
            "Health Drinks",
            "Herbal Drinks",
            "Milk Drinks",
          ],
        },
      ],
      offer: {
        imgSrc:megamenu,
        text: `Don't miss this<br />offer today`,
        buttonText: "Shop Now",
      },
    },
    {
      heading: "Pages",
      icon: "fa-solid fa-angle-down",
      options: ["Blog", "Blog Single", "Blog", "Blog Single", "Blog", "Blog Single"],
    },
    {
      heading: "Account",
      icon: "fa-solid fa-angle-down",
      options: ["Sign in", "Signup", "Forgot Password", "My Account"],
    },
    {
      heading: "Dashboard",
    },
    {
      heading: "Docs",
      options: ["Documentation", "Changelog V1.0.0"],
    },
  ];

export const sliderData = [
    {
      img: slide1,  // Update this with the correct path
      tag: "Opening Sale Discount 10%",
      heading: "SuperMarket For Fresh Grocery",
      description: "Introduced a new model for online grocery shopping and convenient home delivery",
      buttonText: "Shop Now"
    },
    {
      img: slide2,  // Update this with the correct path
      tag: "Free Shipping - orders over $100",
      heading: "Free Shipping on orders over $100",
      description: "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
      buttonText: "Shop Now"
    }
  ];
  

// src/data/categoriesData.js
export const categoriesData = [
    {
      img: Backery, // Update with the correct path
      title: "Bakery & Biscuits"
    },
    {
      img:  Instant,
      title: "Instant Food"
    },
    {
      img: Tea,
      title: "Tea, Coffee & Drinks"
    },
    {
      img: Atta,
      title: "Atta, Rice & Dal"
    },
    {
      img: baby,
      title: "Baby Care"
    },
    {
      img: Meat,
      title: "Chicken, Meat & Fish"
    },
    {
      img: Clean,
      title: "Cleaning Essentials"
    },
    {
      img: Pet,
      title: "Pet Care"
    },
    {
      img: Dairy,
      title: "Dairy, Bread & Eggs"
    },
    {
      img: Snacks,
      title: "Snacks & Munchies"
    },
    {
      img: Fruits,
      title: "Fruits & Vegetables"
    },
    {
      img: Beverages,
      title: "Beverages"
    }
  ];
  

  // src/data/groceriesData.js
export const groceriesData = [
    {
      img: grocery1, // Update with the correct path
      title: "Fruits & Vegetables",
      offer: "Get Upto 30% off"
    },
    {
      img: grocery2,
      title: "Freshly Baked Buns",
      offer: "Get Upto 25% off"
    }
  ];
  
  
export const products = [
    {
      image: bhujia,
      category: "Snack & Munchies",
      name: "Haldirams's Sev Bhujia",
      rating: "★★★★★",
      price: "$21.6",
      originalPrice: "$24",
      offer: "Sale",
      offerValue: "10%",
    },
    {
      image: nutrichoice,
      category: "Bakery & Biscuits",
      name: "Nutrichoice Digestive",
      rating: "★★★★★",
      price: "$24",
      originalPrice: "$24",
      offer: "",
      offerValue: "",
    },
    {
      image: star,
      category: "Bakery & Biscuits",
      name: "Cadbury 5 Star Chocolate",
      rating: "★★★★★",
      price: "$35",
      originalPrice: "$36",
      offer: "Buy 1 Get $4.00 Off",
      offerValue: "",
    },
    {
      image: lays,
      category: "Snack & Munchies",
      name: "Onion Flavour Potato",
      rating: "★★★★★",
      price: "$3",
      originalPrice: "$5",
      offer: "Hot",
      offerValue: "40%",
    },
    {
      image: popcorn,
      category: "Instant Food",
      name: "Salted Instant Popcorn",
      rating: "★★★★★",
      price: "$11.7",
      originalPrice: "$18",
      offer: "",
      offerValue: "35%",
    },
    {
      image: star,
      category: "Bakery & Biscuits",
      name: "Cadbury 5 Star Chocolate",
      rating: "★★★★★",
      price: "$35",
      originalPrice: "$36",
      offer: "Buy 1 Get $4.00 Off",
      offerValue: "",
    },
    {
      image: bhujia,
      category: "Snack & Munchies",
      name: "Haldirams's Sev Bhujia",
      rating: "★★★★★",
      price: "$21.6",
      originalPrice: "$24",
      offer: "Sale",
      offerValue: "10%",
    },
    {
      image: yogurt,
      category: "Dairy, Bread & Eggs",
      name: "Blueberry Greek Yogurt",
      rating: "★★★★★",
      price: "$14.4",
      originalPrice: "$24",
      offer: "",
      offerValue: "40%",
    },
    {
      image: cheese,
      category: "Dairy, Bread & Eggs",
      name: "Britannia Cheese Slices",
      rating: "★★★★★",
      price: "$24",
      originalPrice: "$26",
      offer: "",
      offerValue: "",
    },
    {
      image: cornflakes,
      category: "Instant Food",
      name: "Kellogs's Original Cereals",
      rating: "★★★★★",
      price: "$29.5",
      originalPrice: "$34",
      offer: "",
      offerValue: "15%",
    },
    {
      image: nutrichoice,
      category: "Bakery & Biscuits",
      name: "NutriChoice Digestive",
      rating: "★★★★★",
      price: "$24",
      originalPrice: "$24",
      offer: "",
      offerValue: "",
    },
    {
      image: millet,
      category: "Snack & Munchies",
      name: "Slurrp Millet Chocolate",
      rating: "★★★★★",
      price: "$0",
      originalPrice: "$0",
      offer: "",
      offerValue: "",
    },
    {
      image: butter,
      category: "Dairy, Bread & Eggs",
      name: "Amul Butter - 500 g",
      rating: "★★★★★",
      price: "$13.5",
      originalPrice: "$18",
      offer: "",
      offerValue: "25%",
    },
    {
      image: nutrichoice,
      category: "Bakery & Biscuits",
      name: "Nutrichoice Digestive",
      rating: "★★★★★",
      price: "$24",
      originalPrice: "$24",
      offer: "",
      offerValue: "",
    },
    {
      image: millet,
      category: "Snack & Munchies",
      name: "Slurrp Millet Chocolate",
      rating: "★★★★★",
      price: "$0",
      originalPrice: "$0",
      offer: "",
      offerValue: "",
    }
  ];
  
  export const featuresData = [
    {
      icon: "fa-clock",
      title: "10 minute grocery now",
      description: "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you."
    },
    {
      icon: "fa-gift",
      title: "Best Prices & Offers",
      description: "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best prices & offers."
    },
    {
      icon: "fa-box",
      title: "Wide Assortment",
      description: "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories."
    },
    {
      icon: "fa-rotate",
      title: "Easy Returns",
      description: "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy."
    }
  ];
  
  
  export const dailySellsData = [
    {
      img: daily,
      title: "100% Organic Coffee Beans.",
      description: "Get the best deal before close",
      buttonText: "Shop Now",
    },
    {
      img: daily1,
      category: "Tea, Coffee & Drinks",
      title: "Roast Ground Coffee",
      price: "$13.5",
      originalPrice: "$18",
      rating: 4.5,
      buttonText: "+ Add To Cart",
      timer: {
        days: 1334,
        hours: 23,
        mins: 3,
        secs: 20,
      }
    },
    {
      img: daily2,
      category: "Tea, Coffee & Drinks",
      title: "Roast Ground Coffee",
      price: "$13.5",
      originalPrice: "$18",
      rating: 4.5,
      buttonText: "+ Add To Cart",
      timer: {
        days: 1334,
        hours: 23,
        mins: 3,
        secs: 20,
      }
    },
    {
      img: daily3,
      category: "Tea, Coffee & Drinks",
      title: "Roast Ground Coffee",
      price: "$13.5",
      originalPrice: "$18",
      rating: 4.5,
      buttonText: "+ Add To Cart",
      timer: {
        days: 1334,
        hours: 23,
        mins: 3,
        secs: 20,
      }
    },
  ];
    
export const footerData = [
  {
    heading: "Categories",
    items: [
      "Vegetables & Fruits",
      "Breakfast & instant food",
      "Bakery & Biscuits",
      "Atta, rice & dal",
      "Sauces & spreads",
      "Organic & gourmet",
      "Baby care",
      "Cleaning essentials",
      "Personal care"
    ]
  },
  {
    heading: "",
    items: [
      "",
      "",
      "Dairy, bread & eggs",
      "Cold drinks & juices",
      "Tea, coffee & drinks",
      "Masala, oil & more",
      "Chicken, meat & fish",
      "Paan corner",
      "Pharma & wellness",
      "Home & office",
      "Pet care"
    ]
  },
  {
    heading: "Get to know us",
    items: ["Company", "About", "Blog", "Help Center", "Our Value"]
  },
  {
    heading: "For Consumers",
    items: ["Payments", "Shipping", "Product Returns", "FAQ", "Shop Checkout"]
  },
  {
    heading: "Become a Shopper",
    items: ["Shopper Opportunities", "Become a Shopper", "Earnings", "Ideas & Guides", "New Retailers"]
  },
  {
    heading: "Freshcart programs",
    items: ["Freshcart programs", "Gift Cards", "Promos & Coupons", "Freshcart Ads", "Careers"]
  }
];
