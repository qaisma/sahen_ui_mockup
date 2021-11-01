import { Restaurant } from "./models/restaurant.model"

export const localRestaurant: Restaurant = {

  RestaurantChain:

  {

    ChainName: "KFC",

    LogoUri: "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1024px-KFC_logo.svg.png"

  },

  Menu:

  {

    MenuSections: [

      {

        SectionName: "Deals",

        LogoUri: "",

        Sort: 1,

        MenuItems:

          [

            {

              Id: 1,

              ItemName: "ZINGER BLAZE BOX",

              Description: "Zinger Blaze + 1 COB + Waffle Fries + Coleslaw + Drink",

              ImageUri: "https://uae.kfc.me/Images/ItemsImages/Menu17/itm5000178.jpg",

              Price: 38,

              IsFeatured: null

            },

            {

              Id: 2,

              ItemName: "ZINGER BLAZE COMBO",

              Description: "Zinger Blaze + Waffle Fries + Drink",

              ImageUri: "https://uae.kfc.me/Images/ItemsImages/Menu17/itm5000177.jpg",

              Price: 31,

              IsFeatured: 1

            }

          ]



      },

      {

        SectionName: "For One",

        LogoUri: "",

        Sort: 2,

        MenuItems:

          [

            {

              Id: 7,

              ItemName: "ZINGER BLAZE BOX",

              Description: "Zinger Blaze + 1 COB + Waffle Fries + Coleslaw + Drink",

              ImageUri: "https://uae.kfc.me/Images/ItemsImages/Menu17/itm5000178.jpg",

              Price: 38,

              IsFeatured: null

            },

            {

              Id: 8,

              ItemName: "ZINGER BLAZE COMBO",

              Description: "Zinger Blaze + Waffle Fries + Drink",

              ImageUri: "https://uae.kfc.me/Images/ItemsImages/Menu17/itm5000177.jpg",

              Price: 31,

              IsFeatured: null

            },

            {

              Id: 9,

              ItemName: "ZINGER BLAZE",

              Description: "ZINGER BLAZE",

              ImageUri: "https://uae.kfc.me/Images/ItemsImages/Menu17/itm110047.jpg",

              Price: 20,

              IsFeatured: null

            }

          ]





      },

      {

        SectionName: "For Sharing",

        LogoUri: "",

        Sort: 3,

        MenuItems:

          [

            {

              Id: 32,

              ItemName: "21 PCS SUPER BUCKET",

              Description: "21 chicken pcs + 5 crispy strips + 2 family fries + 2 family coleslaw + bun + 2.25 L drink",

              ImageUri: "https://uae.kfc.me/Images/ItemsImages/Menu17/itm5000087.jpg",

              Price: 139,

              IsFeatured: null

            },

            {

              Id: 33,

              ItemName: "15 PCS SUPER BUCKET",

              Description: "15 chicken pcs + 5 crispy strips + 1 family fries + 1 family coleslaw + bun + 2.25 L drink",

              ImageUri: "https://uae.kfc.me/Images/ItemsImages/Menu17/itm5000088.jpg",

              Price: 104,

              IsFeatured: 1

            },

            {

              Id: 34,

              ItemName: "9 PCS SUPER BUCKET",

              Description: "9 chicken pcs + 5 crispy strips + 1 family fries + 1 family coleslaw + bun + 1 L drink",

              ImageUri: "https://uae.kfc.me/Images/ItemsImages/Menu17/itm5000089.jpg",

              Price: 79,

              IsFeatured: null

            },

            {

              Id: 35,

              ItemName: "BUCKET 21 PCS",

              Description: "21 chicken pcs. + 2 family size coleslaw + 2 family size fries + bun + 2.25 liters drink",

              ImageUri: "https://uae.kfc.me/Images/ItemsImages/Menu17/itm5000086.jpg",

              Price: 129,

              IsFeatured: null

            }

          ]





      },

      {

        SectionName: "Sides & Desserts",

        LogoUri: "",

        Sort: 4,

        MenuItems:

          [

            {

              Id: 38,

              ItemName: "WAFFLE FRIES",

              Description: null,

              ImageUri: "https://uae.kfc.me/Images/ItemsImages/Menu17/itm5000140.jpg",

              Price: 10,

              IsFeatured: null

            },

            {

              Id: 39,

              ItemName: "LOADED FRIES FAMILY",

              Description: null,

              ImageUri: "https://uae.kfc.me/Images/ItemsImages/Menu17/itm5000048.jpg",

              Price: 18.5,

              IsFeatured: null

            },

            {

              Id: 40,

              ItemName: "FRIES",

              Description: null,

              ImageUri: "https://uae.kfc.me/Images/ItemsImages/Menu17/itm5000056.jpg",

              Price: 9,

              IsFeatured: 1

            },

            {

              Id: 41,

              ItemName: "SPICY FRIES",

              Description: null,

              ImageUri: "https://uae.kfc.me/Images/ItemsImages/Menu17/itm5000082.jpg",

              Price: 10,

              IsFeatured: null

            },

            {

              Id: 42,

              ItemName: "POP CORN CHICKEN",
              Description: null,
              ImageUri: "https://uae.kfc.me/Images/ItemsImages/Menu17/itm000027.jpg",
              Price: 8.5,
              IsFeatured: null
            }
          ]
      }
    ]
  }

}