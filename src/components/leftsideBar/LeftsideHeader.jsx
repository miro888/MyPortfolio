import "../../scss/styleOfcompondnts/LeftScss/LeftsideHeader.scss";
export function LeftsideHeader(props) {
    const { img, name, lastName, freelanceStatus } = props;
    return (
        <>
            <div className="sidebarHead">
                <div className="photoWrapper">
                    <img
                        src={img}
                        alt={name + lastName}
                        className="personImage"
                    />
                    <span
                        className={`statusIndicator ${
                            freelanceStatus.toLowerCase() === "available"
                                ? "available"
                                : "busy"
                        }`}
                    ></span>
                </div>
                <p className="fullname">{name + " " + lastName}</p>
                <p>Front-End developer</p>
            </div>
        </>
    );
}
