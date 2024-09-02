import "../styles/card.css";
import Button from "./Button";

function Contact() {
    return (
        <section id="contact">
            <div className="contact-card-container">
                <h2>Contact</h2>
                <form onSubmit={() => {
                    // todo
                }}>
                    <label htmlFor="name">Name</label>
                    <input className="box" type="text" id="name" name="name" required />
                    <label htmlFor="email">Email</label>
                    <input className="box" type="email" id="email" name="email" required />
                    <label htmlFor="message">Message</label>
                    <textarea className="box text-box" id="message" name="message" required></textarea>
                    <div className="submit-button">
                        <Button type="submit" title="Send" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact