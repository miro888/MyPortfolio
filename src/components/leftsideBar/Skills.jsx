import '../LeftsideBar../../../scss/App.scss';

export function Skills (props) {
    const {langs} = props
    return (
        <div className="langInfo">
            <h2>Skills</h2>
            {langs.map((lang, index) => {
                return (
                    <div key={index} className="lang">
                        <div className="languageLevel">
                            <span>{lang.language}</span>{" "}
                            <span>{lang.level + "%"}</span>
                        </div>
                        <div
                            className="lines"
                            style={{
                                border: "0.5px solid #ffb400",
                                maxWidth: "100",
                                borderRadius: "25",
                            }}
                        >
                            <div
                                className="percentOfLines"
                                style={{
                                    border: "1px solid #ffb400",
                                    width: lang.level + "%",
                                }}
                            ></div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}