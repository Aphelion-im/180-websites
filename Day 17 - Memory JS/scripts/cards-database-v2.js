"use strict";

const cardsArray = [{
    id: 0,
    location: "images/cards/card-front-apple-200x200.jpg",
    name: "Apple"
  },
  {
    id: 1,
    location: "images/cards/card-front-apple-200x200.jpg",
    name: "Apple"
  },
  {
    id: 2,
    location: "images/cards/card-front-banana-200x200.jpg",
    name: "Banana"
  },
  {
    id: 3,
    location: "images/cards/card-front-banana-200x200.jpg",
    name: "Banana"
  },
  {
    id: 4,
    location: "images/cards/card-front-beetle-200x200.jpg",
    name: "Beetle"
  },
  {
    id: 5,
    location: "images/cards/card-front-beetle-200x200.jpg",
    name: "Beetle"
  },
  {
    id: 6,
    location: "images/cards/card-front-blue-butterfly-200x200.jpg",
    name: "Blue butterfly"
  },
  {
    id: 7,
    location: "images/cards/card-front-blue-butterfly-200x200.jpg",
    name: "Blue butterfly"
  },
  {
    id: 8,
    location: "images/cards/card-front-blue-shell-200x200.jpg",
    name: "Blue shell"
  },
  {
    id: 9,
    location: "images/cards/card-front-blue-shell-200x200.jpg",
    name: "Blue shell"
  },
  {
    id: 10,
    location: "images/cards/card-front-butterfly-200x200.jpg",
    name: "Butterfly"
  },
  {
    id: 11,
    location: "images/cards/card-front-butterfly-200x200.jpg",
    name: "Butterfly"
  },
  {
    id: 12,
    location: "images/cards/card-front-cherries-200x200.jpg",
    name: "Cherries"
  },
  {
    id: 13,
    location: "images/cards/card-front-cherries-200x200.jpg",
    name: "Cherries"
  },
  {
    id: 14,
    location: "images/cards/card-front-clover-200x200.jpg",
    name: "Clover"
  },
  {
    id: 15,
    location: "images/cards/card-front-clover-200x200.jpg",
    name: "Clover"
  },
  {
    id: 16,
    location: "images/cards/card-front-coconut-200x200.jpg",
    name: "coconut"
  },
  {
    id: 17,
    location: "images/cards/card-front-coconut-200x200.jpg",
    name: "coconut"
  },
  {
    id: 18,
    location: "images/cards/card-front-egg-200x200.jpg",
    name: "Egg"
  },
  {
    id: 19,
    location: "images/cards/card-front-egg-200x200.jpg",
    name: "Egg"
  },
  {
    id: 20,
    location: "images/cards/card-front-feather-200x200.jpg",
    name: "Feather"
  },
  {
    id: 21,
    location: "images/cards/card-front-feather-200x200.jpg",
    name: "Feather"
  },
  {
    id: 22,
    location: "images/cards/card-front-green-beetle-200x200.jpg",
    name: "Green beetle"
  },
  {
    id: 23,
    location: "images/cards/card-front-green-beetle-200x200.jpg",
    name: "Green beetle"
  },
  {
    id: 24,
    location: "images/cards/card-front-green-leaf-200x200.jpg",
    name: "Green leaf"
  },
  {
    id: 25,
    location: "images/cards/card-front-green-leaf-200x200.jpg",
    name: "Green leaf"
  },
  {
    id: 26,
    location: "images/cards/card-front-haricot-200x200.jpg",
    name: "Haricot"
  },
  {
    id: 27,
    location: "images/cards/card-front-haricot-200x200.jpg",
    name: "Haricot"
  },
  {
    id: 28,
    location: "images/cards/card-front-hazelnut-200x200.jpg",
    name: "Hazelnut"
  },
  {
    id: 29,
    location: "images/cards/card-front-hazelnut-200x200.jpg",
    name: "Hazelnut"
  },
  {
    id: 30,
    location: "images/cards/card-front-leaf-200x200.jpg",
    name: "Leaf"
  },
  {
    id: 31,
    location: "images/cards/card-front-leaf-200x200.jpg",
    name: "Leaf"
  },
  {
    id: 32,
    location: "images/cards/card-front-leaves-200x200.jpg",
    name: "Leaves"
  },
  {
    id: 33,
    location: "images/cards/card-front-leaves-200x200.jpg",
    name: "Leaves"
  },
  {
    id: 34,
    location: "images/cards/card-front-lemon-200x200.jpg",
    name: "Lemon"
  },
  {
    id: 35,
    location: "images/cards/card-front-lemon-200x200.jpg",
    name: "Lemon"
  },
  {
    id: 36,
    location: "images/cards/card-front-maple-leaf-200x200.jpg",
    name: "Maple leaf"
  },
  {
    id: 37,
    location: "images/cards/card-front-maple-leaf-200x200.jpg",
    name: "Maple leaf"
  },
  {
    id: 38,
    location: "images/cards/card-front-nuts-200x200.jpg",
    name: "Nuts"
  },
  {
    id: 39,
    location: "images/cards/card-front-nuts-200x200.jpg",
    name: "Nuts"
  },
  {
    id: 40,
    location: "images/cards/card-front-orange-200x200.jpg",
    name: "Orange"
  },
  {
    id: 41,
    location: "images/cards/card-front-orange-200x200.jpg",
    name: "Orange"
  },
  {
    id: 42,
    location: "images/cards/card-front-orange-shell-200x200.jpg",
    name: "Orange shell"
  },
  {
    id: 43,
    location: "images/cards/card-front-orange-shell-200x200.jpg",
    name: "Orange shell"
  },
  {
    id: 44,
    location: "images/cards/card-front-pea-200x200.jpg",
    name: "Pea"
  },
  {
    id: 45,
    location: "images/cards/card-front-pea-200x200.jpg",
    name: "Pea"
  },
  {
    id: 46,
    location: "images/cards/card-front-peach-200x200.jpg",
    name: "Peach"
  },
  {
    id: 47,
    location: "images/cards/card-front-peach-200x200.jpg",
    name: "Peach"
  },
  {
    id: 48,
    location: "images/cards/card-front-pear-200x200.jpg",
    name: "Pear"
  },
  {
    id: 49,
    location: "images/cards/card-front-pear-200x200.jpg",
    name: "Pear"
  },
  {
    id: 50,
    location: "images/cards/card-front-pineapple-200x200.jpg",
    name: "Pineapple"
  },
  {
    id: 51,
    location: "images/cards/card-front-pineapple-200x200.jpg",
    name: "Pineapple"
  },
  {
    id: 52,
    location: "images/cards/card-front-potato-200x200.jpg",
    name: "Potato"
  },
  {
    id: 53,
    location: "images/cards/card-front-potato-200x200.jpg",
    name: "Potato"
  },
  {
    id: 54,
    location: "images/cards/card-front-prume-200x200.jpg",
    name: "Prume"
  },
  {
    id: 55,
    location: "images/cards/card-front-prume-200x200.jpg",
    name: "Prume"
  },
  {
    id: 56,
    location: "images/cards/card-front-red-shell-200x200.jpg",
    name: "Red shell"
  },
  {
    id: 57,
    location: "images/cards/card-front-red-shell-200x200.jpg",
    name: "Red shell"
  },
  {
    id: 58,
    location: "images/cards/card-front-rose-200x200.jpg",
    name: "Rose"
  },
  {
    id: 59,
    location: "images/cards/card-front-rose-200x200.jpg",
    name: "Rose"
  },
  {
    id: 60,
    location: "images/cards/card-front-seahorse-200x200.jpg",
    name: "Seahorse"
  },
  {
    id: 61,
    location: "images/cards/card-front-seahorse-200x200.jpg",
    name: "Seahorse"
  },
  {
    id: 62,
    location: "images/cards/card-front-seastar-200x200.jpg",
    name: "Seastar"
  },
  {
    id: 63,
    location: "images/cards/card-front-seastar-200x200.jpg",
    name: "Seastar"
  },
  {
    id: 64,
    location: "images/cards/card-front-shell-200x200.jpg",
    name: "Shell"
  },
  {
    id: 65,
    location: "images/cards/card-front-shell-200x200.jpg",
    name: "Shell"
  },
  {
    id: 66,
    location: "images/cards/card-front-tomato-200x200.jpg",
    name: "Tomato"
  },
  {
    id: 67,
    location: "images/cards/card-front-tomato-200x200.jpg",
    name: "Tomato"
  },
  {
    id: 68,
    location: "images/cards/card-front-white-flower-200x200.jpg",
    name: "White flower"
  },
  {
    id: 69,
    location: "images/cards/card-front-white-flower-200x200.jpg",
    name: "White flower"
  },
  {
    id: 70,
    location: "images/cards/card-front-yellow-flower-200x200.jpg",
    name: "Yellow flower"
  },
  {
    id: 71,
    location: "images/cards/card-front-yellow-flower-200x200.jpg",
    name: "Yellow flower"
  }
];