import React from "react";
import { meals } from "./data";
import starFilled from "../../../../assets/star-filled.svg";
import starEmpty from "../../../../assets/star-empty.svg";
import "./Menu.css";

const Star = (props) => {
    return (
        <img
            src={props.number ? starFilled : starEmpty}
            alt={props.number ? "Filled Star" : "Empty Star"}
        />
    );
};

export const Meal = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt={props.name} className="card__img" />
            <h3 className="card__title">{props.name}</h3>
            <div className="menu-section__stars">
                {props.rating.map((number, idx) => {
                    return <Star number={number} key={idx} />;
                })}
            </div>
            <p className="card__text">{props.description}</p>
            <div className="card__footer">
                <span className="menu-section__price">{props.price}</span>
                <button className="btn btn-md btn-orange">Order Now</button>
            </div>
        </div>
    );
};

class Menu extends React.Component {
    render() {
        return (
            <section id="menu-section">
                <div className="menu-section__container container">
                    <h2>Our Popular Menu</h2>
                    <div className="menu-section__filters">
                        <button className="btn btn-lg btn-black">
                            All Catagories
                        </button>
                        <button className="btn btn-lg btn-gray">Dinner</button>
                        <button className="btn btn-lg btn-gray">Lunch</button>
                        <button className="btn btn-lg btn-gray">Dessert</button>
                        <button className="btn btn-lg btn-gray">Drink</button>
                    </div>
                    <div className="menu-section__meals">
                        {meals.map((meal, idx) => {
                            return (
                                <Meal
                                    key={idx}
                                    name={meal.name}
                                    price={meal.price}
                                    description={meal.text}
                                    rating={meal.rating}
                                    img={meal.img}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export { Menu };
