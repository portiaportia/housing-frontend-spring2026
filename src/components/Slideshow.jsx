import "../css/Slideshow.css";
import CountryHouse from "../images/slideshow/country-house.jpg";
const Slideshow = () => {
    return (
        <section className="slideshow">
            <img src={CountryHouse} />
            <a id="next-arrow" className="arrow" href="#">&rsaquo;</a>
            <a id="prev-arrow" className="arrow" href="#">&lsaquo;</a>
        </section>
    );
};

export default Slideshow;