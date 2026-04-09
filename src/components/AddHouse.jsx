import "../css/Dialog.css";
import {useState} from "react";

const AddHouse = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (e) => {
        setPrevSrc(URL.createObjectURL(e.target.files[0]));
    };

    const addHouseToServer = async(e) => {
        e.preventDefault();
        setResult("Sending...");

        const formData = new FormData(e.target);
        console.log(...formData);

        const postURLLocal = "http://localhost:3001/api/houses";
        const postURLREnder = "https://spring-housing-backend.onrender.com/api/houses";
        const response = await fetch(postURLLocal, {
            "method":"POST",
            "body":formData
        });

        if(response.status ==200){
            setResult("House Added");
            props.closeAddDialog();
            props.addHouseToList(await response.json());
        }else {
            setResult("Error adding house");
        }
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

                            <section>
                                <p id="img-prev-section">
                                    {prevSrc==""?(""):(
                                        <img id="img-prev" src={prevSrc} />
                                    )}
                                </p>
                                <p>
                                    <label htmlFor="img">Select Image</label>
                                    <input type="file" id="img" name="img" accept="images/*" onChange={uploadImage}></input>
                                </p>
                            </section>

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