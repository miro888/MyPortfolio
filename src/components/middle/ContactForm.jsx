import "../../scss/styleOfcompondnts/MiddleScss/ContactForm.scss";
import "../../images/Microphone.svg";


export function ContactForm(props) {
    const { info } = props;
    return (
        <section className="containerForm" id="contactInfo">
            <div className="formHeading">
                <h2>Leave us your info</h2>
                <h2>Contact information</h2>
            </div>
            <div className="mainContainer">
                <form className="cardLeft">
                    <label htmlFor="name">Your Full Name ( Required)</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Your Email (Required)</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="subject">Subject (Required)</label>
                    <input
                        type="subject"
                        id="subject"
                        name="subject"
                        required
                    />
                    <label htmlFor="massage">Your Massage</label>
                    <textarea type="massage" id="massage">
                        
                    </textarea>

                    <button type="submit">SEND MESSAGE</button>
                </form>

                <div className="mainCard">
                    {info.map((section, index) => (
                        <div className="cardRight" key={index}>
                            <img src={section.iconPath} alt="" />
                            {section.data.map((item, itemIndex) => (
                                <p key={itemIndex}>
                                    {item.label}: <span>{item.value}</span>
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
