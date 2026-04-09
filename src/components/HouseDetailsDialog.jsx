import "../css/Dialog.css";

const HouseDetailsDialog = (props) => {

    const localImageLink = `http://localhost:3001/images/${props.main_image}`;
    const renderImageLink = `https://spring-housing-backend.onrender.com/images/${props.main_image}`;
    
    return (
        <div id="house-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeHouseDialog}
                    >
                        &times;
                    </span>
                    <div id="house-dialog-content">
                        <div className="columns">
                            <img src={localImageLink} alt="house" />
                            <div id="dialog-content">
                                            <h3>{props.name}</h3>
                                <p>{props.bedrooms} Bedrooms</p>
                                <p>{props.bathrooms} Bathrooms</p>
                                <p>Size: {props.size} sqft</p>
                                <p>Features: {props.features.join(", ")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HouseDetailsDialog;