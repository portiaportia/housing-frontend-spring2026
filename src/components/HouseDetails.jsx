import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const HouseDetails = () => {
    const { id } = useParams();
    const [house, setHouse] = useState(null);

    useEffect(() => {
        const loadHouse = async() => {
            const response = await axios.get(`https://spring-housing-backend.onrender.com/api/houses/${id}`);
            setHouse(response.data);
            console.log(response.data);
        };

        loadHouse();
        
  }, [id]);

    return (
        <main  className="main-content">
            {house?(
                <>
                <h2>{house.name}</h2>
                <section className="columns">
                    <div>
                        <img id="details-previews" src={`https://spring-housing-backend.onrender.com/images/${house.main_image}`} alt="house" />
                    </div>
                    <div className="house-details">
                        <p><strong>Bedrooms: </strong>{house.bedrooms}</p>
                        <p><strong>Bathrooms: </strong>{house.bathrooms}</p>
                        <strong>Features</strong>
                        <ul>
                            {house.features.map((feature)=>(<li>{feature}</li>))}
                        </ul>
                    </div>
                </section>
                </>
            ):(<p>Loading</p>)}
        </main>
    );
}

export default HouseDetails;