import spaghetti from "../../../../assets/menu-spaghetti.png";
import gnocchi from "../../../../assets/menu-gnocchi.png";
import rovioli from "../../../../assets/menu-rovioli.png";
import penneAllaVodak from "../../../../assets/menu-penne-alla-vodak.png";
import risoto from "../../../../assets/menu-risoto.png";
import splitza from "../../../../assets/menu-splitza.png";
import starFilled from "../../../../assets/star-filled.svg";
import starEmpty from "../../../../assets/star-empty.svg";
import "./Menu.css";

export const meals = [
    {
        name: "Spaghetti",
        img: spaghetti,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 0, 0],
        price: "6.99",
    },
    {
        name: "Gnocchi",
        img: gnocchi,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 0],
        price: "11.49",
    },
    {
        name: "Rovioli",
        img: rovioli,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "14.99",
    },
    {
        name: "Penne Alla Vodak",
        img: penneAllaVodak,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 0, 0],
        price: "19.49",
    },
    {
        name: "Risoto",
        img: risoto,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 1, 1, 1],
        price: "17.49",
    },
    {
        name: "Splitza",
        img: splitza,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam,diam.",
        rating: [1, 1, 0, 0, 0],
        price: "4.49",
    },
];
