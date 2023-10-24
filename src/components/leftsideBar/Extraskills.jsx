import '../../scss/styleOfcompondnts/LeftScss/ExtraSkills.scss';

export function ExtraSkills (props) {
    const { skills , img} = props;
    return (
        <div className="extraSkillsInfo">
        <h2>Extra Skills</h2>
        {skills.map((skills, index) => {
            return (
                <div key={index} className="extraSkils">
                    <>
                        <img src={img} alt="" id="square" />
                    </>
                    {skills.icon}
                </div>
            );
        })}
    </div>
    )
}