import {useState, useEffect} from "react";
import axios from "axios";
import House from "../components/House";

const Listings = () => {
    const [houses, setHouses] = useState([]);

    //after the page has loaded
    useEffect(()=>{
        const loadHouses = async() => {
            const response = await axios.get("http://localhost:3001/api/houses");
            setHouses(response.data);
        };

        loadHouses();
    },[]);

    return (
        <main id="listings" className="main-content">
            <h2>Listings</h2>
            <div id="houses" className="columns">
                {houses.map((house)=>(
                    <House 
                        key={house._id}
                        _id={house._id}
                        title={house.name}
                        main_image={house.main_image} />
                ))}
            </div>
        </main>
    );
};

export default Listings;