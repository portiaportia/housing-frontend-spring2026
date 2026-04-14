import React, { useState } from "react";

const HouseEditDailog = (props) => {

    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("http://localhost:3001/images/" + props.main_image);

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const onSubmit = async(event) => {
        event.preventDefault();
        setResult("... sending");
        const postURLLocal = "http://localhost:3001/api/houses";
        const postURLREnder = "https://spring-housing-backend.onrender.com/api/houses";

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch(postURLLocal + `/${props._id}`,
          {
            method:"PUT",
            body:formData
          }
        );

        if(response.status == 200) {
          setResult("House has been updated");
          event.target.reset();
          props.closeEditDialog();
          props.updateHouse(await response.json());
        }
        else {
          setResult("Error updating house");
        }

    };

    return (
       <form id="edit-property-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="name ">Property Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={props.name}
                required
              />
            </p>
            <p>
              <label htmlFor="size">Size:</label>
              <input
                type="number"
                id="size"
                name="size"
                defaultValue={props.size}
                required
              />
            </p>
            <p>
              <label htmlFor="bedrooms">Bedrooms:</label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                defaultValue={props.bedrooms}
                required
              />
            </p>
            <p>
              <label htmlFor="bathrooms">Bathrooms:</label>
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                defaultValue={props.bathrooms}
                required
              />
            </p>
            <p>
                <label htmlFor="features">Features:</label>
                <textarea type="text" id="reatures" name="features" defaultValue={props.features}></textarea>
            </p>

            <section>
                    <div>
                        <p id="img-prev-section">
                            {prevSrc!=""?
                            (<img id="img-prev" src={prevSrc}></img>):
                            ("")
                            }
                        </p>
                    </div>
                    <p id="img-upload">
                        <label htmlFor="img">Upload Image:</label>
                        <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                    </p>
                </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>

    );
};

export default HouseEditDailog;