import "../css/House.css";
import housePic from "../images/house.webp";

const House = (props) => {
    return (
        <section className="house">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <img src={housePic} />
        </section>
    )
};

export default House;