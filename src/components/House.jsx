import {useState} from "react";
import "../css/House.css";

const House = (props) => {
    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => {
        setShowDialog(true);
    };

    const closeDialog = () => {
        setShowDialog(false);
    };

    return (
        <>
            <section className="house" onClick={openDialog}>
                <h3>{props.title}</h3>
                <img src={`https://demo-backend-psr7.onrender.com/images/${props.main_image}`} />
            </section>
            {showDialog?(
                <div className="w3-modal display-dialog">
                    <div className="w3-modal-content">
                        <div className="w3-container">
                        <span onClick={closeDialog} className="w3-button w3-display-topright">&times;</span>
                        <h3>{props.title}</h3>
                        <p>Some text in the Modal..</p>
                        </div>
                    </div>
                </div>
            ):("")}
        </>
    )
};

export default House;