const HouseDetailsDialog = (props) => {

    return (
        <div className="columns">
            <img src={"http://localhost:3001/images/"+props.main_image} alt="house" />
            <div id="dialog-content">
                <div  className="columns">
                            <h3>{props.name}</h3>
                            <section id="edit-links">
                                <a href="edit-link" onClick={props.showEdit}>&#9998;</a>
                                <a href="delete-link" onClick={props.showDelete}>&#x2715;</a>
                            </section>
                        </div>
                <p>{props.bedrooms} Bedrooms</p>
                <p>{props.bathrooms} Bathrooms</p>
                <p>Size: {props.size} sqft</p>
                <p>Features: {props.features.join(", ")}</p>
            </div>
        </div>

    );
};

export default HouseDetailsDialog;