import React, { CSSProperties } from "react";
import { RouteComponentProps } from "@reach/router";
import "./style.scss";

// import { Players } from "../../components/Players/Players";
// import { TableAction } from "../../components/TableAction/TableAction";
// import { Board } from "../../components/Board/Board";
// import { Dices } from "../../components/Dices/Dices";
// import { Chat } from "../../components/Chat/Chat";
// import { Token } from "../../components/Token/Token";

export interface PlayerToken {
  userId: number;
  mnplPosition: number;
  mnplJailed: number;
  mnplSamePos: number;
  mnplIndex: number;
  style: CSSProperties;
  class?: string;
}

interface Props extends RouteComponentProps {}

let tableActionVisible = true;
let isGenerators = false;

let diceClass1 = "";
let diceClass2 = "";

let diceValue1 = 1;
let diceValue2 = 1;

let player1Top = 18.3;
let player1Left = 18.3;

const resetDice = () => {
  setTimeout(() => {
    tableActionVisible = true;
    isGenerators = false;
    diceClass1 = "r0";
    diceClass2 = "r0";
  }, 2000);
};

const sweater = `<svg
height="315"
width="315"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
>
<defs>
  <g id="sweater-defs-chunk">
    <path
      d="M4.15084773,2.44203244 C5.62037125,3.96842685 6.35261152,5.23760841 6.80950525,7.31517322 C7.12216983,8.72537495 7.01525871,9.82771574 6.73890357,11.2260003 C6.52003836,12.3313204 6.13172913,13.4028751 5.82612472,12.8497185 C5.44386705,12.089004 4.92141463,11.5408129 4.32432614,10.9240979 C3.20377663,9.75919186 2.05599505,8.92101562 1.10993255,7.61012386 C0.142689541,6.26248742 0.0670448849,4.82249269 0.00451196903,3.42520125 C-0.0570123514,2.01897192 0.530998777,0 0.530998777,0 C1.16943968,0.0208550961 3.26832674,1.52440821 4.15084773,2.44203244"
      id="sweater-defs-chunk-left"
    ></path>
    <path
      d="M3.00327946,2.35276614 C3.89302576,1.45359416 5.98050745,0 6.59941889,0 C6.59941889,0 7.09513468,2.06950681 6.98367196,3.49588388 C6.87416472,4.90915643 6.74803585,6.36879883 5.76247072,7.70142816 C4.80037143,8.99877607 3.65543416,9.80823245 2.52809627,10.9503422 C1.92776196,11.5581905 1.39978064,12.0934599 1.0028169,12.8525143 C0.687005856,13.4059284 0.352617687,12.3041403 0.177601657,11.171103 C-0.0404350727,9.74573395 -0.102032893,8.62277702 0.249954653,7.20446427 C0.770114027,5.11278058 1.52493176,3.84970604 3.00327946,2.35276614"
      id="sweater-defs-chunk-right"
      transform="translate(7.5,0)"
    ></path>
  </g>
  <pattern
    height="9.5"
    id="sweater-defs-pattern"
    patternUnits="userSpaceOnUse"
    width="15"
    x=".25"
    y="-.5"
  >
    <g fill="#e70f21">
      <use
        xlink:href="#sweater-defs-chunk"
        transform="translate(0,-9.5)"
      ></use>
      <use xlink:href="#sweater-defs-chunk"></use>
    </g>
  </pattern>
  <g fill="#fff" id="sweater-defs-dot-row">
    <use
      xlink:href="#sweater-defs-chunk"
      transform="translate(0,0)"
    ></use>
    <use
      xlink:href="#sweater-defs-chunk"
      transform="translate(15,0)"
    ></use>
    <use
      xlink:href="#sweater-defs-chunk"
      transform="translate(30,0)"
    ></use>
  </g>
  <g fill="#fff" id="sweater-defs-dot">
    <use
      xlink:href="#sweater-defs-dot-row"
      transform="translate(0,0)"
    ></use>
    <use
      xlink:href="#sweater-defs-dot-row"
      transform="translate(0,9.5)"
    ></use>
    <use
      xlink:href="#sweater-defs-dot-row"
      transform="translate(0,19)"
    ></use>
    <use
      xlink:href="#sweater-defs-dot-row"
      transform="translate(0,28.5)"
    ></use>
    <use
      xlink:href="#sweater-defs-dot-row"
      transform="translate(0,38)"
    ></use>
  </g>
</defs>
<rect fill="#9b2b2e" height="100%" width="100%"></rect>
<rect
  fill="url(#sweater-defs-pattern)"
  height="100%"
  width="100%"
></rect>
</svg>`;
const randDice = () => {
  diceValue1 = random(0, 6);
  diceValue2 = random(0, 6);
  setTimeout(() => (diceClass1 = "r" + diceValue1), 20);
  setTimeout(() => (diceClass2 = "r" + diceValue2), 20);
};

