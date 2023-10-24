import "../middle../../../scss/styleOfcompondnts/MiddleScss/About.scss";
export function About(props) {
    const { name, lastName, img, aboutUser, shapes } = props;
    return (
        <section className="about" id="about">
            <div className="infoWrapper">
                <h1>
                    I'm {name + " " + lastName}
                    <span className="h2style">Front-End </span>
                    Developer
                </h1>
                <p>{aboutUser}</p>
                {/* <button type="submit">
                    HIRE ME <img src={icon} alt="" className="arrow" />
                </button> */}
            </div>
            <div className="imageDiv">
                <img src={img} alt="something" className="app-logo" />
            </div>

            {shapes
                ? shapes.map((item, index) => {
                    return (
                        <span
                            className={`${item.shape} shape shake-animation`}
                            key={index}
                            style={{
                                top: Math.floor(Math.random() * 85 + 10) + "%",
                                left: Math.floor(Math.random() * 85 + 10) + "%",
                                animationDelay: `.${index + 5}s`,
                                borderColor:
                                    "#" +
                                    Math.floor(
                                        Math.random() * 16777215
                                    ).toString(16),
                            }}
                        ></span>
                    );
                })
                : null}
        </section>
    );
}
