import "../css/House.css";

const House = (props) => {
    return (
        <section className="house">
            <h3>{props.title}</h3>
            <img src={`https://demo-backend-psr7.onrender.com/images/${props.main_image}`} />
        </section>
    )
};

export default House;