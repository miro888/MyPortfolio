import "../middle../../../scss/styleOfcompondnts/RightScss/sideBarRight.scss";

export function Icons(props) {
    const { icon_1, icon_2, icon_3, icon_4 ,icon_7, toggle} = props;
    return (
        <div className="icons">
            <DarkmodeButton  icon_7={icon_7} toggle={toggle}/>
            <div className="iconWrapper">
                <a href="#about" data-tooltip="About Me">
                    <img src={icon_1} alt=" about" className="activeIcons" />
                </a>
            </div>
            <div className="iconWrapper">
                <a href="#MyServices" data-tooltip="My Services">
                    <img src={icon_2} alt="services" className="activeIcons" />
                </a>
            </div>
            <div className="iconWrapper">
                <a href="#Education" data-tooltip="Education">
                    <img src={icon_3} alt="education" className="activeIcons" />
                </a>
            </div>
            <div className="iconWrapper">
                <a href="#Projects" data-tooltip="Projects">
                    <img src={icon_4} alt="projects" className="activeIcons" />
                </a>
            </div>
         
        </div>
    );
    

}

function DarkmodeButton({icon_7, toggle}) {
    return (
        <div className="modeButton">
            <img className="darkModeButtonColor"
                src={icon_7}
                alt="Dark Mode"
                onClick={toggle}
            />
    </div>
    )
}


