import Map from "../components/Map";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <main id="contact" className="main-content">
            <h2>Contact Us</h2>
            <div class="columns">
                <div class="one">
                    <ContactForm />
                </div>
                <div class="one">
                    <Map />
                </div>
            </div>
        </main>
    );
};

export default Contact;