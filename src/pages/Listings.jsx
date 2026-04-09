import {useState, useEffect} from "react";
import axios from "axios";
import House from "../components/House";
import AddHouse from "../components/AddHouse";

const Listings = () => {
    const [houses, setHouses] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        setShowAddDialog(false);
    };
    
    const addHouseToList = (house) => {
        //adds the new house to the list of houses
        setHouses((houses)=>[...houses,house]);
    };

    //after the page has loaded
    useEffect(()=>{
        const loadHouses = async() => {
            const localLink = "http://localhost:3001/api/houses";
            const renderLink = "https://spring-housing-backend.onrender.com/api/houses";
            const response = await axios.get(localLink);
            setHouses(response.data);   
        };

        loadHouses();
    },[]);

    return (
        <main id="listings" className="main-content">
            <h2>Listings</h2>
            <button id="btn-add-house" onClick={openAddDialog}>+</button>
            {showAddDialog?(<AddHouse 
                                closeAddDialog={closeAddDialog}
                                addHouseToList={addHouseToList}
                                    />):("")}

            <div id="houses" className="columns">
                {houses.map((house)=>(
                    <House 
                            key={house._id}
                            _id={house._id}
                            name={house.name} 
                            size={house.size}
                            bedrooms={house.bedrooms}
                            bathrooms={house.bathrooms}
                            main_image={house.main_image}
                            features={house.features} />
                ))}
            </div>
        </main>
    );
};

export default Listings;