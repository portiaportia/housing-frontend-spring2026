import {useState} from "react";
import "../css/House.css";
import HouseDialog from "./HouseDetailsDialog"

const House = (props) => {
    const [showDialog, setShowDialog] = useState(false);
    const localImageLink = `http://localhost:3001/images/${props.main_image}`;
    const renderImageLink = `https://spring-housing-backend.onrender.com/images/${props.main_image}`;

    const showHouseDetails = () => {
        setShowDialog(true);
    }

    const closeHouseDetails = () => {
        setShowDialog(false);
    }

    return (
        <>
            {showDialog?(
                <HouseDialog closeHouseDialog={closeHouseDetails} 
                    _id={props._id}
                    name={props.name}
                    bedrooms={props.bedrooms}
                    size={props.size}
                    bathrooms={props.bathrooms}
                    main_image={props.main_image}
                    features={props.features} />
            ):("")}

            <section className="house" onClick={showHouseDetails}>
                <img src={localImageLink} alt="house" />
                <div className="house-description">
                    <h3>{props.name}</h3>
                </div>
            </section>
        </>
    )
};

export default House;