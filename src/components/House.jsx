import {useState} from "react";
import {Link} from "react-router-dom";
import "../css/House.css";

const House = (props) => {

    return (
        <Link to={`/listings/${props._id}`}>
            <section className="house">
                <img src={`https://demo-backend-psr7.onrender.com/images/${props.main_image}`} alt="house" />
                <div className="house-description">
                    <h3>{props.name}</h3>
                </div>
            </section>
        </Link>
    )
};

export default House;