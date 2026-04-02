import "../css/House.css";

const House = (props) => {
    return (
        <section className="house">
            <h3>{props.title}</h3>
            <img src={`http://localhost:3001/images/${props.main_image}`} />
        </section>
    )
};

export default House;