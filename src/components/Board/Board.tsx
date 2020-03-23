import React from "react";
import { Field, BoardField } from "../Field/Field";

export const boardFields: BoardField[] = [
  {
    fieldPosition: 1,
    imgSrc: "https://m1.dogecdn.wtf/fields/special/start.png",
    name: "start",
    mnplCorner: 0
  },
  {
    fieldPosition: 2,
    price: 600,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/1_perfumery/chanel.svg",
    mnplGroup: 1,
    mnplLine: 0,
    name: "chanel"
  },
  {
    fieldPosition: 3,
    imgSrc: "https://m1.dogecdn.wtf/fields/special/tax_income.png",
    mnplLine: 0,
    name: "tax_income",
    mnplSpecial: 1
  },

  {
    fieldPosition: 4,
    price: 600,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/1_perfumery/hugo_boss.svg",
    mnplGroup: 1,
    mnplLine: 0,
    name: "hugo_boss"
  },
  {
    fieldPosition: 5,
    price: 800,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/1_perfumery/hugo_boss.svg",
    mnplGroup: 1,
    mnplLine: 0,
    name: "hugo_boss"
  },
  {
    fieldPosition: 6,
    price: 2000,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/0_auto/mercedes.svg",
    mnplGroup: 0,
    mnplLine: 0,
    name: "mercedes"
  },
  {
    fieldPosition: 7,
    price: 1000,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/2_clothing/adidas.svg",
    mnplGroup: 2,
    mnplLine: 0,
    name: "adidas"
  },
  {
    fieldPosition: 8,
    imgSrc: "https://m1.dogecdn.wtf/fields/special/chance.png",
    mnplLine: 0,
    name: "chance",
    mnplSpecial: 1
  },
  {
    fieldPosition: 9,
    price: 1000,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/2_clothing/puma.svg",
    mnplGroup: 2,
    mnplLine: 0,
    name: "puma"
  },
  {
    fieldPosition: 10,
    price: 1200,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/2_clothing/lacoste.svg",
    mnplGroup: 2,
    mnplLine: 0,
    name: "lacoste"
  },
  {
    fieldPosition: 11,
    mnplCorner: 1,
    isJail: true,
    name: "jail"
  },
  {
    fieldPosition: 12,
    price: 1400,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/3_web/vk.svg",
    mnplGroup: 3,
    mnplLine: 1,
    name: "vk"
  },
  {
    fieldPosition: 13,
    price: 1500,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/9_games/rockstar_games.svg",
    mnplGroup: 9,
    mnplLine: 1,
    name: "rockstar_games"
  },
  {
    fieldPosition: 14,
    price: 1400,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/3_web/facebook.svg",
    mnplGroup: 3,
    mnplLine: 1,
    name: "facebook"
  },
  {
    fieldPosition: 15,
    price: 1600,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/3_web/twitter.svg",
    mnplGroup: 3,
    mnplLine: 1,
    name: "twitter"
  },
  {
    fieldPosition: 16,
    price: 2000,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/0_auto/audi.svg",
    mnplGroup: 0,
    mnplLine: 1,
    name: "audi"
  },
  {
    fieldPosition: 17,
    price: 1800,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/4_drinks/coca_cola.svg",
    mnplGroup: 4,
    mnplLine: 1,
    name: "coca_cola"
  },
  {
    fieldPosition: 18,
    imgSrc: "https://m1.dogecdn.wtf/fields/special/chance.png",
    mnplLine: 1,
    name: "chance",
    mnplSpecial: 1
  },
  {
    fieldPosition: 19,
    price: 1800,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/4_drinks/pepsi.svg",
    mnplGroup: 4,
    mnplLine: 1,
    name: "pepsi"
  },
  {
    fieldPosition: 20,
    price: 2000,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/4_drinks/fanta.svg",
    mnplGroup: 4,
    mnplLine: 1,
    name: "fanta"
  },
  {
    fieldPosition: 21,
    price: 2200,
    imgSrc: "https://m1.dogecdn.wtf/fields/special/jackpot.svg",
    mnplCorner: 2,
    mnplSpecial: 1,
    name: "jackpot"
  },
  {
    fieldPosition: 22,
    price: 2200,
    imgSrc:
      "https://m1.dogecdn.wtf/fields/brands/5_airlines/american_airlines.svg",
    mnplLine: 2,
    mnplGroup: 5,
    name: "american_airlines"
  },
  {
    fieldPosition: 23,
    imgSrc: "https://m1.dogecdn.wtf/fields/special/chance.png",
    mnplSpecial: 1,
    mnplLine: 2,
    name: "chance"
  },
  {
    fieldPosition: 24,
    price: 2200,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/5_airlines/lufthansa.svg",
    mnplGroup: 5,
    mnplLine: 2,
    name: "lufthansa"
  },
  {
    fieldPosition: 25,
    price: 2400,
    imgSrc:
      "https://m1.dogecdn.wtf/fields/brands/5_airlines/british_airways.svg",
    mnplGroup: 5,
    mnplLine: 2,
    name: "lufthansa"
  },
  {
    fieldPosition: 26,
    price: 2000,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/0_auto/ford.svg",
    mnplGroup: 0,
    mnplLine: 2,
    name: "ford"
  },
  {
    fieldPosition: 27,
    price: 2600,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/6_food/mcdonalds.svg",
    mnplGroup: 6,
    mnplLine: 2,
    name: "mcdonalds"
  },
  {
    fieldPosition: 28,
    price: 2600,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/6_food/burger_king.svg",
    mnplGroup: 6,
    mnplLine: 2,
    name: "burger_king"
  },
  {
    fieldPosition: 29,
    price: 1500,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/9_games/rovio.svg",
    mnplGroup: 9,
    mnplLine: 2,
    name: "rovio"
  },
  {
    fieldPosition: 30,
    price: 2800,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/6_food/kfc.svg",
    mnplGroup: 6,
    mnplLine: 2,
    name: "kfc"
  },
  {
    fieldPosition: 31,
    imgSrc: "https://m1.dogecdn.wtf/fields/special/goToJail.png",
    mnplSpecial: 1,
    mnplCorner: 3,
    name: "goToJail"
  },
  {
    fieldPosition: 32,
    price: 3000,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/7_hotels/holiday_inn.svg",
    mnplGroup: 7,
    mnplLine: 3,
    name: "holiday_inn"
  },
  {
    fieldPosition: 33,
    price: 3000,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/7_hotels/radisson_blu.svg",
    mnplGroup: 7,
    mnplLine: 3,
    name: "holiday_inn"
  },
  {
    fieldPosition: 34,
    imgSrc: "https://m1.dogecdn.wtf/fields/special/chance_rotated.png",
    mnplSpecial: 1,
    mnplLine: 3,
    name: "chance_rotated"
  },
  {
    fieldPosition: 35,
    price: 3200,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/7_hotels/novotel.svg",
    mnplGroup: 7,
    mnplLine: 3,
    name: "holiday_inn"
  },
  {
    fieldPosition: 36,
    price: 2000,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/0_auto/land_rover.svg",
    mnplGroup: 0,
    mnplLine: 3,
    name: "land_rover"
  },
  {
    fieldPosition: 37,
    imgSrc: "https://m1.dogecdn.wtf/fields/special/tax_luxury.png",
    mnplSpecial: 1,
    mnplLine: 3,
    name: "tax_luxury"
  },
  {
    fieldPosition: 38,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/8_smartphones/apple.svg",
    mnplLine: 3,
    mnplGroup: 8,
    name: "apple"
  },
  {
    fieldPosition: 39,
    imgSrc: "https://m1.dogecdn.wtf/fields/special/chance_rotated.png",
    mnplSpecial: 1,
    mnplLine: 3,
    name: "chance_rotated"
  },
  {
    fieldPosition: 40,
    imgSrc: "https://m1.dogecdn.wtf/fields/brands/8_smartphones/nokia.svg",
    mnplLine: 3,
    mnplGroup: 8,
    name: "nokia"
  }
];

interface Prop {
  fields: BoardField[];
}
export const Board = (prop: Prop) => (
  <div id="ui-fields" className="table-body-board-fields">
    {prop.fields.map(field => {
      return (
        <Field
          key={field.fieldPosition}
          fieldPosition={field.fieldPosition}
          price={field.price}
          imgSrc={field.imgSrc}
          mnplGroup={field.mnplGroup}
          mnplLine={field.mnplLine}
          name={field.name}
          mnplSpecial={field.mnplSpecial}
          mnplCorner={field.mnplCorner}
          isJail={field.isJail}
        />
      );
    })}
  </div>
);
