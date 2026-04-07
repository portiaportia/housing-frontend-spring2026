import "../css/Dialog.css";
import {useState} from "react";

const AddHouse = (props) => {
    const [result, setResult] = useState("");

    const addHouseToServer = (e) => {
        e.preventDefault();
        setResult("Sending...");

        const formData = new FormData(e.target);
        console.log(...formData);

        setResult("Sent");
    };

    return (
        <div id="house-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeAddDialog}
                    >
                        &times;
                    </span>
                    <div id="house-dialog-content">
                        <form onSubmit={addHouseToServer}>
                            <h3>Create New House</h3>

                            <p>
                                <label htmlFor="name">House Name:</label>
                                <input type="text" id="name" name="name" required min="3"></input>
                            </p>

                            <p>
                                <label htmlFor="size">Size:</label>
                                <input type="number" id="size" name="size" required min="0"></input>
                            </p>

                            <p>
                                <label htmlFor="bedrooms">Bedrooms:</label>
                                <input type="number" id="bedrooms" name="bedrooms" required min="0"></input>
                            </p>

                            <p>
                                <label htmlFor="bathrooms">Bathrooms:</label>
                                <input type="number" id="bathrooms" name="bathrooms" required min="0"></input>
                            </p>

                            <p>
                                <label htmlFor="features">Features:</label>
                                <textarea type="text" id="features" name="features"></textarea>
                            </p>

                            <p>
                                <button type="submit">Submit</button>
                            </p>
                            <p>{result}</p>
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddHouse;