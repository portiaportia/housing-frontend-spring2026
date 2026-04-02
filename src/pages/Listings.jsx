import {useState, useEffect} from "react";
import axios from "axios";
import House from "../components/House";

const Listings = () => {
    const [houses, setHouses] = useState([]);

    //after the page has loaded
    useEffect(()=>{
        const loadHouses = async() => {
            const response = await axios.get("https://demo-backend-psr7.onrender.com/api/houses");
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