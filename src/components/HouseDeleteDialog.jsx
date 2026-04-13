import React, { useState } from "react"

const HouseDeleteDialog = (props) => {

    const deleteHousePlan = () => {

    };

    return (
        <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3> 
            <section>
              <button onClick = {props.closeDeleteDialog}>No</button>            
              <button onClick={deleteHousePlan}>Yes</button>
            </section>
            
        </div>
    );
};

export default HouseDeleteDialog;