const turn = () => {
  isGenerators = true;
  tableActionVisible = false;
  randDice();
  player1Left = (diceValue1 + diceValue2 + 1) * 55;

  setTimeout(() => {
    player1.style.top = `${player1Top}px`;
    player1.style.left = `${player1Left}px`;
    player1.style.transitionDuration = `1000ms;`;
  }, 2000);

  resetDice();
};

function random(min: number, max: number) {
  return Math.ceil(min + Math.random() * (max - min));
}

const player1: PlayerToken = {
  userId: 1243457,
  mnplPosition: 0,
  mnplJailed: 0,
  mnplSamePos: 2,
  mnplIndex: 0,
  style: {
    top: `${player1Top}px`,
    left: `${player1Left}px`,
    transitionDuration: "3000ms"
  },
  class: "_animated"
};

const player2: PlayerToken = {
  userId: 429935,
  mnplPosition: 0,
  mnplJailed: 0,
  mnplSamePos: 2,
  mnplIndex: 1,
  style: { top: "51.7px", left: "51.7px" },
  class: "_animated"
};

export const Game = (props: Props) => (
  //
  <>
    <div className="wrapper" style={{ width: "100%", height: "100%" }}>
      <div className="table _shakehack">
        <div className="table-body">
          <div className="table-body-players">
            <div
              className="table-body-players-card"
              id="player_card_695820"
              mnpl-order="0"
              mnpl-team="undefined"
            >
              <div className="table-body-players-card-body">
                <div className="table-body-players-card-body-avatar">
                  <div>
                    <div
                      style={{
                        backgroundImage: `url("https://d1.dogecdn.wtf/636899545225101312/990a61e4.jpg")`
                      }}
                    ></div>
                  </div>
                </div>
                <div className="table-body-players-card-body-nick">
                  <div className="_vip" style={{ display: "none" }}></div>
                  <div className="_nick">
                    <div>Гром_ка</div>
                  </div>
                  <div className="_muted" style={{ display: "none" }}></div>
                  <div className="_ignore" style={{ display: "none" }}></div>
                </div>
                <div className="table-body-players-card-body-money">10,380</div>
                <div
                  className="table-body-players-card-body-timer"
                  style={{ display: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      transform="rotate(-90 50 50)"
                    ></circle>
                  </svg>
                  <div>87</div>
                </div>
              </div>
              <div className="table-body-players-card-menu">
                <div className="_contract"></div>
                <div className="_profile"></div>
                <div className="_ignore"></div>
                <div className="_report"></div>
              </div>
            </div>
            <div
              className="table-body-players-card"
              id="player_card_429935"
              mnpl-order="1"
              mnpl-team="undefined"
              mnpl-action_player="1"
            >
              <div className="table-body-players-card-body">
                <div className="table-body-players-card-body-avatar">
                  <div>
                    <div
                      style={{
                        backgroundImage: `url("https://vk.dogecdn.wtf/pp.userapi.com/c638617/v638617387/34347/wjfuzUjNdgE.jpg")`
                      }}
                    ></div>
                  </div>
                </div>
                <div className="table-body-players-card-body-nick">
                  <div className="_vip" style={{ display: "none" }}></div>
                  <div className="_nick">
                    <div>Константин</div>
                  </div>
                  <div className="_muted" style={{ display: "none" }}></div>
                  <div className="_ignore" style={{ display: "none" }}></div>
                </div>
                <div className="table-body-players-card-body-money">11,860</div>
                <div
                  className="table-body-players-card-body-timer"
                  style={{ display: "block" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      transform="rotate(-90 50 50)"
                    ></circle>
                  </svg>
                  <div>86</div>
                </div>
              </div>
              <div className="table-body-players-card-menu">
                <div className="_profile"></div>
                <div className="_leave"></div>
              </div>
            </div>
            <div
              className="table-body-players-card"
              id="player_card_578308"
              mnpl-order="2"
              mnpl-team="undefined"
              mnpl-leaved="1"
            >
              <div className="table-body-players-card-body">
                <div className="table-body-players-card-body-avatar">
                  <div>
                    <div
                      style={{
                        backgroundImage: `url("https://d1.dogecdn.wtf/522142515353223178/554a52b7.jpg")`
                      }}
                    ></div>
                  </div>
                </div>
                <div className="table-body-players-card-body-nick">
                  <div className="_vip" style={{ display: "block" }}></div>
                  <div className="_nick">
                    <div>Кармен</div>
                  </div>
                  <div className="_muted" style={{ display: "none" }}></div>
                  <div className="_ignore" style={{ display: "none" }}></div>
                </div>
                <div className="table-body-players-card-body-money">15,000</div>
                <div
                  className="table-body-players-card-body-timer _alert"
                  style={{ display: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      transform="rotate(-90 50 50)"
                      stroke-dasharray="19.268434942017397,269.75808918824356"
                    ></circle>
                  </svg>
                  <div>90</div>
                </div>
              </div>
              <div className="table-body-players-card-menu">
                <div className="_profile"></div>
                <div className="_ignore"></div>
                <div className="_report"></div>
              </div>
            </div>
            <div
              className="table-body-players-card"
              id="player_card_1276527"
              mnpl-order="3"
              mnpl-team="undefined"
            >
              <div className="table-body-players-card-body">
                <div className="table-body-players-card-body-avatar">
                  <div>
                    <div
                      style={{
                        backgroundImage: `url("https://sun9-52.userapi.com/c628726/v628726484/51a78/znmeVQcGm2A.jpg?ava=1")`
                      }}
                    ></div>
                  </div>
                </div>
                <div className="table-body-players-card-body-nick">
                  <div className="_vip" style={{ display: "none" }}></div>
                  <div className="_nick">
                    <div>Влад</div>
                  </div>
                  <div className="_muted" style={{ display: "none" }}></div>
                  <div className="_ignore" style={{ display: "none" }}></div>
                </div>
                <div className="table-body-players-card-body-money">10,060</div>
                <div
                  className="table-body-players-card-body-timer"
                  style={{ display: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      transform="rotate(-90 50 50)"
                    ></circle>
                  </svg>
                  <div>86</div>
                </div>
              </div>
              <div className="table-body-players-card-menu">
                <div className="_contract"></div>
                <div className="_profile"></div>
                <div className="_ignore"></div>
                <div className="_report"></div>
              </div>
            </div>
          </div>
          <div className="table-body-board">
            <div id="ui-fields" className="table-body-board-fields">
              <div mnpl-corner="0" className="table-body-board-fields-one">
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/special/start.png")`
                    }}
                  ></div>
                </div>
              </div>
              <div
                mnpl-line="0"
                mnpl-group="1"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>600</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/1_perfumery/chanel.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="0"
                mnpl-special="1"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/special/chance.png")`
                    }}
                  ></div>
                </div>
              </div>
              <div
                mnpl-line="0"
                mnpl-group="1"
                className="table-body-board-fields-one"
                mnpl-owner="0"
              >
                <div className="table-body-board-fields-one-label">
                  <div>40</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/1_perfumery/hugo_boss.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="0"
                mnpl-special="1"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/special/tax_income.png")`
                    }}
                  ></div>
                </div>
              </div>
              <div
                mnpl-line="0"
                mnpl-group="0"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>2,000</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/0_auto/mercedes.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="0"
                mnpl-group="2"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>1,000</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/2_clothing/adidas.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="0"
                mnpl-special="1"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/special/chance.png")`
                    }}
                  ></div>
                </div>
              </div>
              <div
                mnpl-line="0"
                mnpl-group="2"
                className="table-body-board-fields-one"
                mnpl-owner="1"
              >
                <div className="table-body-board-fields-one-label">
                  <div>60</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/2_clothing/puma.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="0"
                mnpl-group="2"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>1,200</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/2_clothing/lacoste.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div mnpl-corner="1" className="table-body-board-fields-one">
                <div className="table-body-board-fields-one-body">
                  <div className="_jail-visit"></div>
                  <div className="_jail-cell">
                    <div></div>
                  </div>
                </div>
              </div>
              <div
                mnpl-line="1"
                mnpl-group="3"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>1,400</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/3_web/vk.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="1"
                mnpl-group="9"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>1,500</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/9_games/rockstar_games.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="1"
                mnpl-group="3"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>1,400</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/3_web/facebook.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="1"
                mnpl-group="3"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>1,600</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/3_web/twitter.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="1"
                mnpl-group="0"
                className="table-body-board-fields-one"
                mnpl-owner="0"
              >
                <div className="table-body-board-fields-one-label">
                  <div>250</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/0_auto/audi.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="1"
                mnpl-group="4"
                className="table-body-board-fields-one"
                mnpl-owner="1"
              >
                <div className="table-body-board-fields-one-label">
                  <div>140</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/4_drinks/coca_cola.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="1"
                mnpl-special="1"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/special/chance.png")`
                    }}
                  ></div>
                </div>
              </div>
              <div
                mnpl-line="1"
                mnpl-group="4"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>1,800</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/4_drinks/pepsi.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="1"
                mnpl-group="4"
                className="table-body-board-fields-one"
                mnpl-owner="3"
              >
                <div className="table-body-board-fields-one-label">
                  <div>160</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/4_drinks/fanta.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-corner="2"
                mnpl-special="1"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/special/jackpot.svg")`
                    }}
                  ></div>
                </div>
              </div>
              <div
                mnpl-line="2"
                mnpl-group="5"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>2,200</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/5_airlines/american_airlines.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="2"
                mnpl-special="1"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/special/chance.png")`
                    }}
                  ></div>
                </div>
              </div>
              <div
                mnpl-line="2"
                mnpl-group="5"
                className="table-body-board-fields-one"
                mnpl-owner="0"
              >
                <div className="table-body-board-fields-one-label">
                  <div>180</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/5_airlines/lufthansa.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="2"
                mnpl-group="5"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>2,400</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/5_airlines/british_airways.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="2"
                mnpl-group="0"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>2,000</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/0_auto/ford.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="2"
                mnpl-group="6"
                className="table-body-board-fields-one"
                mnpl-owner="3"
              >
                <div className="table-body-board-fields-one-label">
                  <div>220</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/6_food/mcdonalds.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="2"
                mnpl-group="6"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>2,600</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/6_food/burger_king.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="2"
                mnpl-group="9"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>1,500</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/9_games/rovio.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="2"
                mnpl-group="6"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>2,800</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/6_food/kfc.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-corner="3"
                mnpl-special="1"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/special/goToJail.png")`
                    }}
                  ></div>
                </div>
              </div>
              <div
                mnpl-line="3"
                mnpl-group="7"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>3,000</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/7_hotels/holiday_inn.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="3"
                mnpl-group="7"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>3,000</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/7_hotels/radisson_blu.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="3"
                mnpl-special="1"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/special/chance_rotated.png")`
                    }}
                  ></div>
                </div>
              </div>
              <div
                mnpl-line="3"
                mnpl-group="7"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>3,200</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/7_hotels/novotel.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="3"
                mnpl-group="0"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>2,000</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/0_auto/land_rover.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="3"
                mnpl-special="1"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/special/tax_luxury.png")`
                    }}
                  ></div>
                </div>
              </div>
              <div
                mnpl-line="3"
                mnpl-group="8"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>3,500</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/8_smartphones/apple.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
              <div
                mnpl-line="3"
                mnpl-special="1"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/special/chance_rotated.png")`
                    }}
                  ></div>
                </div>
              </div>
              <div
                mnpl-line="3"
                mnpl-group="8"
                className="table-body-board-fields-one"
              >
                <div className="table-body-board-fields-one-label">
                  <div>4,000</div>
                </div>
                <div className="table-body-board-fields-one-body">
                  <div
                    className="_logo"
                    style={{
                      backgroundImage: `url("https://m1.dogecdn.wtf/fields/brands/8_smartphones/nokia.svg")`
                    }}
                  ></div>
                </div>
                <div className="table-body-board-fields-one-level"></div>
              </div>
            </div>

            <div className="table-body-board-center">
              <div className="table-body-board-m1tv">
                <div className="table-body-board-m1tv-controls">
                  <div mnpl-size="small" mnpl-action="rewind_back_60">
                    –60
                  </div>
                  <div mnpl-size="small" mnpl-action="rewind_back_15">
                    –15
                  </div>
                  <div mnpl-size="small" mnpl-action="rewind_back_5">
                    –5
                  </div>
                  <div
                    mnpl-size="big"
                    mnpl-action="play"
                    style={{ display: "none" }}
                  ></div>
                  <div mnpl-size="big" mnpl-action="pause"></div>
                  <div mnpl-size="small" mnpl-action="rewind_fwd_5">
                    +5
                  </div>
                  <div mnpl-size="small" mnpl-action="rewind_fwd_15">
                    +15
                  </div>
                  <div mnpl-size="small" mnpl-action="rewind_fwd_60">
                    +60
                  </div>
                </div>
                <div className="table-body-board-m1tv-timer">
                  <div></div>
                  <div></div>
                </div>
                <div className="table-body-board-m1tv-speed">
                  <div className="_btn">–</div>
                  <div className="_val">1</div>
                  <div className="_btn">+</div>
                </div>
              </div>
              <div className="TableAction">
                <div className="TableAction-top">
                  <div className="TableAction-top-title">Покупаем?</div>
                  <div className="TableAction-top-text">
                    <div>
                      Если вы откажетесь от покупки, то поле будет выставлено на
                      общий аукцион.
                    </div>
                  </div>
                </div>

                <div className="TableAction-buttons">
                  <div className="_action">Купить за 2,800k</div>
                  <div className="_action">На аукцион</div>
                </div>
              </div>
              <div className="table-body-board-center-arbitr">
                <input
                  id="arbitr-pause"
                  type="button"
                  className="button button-small button-free button-grass"
                  value="Приостановить игру"
                />
                <input
                  id="arbitr-unpause"
                  type="button"
                  className="button button-small button-free button-grass"
                  value="Возобновить игру"
                  style={{ display: "none" }}
                />
                <input
                  id="arbitr-uncontract"
                  type="button"
                  className="button button-small button-free button-grapefruit"
                  value="Откатить договор"
                  style={{ display: "none" }}
                />
              </div>

              <div
                className="table-body-board-ticket"
                style={{ display: "none" }}
              >
                <div className="table-body-board-ticket-side">
                  <div>
                    <img src="//m1.dogecdn.wtf/tickets/m1cup-2018.svg" />
                  </div>
                  <div className="_button">
                    <input
                      type="button"
                      className="button button-free button-small"
                      value="Купить за 59 р."
                    />
                  </div>
                </div>
                <div className="table-body-board-ticket-text">
                  <div className="_title">Билет на M1 Cup 2018</div>
                  <div className="_text">
                    Купив и активировав этот билет, вы получите шанс на
                    получение сувенирных кейсов во время просмотра матчей M1
                    Cup.
                  </div>
                </div>
              </div>

              <div className="table-body-board-chat scr" scr-active="1">
                <div
                  className="scr-window"
                  style={{ paddingTop: "0px", width: "525px", height: "439px" }}
                >
                  <div className="scr-content" style={{ width: "475px" }}>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUafwqq8AAM"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_0_color _rendered"
                        mnpl-userid="695820"
                      >
                        Гром_ка
                      </span>
                      выбрасывает 1:2
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUafwqs8AAQ"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_0_color _rendered"
                        mnpl-userid="695820"
                      >
                        Гром_ка
                      </span>
                      попадает на
                      <span className="_field" mnpl-field_id="3">
                        Hugo Boss
                      </span>{" "}
                      и задумывается о покупке
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUafxQq8AAc"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_0_color _rendered"
                        mnpl-userid="695820"
                      >
                        Гром_ка
                      </span>
                      покупает
                      <span className="_field" mnpl-field_id="3">
                        Hugo Boss
                      </span>{" "}
                      за 600k
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUafxtW8AAo"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_1_color _rendered"
                        mnpl-userid="429935"
                      >
                        Константин
                      </span>
                      выбрасывает 3:5
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUafxtX8AAs"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_1_color _rendered"
                        mnpl-userid="429935"
                      >
                        Константин
                      </span>
                      попадает на
                      <span className="_field" mnpl-field_id="8">
                        Puma
                      </span>{" "}
                      и задумывается о покупке
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUafydq8AA4"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_1_color _rendered"
                        mnpl-userid="429935"
                      >
                        Константин
                      </span>
                      покупает
                      <span className="_field" mnpl-field_id="8">
                        Puma
                      </span>{" "}
                      за 1,000k
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagExl8ABE"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_2_color _rendered"
                        mnpl-userid="578308"
                      >
                        Кармен
                      </span>
                      сдаётся
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagFPr8ABQ"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_3_color _rendered"
                        mnpl-userid="1276527"
                      >
                        Влад
                      </span>
                      выбрасывает 1:1 и получает ещё один ход, так как выпал
                      дубль
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagFPr8ABU"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_3_color _rendered"
                        mnpl-userid="1276527"
                      >
                        Влад
                      </span>
                      попадает на поле «Шанс».
                      <span
                        className="table-body-board-chat-message-user _color_player_3_color _rendered"
                        mnpl-userid="1276527"
                      >
                        Влад
                      </span>
                      вспомнил, что забыл дома выключить утюг. Следующий ход
                      будет в обратном направлении
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagGNi8ABg"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_3_color _rendered"
                        mnpl-userid="1276527"
                      >
                        Влад
                      </span>
                      выбрасывает 6:6
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagGNk8ABo"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_3_color _rendered"
                        mnpl-userid="1276527"
                      >
                        Влад
                      </span>
                      арестован полицией и отправляется в тюрьму
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagHzZ8AB0"
                    >
                      <div className="table-body-board-chat-message-users">
                        <a
                          className="table-body-board-chat-message-user _message _color_player_3_bg_plain _rendered"
                          mnpl-userid="1276527"
                          href="/profile/1276527"
                          target="_blank"
                        >
                          Влад
                        </a>
                      </div>
                      &nbsp;—&nbsp;<span mnpl-usermessage="">...</span>
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagIuS8ACA"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_0_color _rendered"
                        mnpl-userid="695820"
                      >
                        Гром_ка
                      </span>
                      выбрасывает 2:5
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagIuS8ACE"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_0_color _rendered"
                        mnpl-userid="695820"
                      >
                        Гром_ка
                      </span>
                      посещает полицейский участок с экскурсией
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagJ2e8ACQ"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_1_color _rendered"
                        mnpl-userid="429935"
                      >
                        Константин
                      </span>
                      выбрасывает 2:6
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagJ2e8ACU"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_1_color _rendered"
                        mnpl-userid="429935"
                      >
                        Константин
                      </span>
                      попадает на
                      <span className="_field" mnpl-field_id="16">
                        Coca-Cola
                      </span>{" "}
                      и задумывается о покупке
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagJ7I8ACg"
                    >
                      <div className="table-body-board-chat-message-users">
                        <a
                          className="table-body-board-chat-message-user _message _color_player_3_bg_plain _rendered"
                          mnpl-userid="1276527"
                          href="/profile/1276527"
                          target="_blank"
                        >
                          Влад
                        </a>
                      </div>
                      &nbsp;—&nbsp;
                      <span mnpl-usermessage="">Это только я так могу</span>
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagK9g8ACs"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_1_color _rendered"
                        mnpl-userid="429935"
                      >
                        Константин
                      </span>
                      покупает
                      <span className="_field" mnpl-field_id="16">
                        Coca-Cola
                      </span>
                      за 1,800k
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagLWP8AC4"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_3_color _rendered"
                        mnpl-userid="1276527"
                      >
                        Влад
                      </span>
                      заплатил 500k и вышел из тюрьмы
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagLzn8ADE"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_3_color _rendered"
                        mnpl-userid="1276527"
                      >
                        Влад
                      </span>
                      выбрасывает 6:3
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagLzn8ADI"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_3_color _rendered"
                        mnpl-userid="1276527"
                      >
                        Влад
                      </span>
                      попадает на
                      <span className="_field" mnpl-field_id="19">
                        Fanta
                      </span>{" "}
                      и задумывается о покупке
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagMa-8ADU"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_3_color _rendered"
                        mnpl-userid="1276527"
                      >
                        Влад
                      </span>
                      покупает
                      <span className="_field" mnpl-field_id="19">
                        Fanta
                      </span>{" "}
                      за 2,000k
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagMob8ADg"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_0_color"
                        mnpl-userid="695820"
                      >
                        Гром_ка
                      </span>
                      выбрасывает 3:2
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagMob8ADk"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_0_color"
                        mnpl-userid="695820"
                      >
                        Гром_ка
                      </span>
                      попадает на
                      <span className="_field" mnpl-field_id="15">
                        Audi
                      </span>{" "}
                      и задумывается о покупке
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagNL58ADw"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_0_color"
                        mnpl-userid="695820"
                      >
                        Гром_ка
                      </span>
                      покупает
                      <span className="_field" mnpl-field_id="15">
                        Audi
                      </span>{" "}
                      за 2,000k
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagRML8AD8"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_1_color"
                        mnpl-userid="429935"
                      >
                        Константин
                      </span>
                      выбрасывает 1:2
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagRML8AEA"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_1_color"
                        mnpl-userid="429935"
                      >
                        Константин
                      </span>
                      попадает на
                      <span className="_field" mnpl-field_id="19">
                        Fanta
                      </span>{" "}
                      и должен заплатить игроку
                      <span
                        className="table-body-board-chat-message-user _color_player_3_color"
                        mnpl-userid="1276527"
                      >
                        Влад
                      </span>
                      аренду в размере 160k
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagR0Y8AEM"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_1_color"
                        mnpl-userid="429935"
                      >
                        Константин
                      </span>
                      заплатил аренду 160k
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagSM_8AEY"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_3_color"
                        mnpl-userid="1276527"
                      >
                        Влад
                      </span>
                      выбрасывает 4:3
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagSM_8AEc"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_3_color"
                        mnpl-userid="1276527"
                      >
                        Влад
                      </span>
                      попадает на
                      <span className="_field" mnpl-field_id="26">
                        McDonald's
                      </span>
                      и задумывается о покупке
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagTBf8AEo"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_3_color"
                        mnpl-userid="1276527"
                      >
                        Влад
                      </span>
                      покупает
                      <span className="_field" mnpl-field_id="26">
                        McDonald's
                      </span>
                      за 2,600k
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagTSw8AE0"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_0_color"
                        mnpl-userid="695820"
                      >
                        Гром_ка
                      </span>
                      выбрасывает 3:5
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagTSw8AE4"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_0_color"
                        mnpl-userid="695820"
                      >
                        Гром_ка
                      </span>
                      попадает на
                      <span className="_field" mnpl-field_id="23">
                        Lufthansa
                      </span>{" "}
                      и задумывается о покупке
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagUIs8AFE"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_0_color"
                        mnpl-userid="695820"
                      >
                        Гром_ка
                      </span>
                      покупает
                      <span className="_field" mnpl-field_id="23">
                        Lufthansa
                      </span>
                      за 2,200k
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagUcC8AFQ"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_1_color"
                        mnpl-userid="429935"
                      >
                        Константин
                      </span>
                      выбрасывает 2:2 и получает ещё один ход, так как выпал
                      дубль
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagUcC8AFU"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_1_color"
                        mnpl-userid="429935"
                      >
                        Константин
                      </span>
                      попадает на
                      <span className="_field" mnpl-field_id="23">
                        Lufthansa
                      </span>{" "}
                      и должен заплатить игроку
                      <span
                        className="table-body-board-chat-message-user _color_player_0_color"
                        mnpl-userid="695820"
                      >
                        Гром_ка
                      </span>
                      аренду в размере 180k
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagVMV8AFg"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_1_color"
                        mnpl-userid="429935"
                      >
                        Константин
                      </span>
                      заплатил аренду 180k
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagVjN8AFs"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_1_color"
                        mnpl-userid="429935"
                      >
                        Константин
                      </span>
                      выбрасывает 3:3 и получает ещё один ход, так как выпал
                      дубль
                    </div>
                    <div
                      className="table-body-board-chat-message"
                      id="event_CUagVjO8AFw"
                    >
                      <span
                        className="table-body-board-chat-message-user _color_player_1_color"
                        mnpl-userid="429935"
                      >
                        Константин
                      </span>
                      попадает на
                      <span className="_field" mnpl-field_id="29">
                        KFC
                      </span>{" "}
                      и задумывается о покупке
                    </div>
                  </div>
                  <div className="scr-pane">
                    <div
                      className="scr-pane-handler"
                      style={{
                        transform: "translateY(284px)",
                        height: "153.499px"
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="table-body-board-chatbottom">
                <div className="_channel" mnpl-ch="all"></div>
                <div className="_input">
                  <input placeholder="Введите сообщение" />
                  <div
                    mnpl-emote="Clap"
                    className="emotes-button"
                    style={{
                      backgroundImage: `url("//m1.dogecdn.wtf/chat/eClap.svg")`
                    }}
                  ></div>
                  <div className="_hint _hint_tab">
                    Теперь можно писать конкретному игроку!
                    <br />
                    <span></span>, чтобы выбрать получателя.
                  </div>
                </div>
                <div className="_hidekeyboard"></div>
                <div className="_screenshot" style={{ display: "none" }}></div>
                <div className="_fullscreen"></div>
                <div
                  className="_fullscreenoff"
                  style={{ display: "none" }}
                ></div>
                <div className="_helper"></div>
              </div>
            </div>

            <div className="table-body-board-tokens">
              <div
                id="player_token_695820"
                mnpl-user_id="695820"
                mnpl-position="23"
                mnpl-jailed="0"
                mnpl-same_pos="1"
                mnpl-index="0"
                style={{
                  top: "630px",
                  left: "442.5px",
                  transitionDuration: "300ms"
                }}
                className="_animated"
              ></div>
              <div
                id="player_token_429935"
                mnpl-user_id="429935"
                mnpl-position="29"
                mnpl-same_pos="1"
                mnpl-index="0"
                mnpl-jailed="0"
                style={{
                  top: "630px",
                  left: "112.5px",
                  transitionDuration: "900ms"
                }}
                className="_animated"
              ></div>
              <div
                id="player_token_578308"
                mnpl-user_id="578308"
                mnpl-position="0"
                mnpl-same_pos="2"
                mnpl-index="0"
                mnpl-jailed="0"
                style={{
                  top: "18.3px",
                  left: "18.3px",
                  transitionDuration: "300ms",
                  display: "none"
                }}
                className="_animated"
              ></div>
              <div
                id="player_token_1276527"
                mnpl-user_id="1276527"
                mnpl-position="26"
                mnpl-same_pos="1"
                mnpl-index="0"
                mnpl-jailed="0"
                style={{
                  top: "630px",
                  left: "277.5px",
                  transitionDuration: "900ms"
                }}
                className="_animated"
              ></div>
            </div>
            <div className="table-body-board-generators">
              <div
                className="TableGenerator TableGeneratorDices _animated"
                style={{ display: "none" }}
              >
                <div
                  className="TableGeneratorDices-one _skin_-100"
                  style={{
                    transform:
                      "scale(1) rotateX(450deg) rotateY(360deg) rotateZ(450deg)"
                  }}
                >
                  <div className="side front">
                    <div className="dot center"></div>
                  </div>
                  <div className="side inner front"></div>
                  <div className="side top">
                    <div className="dot dleft dtop"></div>
                    <div className="dot dright dbottom"></div>
                  </div>
                  <div className="side inner top"></div>
                  <div className="side right">
                    <div className="dot dleft dtop"></div>
                    <div className="dot center"></div>
                    <div className="dot dright dbottom"></div>
                  </div>
                  <div className="side inner right"></div>
                  <div className="side left">
                    <div className="dot dleft dtop"></div>
                    <div className="dot dright dtop"></div>
                    <div className="dot dleft dbottom"></div>
                    <div className="dot dright dbottom"></div>
                  </div>
                  <div className="side inner left"></div>
                  <div className="side bottom">
                    <div className="dot center"></div>
                    <div className="dot dleft dtop"></div>
                    <div className="dot dright dtop"></div>
                    <div className="dot dleft dbottom"></div>
                    <div className="dot dright dbottom"></div>
                  </div>
                  <div className="side inner bottom"></div>
                  <div className="side back">
                    <div className="dot dleft dtop"></div>
                    <div className="dot dright dtop"></div>
                    <div className="dot dleft dbottom"></div>
                    <div className="dot dright dbottom"></div>
                    <div className="dot dleft center"></div>
                    <div className="dot dright center"></div>
                  </div>
                  <div className="side inner back"></div>
                  <div className="side cover x"></div>
                  <div className="side cover y"></div>
                  <div className="side cover z"></div>
                </div>
                <div
                  className="TableGeneratorDices-one _skin_-100"
                  style={{
                    transform:
                      "scale(1) rotateX(90deg) rotateY(270deg) rotateZ(450deg)"
                  }}
                >
                  <div className="side front">
                    <div className="dot center"></div>
                  </div>
                  <div className="side inner front"></div>
                  <div className="side top">
                    <div className="dot dleft dtop"></div>
                    <div className="dot dright dbottom"></div>
                  </div>
                  <div className="side inner top"></div>
                  <div className="side right">
                    <div className="dot dleft dtop"></div>
                    <div className="dot center"></div>
                    <div className="dot dright dbottom"></div>
                  </div>
                  <div className="side inner right"></div>
                  <div className="side left">
                    <div className="dot dleft dtop"></div>
                    <div className="dot dright dtop"></div>
                    <div className="dot dleft dbottom"></div>
                    <div className="dot dright dbottom"></div>
                  </div>
                  <div className="side inner left"></div>
                  <div className="side bottom">
                    <div className="dot center"></div>
                    <div className="dot dleft dtop"></div>
                    <div className="dot dright dtop"></div>
                    <div className="dot dleft dbottom"></div>
                    <div className="dot dright dbottom"></div>
                  </div>
                  <div className="side inner bottom"></div>
                  <div className="side back">
                    <div className="dot dleft dtop"></div>
                    <div className="dot dright dtop"></div>
                    <div className="dot dleft dbottom"></div>
                    <div className="dot dright dbottom"></div>
                    <div className="dot dleft center"></div>
                    <div className="dot dright center"></div>
                  </div>
                  <div className="side inner back"></div>
                  <div className="side cover x"></div>
                  <div className="side cover y"></div>
                  <div className="side cover z"></div>
                </div>
                <div style={{ display: "none" }}>
                  <div id="sweater">{"sweater"}</div>
                </div>
              </div>
            </div>

            <div className="TableContract" style={{ display: "none" }}>
              <div className="TableContract-top">
                <div className="TableContract-top-title">Договор</div>
              </div>
              <div className="TableContract-content">
                <div className="TableContract-content-head"></div>
                <div className="TableContract-content-list"></div>
              </div>
              <div className="TableContract-actions">
                <div className="_future">Future</div>
              </div>
            </div>
            <div className="TableHelper" style={{ display: "none" }}>
              <div className="TableHelper-tabs _active_0">
                <div className="_stat _active">Статистика</div>
                <div className="_settings">Настройки</div>
              </div>
              <div className="TableHelper-content">
                <div>
                  <div className="_matchtitle">
                    <div className="_icon _game_submode_0"></div>
                    <div className="_title">Обычная игра</div>
                  </div>
                  <div className="TableHelper-content-stat">
                    <div className="_time">
                      <div>2:42</div>
                      <div>время игры</div>
                    </div>
                    <div className="_round">
                      <div>4</div>
                      <div>раунд</div>
                    </div>
                    <div className="_roundtax _mod_0">
                      <div>2,000k</div>
                      <div></div>
                    </div>
                  </div>
                  <div className="TableHelper-content-players">
                    <div className="TableHelper-content-players-head">
                      <div></div>
                      <div className="_sortable _active">Активы</div>
                      <div className="_sortable">Счёт</div>
                    </div>
                    <div className="TableHelper-content-players-row">
                      <div>
                        <div className="_dot _index_0"></div>
                        <div
                          className="_avatar"
                          style={{
                            backgroundImage: `url("https://d1.dogecdn.wtf/636899545225101312/990a61e4.jpg")`
                          }}
                        ></div>
                        <div className="_nick">Гром_ка</div>
                      </div>
                      <div>12,780</div>
                      <div>180</div>
                    </div>
                    <div className="TableHelper-content-players-row">
                      <div>
                        <div className="_dot _index_1"></div>
                        <div
                          className="_avatar"
                          style={{
                            backgroundImage: `url("https://vk.dogecdn.wtf/pp.userapi.com/c638617/v638617387/34347/wjfuzUjNdgE.jpg")`
                          }}
                        ></div>
                        <div className="_nick">Константин</div>
                      </div>
                      <div>13,260</div>
                      <div>0</div>
                    </div>
                    <div className="TableHelper-content-players-row">
                      <div>
                        <div className="_dot _index_2"></div>
                        <div
                          className="_avatar"
                          style={{
                            backgroundImage: `url("https://d1.dogecdn.wtf/522142515353223178/554a52b7.jpg")`
                          }}
                        ></div>
                        <div className="_nick">Кармен</div>
                      </div>
                      <div>15,000</div>
                      <div>0</div>
                    </div>
                    <div className="TableHelper-content-players-row">
                      <div>
                        <div className="_dot _index_3"></div>
                        <div
                          className="_avatar"
                          style={{
                            backgroundImage: `url("https://sun9-52.userapi.com/c628726/v628726484/51a78/znmeVQcGm2A.jpg?ava=1")`
                          }}
                        ></div>
                        <div className="_nick">Влад</div>
                      </div>
                      <div>12,360</div>
                      <div>160</div>
                    </div>
                  </div>
                  <div className="TableHelper-content-viewers"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="placeholder_gameover"></div>
      </div>
      <div className="table-jokes"></div>
    </div>
    <div className="table-loading" style={{ display: "none" }}>
      <div className="table-loading-logo _animated"></div>
      <div className="table-loading-status">Всё готово!</div>
    </div>
  </>
);
