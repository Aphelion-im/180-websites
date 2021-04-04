"use strict";

const cardsArray = [{
    id: 0,
    location: "images/cards/card-front-lela-star-200x200.jpg",
    name: "Lela Star"
  },
  {
    id: 1,
    location: "images/cards/card-front-lela-star-200x200.jpg",
    name: "Lela Star"
  },
  {
    id: 2,
    location: "images/cards/card-front-nikki-sims-200x200.jpg",
    name: "Nikki Sims"
  },
  {
    id: 3,
    location: "images/cards/card-front-nikki-sims-200x200.jpg",
    name: "Nikki Sims"
  },
  {
    id: 4,
    location: "images/cards/card-front-mia-khalifa-200x200.jpg",
    name: "Mia Khalifa"
  },
  {
    id: 5,
    location: "images/cards/card-front-mia-khalifa-200x200.jpg",
    name: "Mia Khalifa"
  },
  {
    id: 6,
    location: "images/cards/card-front-nikki-cox-200x200.jpg",
    name: "Nikki Cox"
  },
  {
    id: 7,
    location: "images/cards/card-front-nikki-cox-200x200.jpg",
    name: "Nikki Cox"
  },
  {
    id: 8,
    location: "images/cards/card-front-sabrina-salerno-200x200.jpg",
    name: "Sabrina Salerno"
  },
  {
    id: 9,
    location: "images/cards/card-front-sabrina-salerno-200x200.jpg",
    name: "Sabrina Salerno"
  },
  {
    id: 10,
    location: "images/cards/card-front-valentina-nappi-200x200.jpg",
    name: "Valentina Nappi"
  },
  {
    id: 11,
    location: "images/cards/card-front-valentina-nappi-200x200.jpg",
    name: "Valentina Nappi"
  },
  {
    id: 12,
    location: "images/cards/card-front-stella-cox-200x200.jpg",
    name: "Stella Cox"
  },
  {
    id: 13,
    location: "images/cards/card-front-stella-cox-200x200.jpg",
    name: "Stella Cox"
  },
  {
    id: 14,
    location: "images/cards/card-front-darcia-lee-200x200.jpg",
    name: "Darcia Lee"
  },
  {
    id: 15,
    location: "images/cards/card-front-darcia-lee-200x200.jpg",
    name: "Darcia Lee"
  },
  {
    id: 16,
    location: "images/cards/card-front-taylor-vixen-200x200.jpg",
    name: "Taylor Vixen"
  },
  {
    id: 17,
    location: "images/cards/card-front-taylor-vixen-200x200.jpg",
    name: "Taylor Vixen"
  },
  {
    id: 18,
    location: "images/cards/card-front-denise-richards-200x200.jpg",
    name: "Denise Richards"
  },
  {
    id: 19,
    location: "images/cards/card-front-denise-richards-200x200.jpg",
    name: "Denise Richards"
  },
  {
    id: 20,
    location: "images/cards/card-front-dana-harem-200x200.jpg",
    name: "Dana Harem"
  },
  {
    id: 21,
    location: "images/cards/card-front-dana-harem-200x200.jpg",
    name: "Dana Harem"
  },
  {
    id: 22,
    location: "images/cards/card-front-lana-rhoades-200x200.jpg",
    name: "Lana Rhoades"
  },
  {
    id: 23,
    location: "images/cards/card-front-lana-rhoades-200x200.jpg",
    name: "Lana Rhoades"
  },
  {
    id: 24,
    location: "images/cards/card-front-sasha-grey-200x200.jpg",
    name: "Sasha Grey"
  },
  {
    id: 25,
    location: "images/cards/card-front-sasha-grey-200x200.jpg",
    name: "Sasha Grey"
  },
  {
    id: 26,
    location: "images/cards/card-front-katrina-jade-200x200.jpg",
    name: "Katrina Jade"
  },
  {
    id: 27,
    location: "images/cards/card-front-katrina-jade-200x200.jpg",
    name: "Katrina Jade"
  },
  {
    id: 28,
    location: "images/cards/card-front-jynx-maze-200x200.jpg",
    name: "Jynx Maze"
  },
  {
    id: 29,
    location: "images/cards/card-front-jynx-maze-200x200.jpg",
    name: "Jynx Maze"
  },
  {
    id: 30,
    location: "images/cards/card-front-anissa-kate-200x200.jpg",
    name: "Anissa Kate"
  },
  {
    id: 31,
    location: "images/cards/card-front-anissa-kate-200x200.jpg",
    name: "Anissa Kate"
  },
  {
    id: 32,
    location: "images/cards/card-front-henessy-200x200.jpg",
    name: "Henessy"
  },
  {
    id: 33,
    location: "images/cards/card-front-henessy-200x200.jpg",
    name: "Henessy"
  },
  {
    id: 34,
    location: "images/cards/card-front-ella-knox-200x200.jpg",
    name: "Ella Knox"
  },
  {
    id: 35,
    location: "images/cards/card-front-ella-knox-200x200.jpg",
    name: "Ella Knox"
  },
  {
    id: 36,
    location: "images/cards/card-front-yurizan-beltran-200x200.jpg",
    name: "Yurizan Beltran"
  },
  {
    id: 37,
    location: "images/cards/card-front-yurizan-beltran-200x200.jpg",
    name: "Yurizan Beltran"
  },
  {
    id: 38,
    location: "images/cards/card-front-tatjana-simic-200x200.jpg",
    name: "Tatjana &#352;imi&#x107;"
  },
  {
    id: 39,
    location: "images/cards/card-front-tatjana-simic-200x200.jpg",
    name: "Tatjana &#352;imi&#x107;"
  },
  {
    id: 40,
    location: "images/cards/card-front-samantha-fox-200x200.jpg",
    name: "Samantha Fox"
  },
  {
    id: 41,
    location: "images/cards/card-front-samantha-fox-200x200.jpg",
    name: "Samantha Fox"
  },
  {
    id: 42,
    location: "images/cards/card-front-bryci-200x200.jpg",
    name: "Bryci"
  },
  {
    id: 43,
    location: "images/cards/card-front-bryci-200x200.jpg",
    name: "Bryci"
  },
  {
    id: 44,
    location: "images/cards/card-front-amber-hahn-200x200.jpg",
    name: "Amber Hahn"
  },
  {
    id: 45,
    location: "images/cards/card-front-amber-hahn-200x200.jpg",
    name: "Amber Hahn"
  },
  {
    id: 46,
    location: "images/cards/card-front-eve-angel-200x200.jpg",
    name: "Eve Angel"
  },
  {
    id: 47,
    location: "images/cards/card-front-eve-angel-200x200.jpg",
    name: "Eve Angel"
  },
  {
    id: 48,
    location: "images/cards/card-front-veronica-zemanova-200x200.jpg",
    name: "Veronica Zemanova"
  },
  {
    id: 49,
    location: "images/cards/card-front-veronica-zemanova-200x200.jpg",
    name: "Veronica Zemanova"
  },
  {
    id: 50,
    location: "images/cards/card-front-susanna-hoffs-200x200.jpg",
    name: "Susanna Hoffs"
  },
  {
    id: 51,
    location: "images/cards/card-front-susanna-hoffs-200x200.jpg",
    name: "Susanna Hoffs"
  },
  {
    id: 52,
    location: "images/cards/card-front-katie-banks-200x200.jpg",
    name: "Katie Banks"
  },
  {
    id: 53,
    location: "images/cards/card-front-katie-banks-200x200.jpg",
    name: "Katie Banks"
  },
  {
    id: 54,
    location: "images/cards/card-front-li-moon-200x200.jpg",
    name: "Li Moon"
  },
  {
    id: 55,
    location: "images/cards/card-front-li-moon-200x200.jpg",
    name: "Li Moon"
  },
  {
    id: 56,
    location: "images/cards/card-front-erica-campbell-200x200.jpg",
    name: "Erica Campbell"
  },
  {
    id: 57,
    location: "images/cards/card-front-erica-campbell-200x200.jpg",
    name: "Erica Campbell"
  },
  {
    id: 58,
    location: "images/cards/card-front-christina-applegate-200x200.jpg",
    name: "Christina Applegate"
  },
  {
    id: 59,
    location: "images/cards/card-front-christina-applegate-200x200.jpg",
    name: "Christina Applegate"
  },
  {
    id: 60,
    location: "images/cards/card-front-jenaveve-jolie-200x200.jpg",
    name: "Jenaveve Jolie"
  },
  {
    id: 61,
    location: "images/cards/card-front-jenaveve-jolie-200x200.jpg",
    name: "Jenaveve Jolie"
  },
  {
    id: 62,
    location: "images/cards/card-front-vanity-200x200.jpg",
    name: "Vanity"
  },
  {
    id: 63,
    location: "images/cards/card-front-vanity-200x200.jpg",
    name: "Vanity"
  },
  {
    id: 64,
    location: "images/cards/card-front-catherina-hartlova-200x200.jpg",
    name: "Catherina Hartlova"
  },
  {
    id: 65,
    location: "images/cards/card-front-catherina-hartlova-200x200.jpg",
    name: "Catherina Hartlova"
  },
  {
    id: 66,
    location: "images/cards/card-front-nikki-brooks-200x200.jpg",
    name: "Nikki Brooks"
  },
  {
    id: 67,
    location: "images/cards/card-front-nikki-brooks-200x200.jpg",
    name: "Nikki Brooks"
  },
  {
    id: 68,
    location: "images/cards/card-front-luna-kitsuen-200x200.jpg",
    name: "Luna Kitsuen"
  },
  {
    id: 69,
    location: "images/cards/card-front-luna-kitsuen-200x200.jpg",
    name: "Luna Kitsuen"
  },
  {
    id: 70,
    location: "images/cards/card-front-lexi-belle-200x200.jpg",
    name: "Lexi Belle"
  },
  {
    id: 71,
    location: "images/cards/card-front-lexi-belle-200x200.jpg",
    name: "Lexi Belle"
  }
];