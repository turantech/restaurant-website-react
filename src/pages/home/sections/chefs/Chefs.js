import "./Chefs.css";
import chef1 from "../../../../assets/betran.png";
import chef2 from "../../../../assets/ferry.png";
import chef3 from "../../../../assets/iswan.png";

const Chef = (props) => {
    return (
        <div className="chefs-section__chef">
            <img src={props.img} alt="Betran Chef" />
            <h4>{props.name}</h4>
            <p>{props.title}</p>
        </div>
    );
};

export const Chefs = () => {
    return (
        <section id="chefs-section">
            <div className="chefs-section__container container">
                <h2>
                    Our Greatest <span>Chefs</span>
                </h2>
                <div className="chefs-section__chefs">
                    <Chef img={chef1} name={"Betran Komar"} title="Head Chef" />
                    <Chef img={chef2} name={"Ferry Sauwi"} title="Chef" />
                    <Chef img={chef3} name={"Iswan Dracho"} title="Chef" />
                </div>
                <button className="btn btn-lg btn-orange">View All</button>
            </div>
        </section>
    );
};
