import "../css/Map.css";

const Map = () => {
    return (
        <div>
             <p>123 Anywhere St.</p>
            <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13231.27051227814!2d-81.05829834938052!3d33.99721783034897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb371f811713%3A0x4583988908aa7158!2sEdVenture!5e0!3m2!1sen!2sus!4v1774358689950!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Map;