import "../../scss/styleOfcompondnts/LeftScss/Personalinfo.scss";

export function Personalinfo(props) {
    const { age, jobType, location, work } = props;
    return (
        <div className="personInfo">
            <div className="personInfoDiv">
                <span className="ageInfo">Age :</span>
                <span className="ageStyle">{age}</span>
            </div>

            <div className="personInfoDiv">
                <span className="freelanceInfo">Freelance :</span>
                <span
                    className={`freelanceStyle ${
                        jobType.toLowerCase() === "available"
                            ? "available"
                            : "busy"
                    }`}
                >
                    {jobType}
                </span>
            </div>
            <div className="personInfoDiv">
                <span className="addressInfo">Address :</span>
                <span className="addressStyle">{location}</span>
            </div>
            <div className="personInfoDiv">
                <span className="jobInfo">Job :</span>
                <span className="jobStyle">{work}</span>
            </div>
        </div>
    );
}
