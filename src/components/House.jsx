import {useState} from "react";
import "../css/House.css";
import HouseDialog from "./HouseDialog"

const House = (props) => {
    const [house, setHouse] = useState(props);
    const [showHouse, setShowHouse] = useState(true);
    const [showDialog, setShowDialog] = useState(false);
    const localImageLink = `http://localhost:3001/images/${house.main_image}`;
    const renderImageLink = `https://spring-housing-backend.onrender.com/images/${house.main_image}`;

    const showHouseDetails = () => {
        setShowDialog(true);
    }

    const closeHouseDetails = () => {
        setShowDialog(false);
    }

    const updateHouse = (house) => {
        setHouse(house);
      };

    const hideHouse = () => {
        setShowHouse(false);
      };

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
                    features={props.features}
                    updateHouse = {updateHouse}
                    hideHouse = {hideHouse} />
            ):("")}

            {showHouse?(
                <section className="house" onClick={showHouseDetails}>
                    <img src={localImageLink} alt="house" />
                    <div className="house-description">
                        <h3>{house.name}</h3>
                    </div>
                </section>
            ):("")}
        </>
    )
};

export default House;