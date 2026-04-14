import React, { useState } from "react"

const HouseDeleteDialog = (props) => {
    const[result, setResult] = useState("");
    const deleteURLLocal = "http://localhost:3001/api/houses";
        const deleteURLREnder = "https://spring-housing-backend.onrender.com/api/houses";

    const deleteHousePlan = async() => {
        setResult("Sending ...");

        const response = await fetch(deleteURLLocal + `/${props._id}`,
          {
            method:"DELETE"
          }
        );

        if(response.status === 200) {
          setResult("Succesfully deleted")
          props.closeDeleteDialog();
          props.hideHouse();
        } else {
          setResult("Unsuccessful delete");
        }
    };

    return (
        <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3> 
            <section>
              <button onClick = {props.closeDeleteDialog}>No</button>            
              <button onClick={deleteHousePlan}>Yes</button>
            </section>
            <p>{result}</p>
        </div>
    );
};

export default HouseDeleteDialog;