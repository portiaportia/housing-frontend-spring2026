import "../css/Dialog.css";

const AddHouse = () => {
    return (
        <div id="house-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                    >
                        &times;
                    </span>
                    <div id="house-dialog-content">
                        <h3>Create New House</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddHouse;