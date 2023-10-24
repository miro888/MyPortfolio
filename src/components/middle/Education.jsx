import "../middle../../../scss/styleOfcompondnts/MiddleScss/Education.scss";

export function Education(props) {
  const { study } = props;
  return (
    <section className="education" id="Education">
      <div className="heading">
        <h2>Education</h2>
        <p>{study.additional}</p>
      </div>
      <div className="container">
        {study.items.map((lang, index) => {
          return (
            <div key={index} className="cards">
              <div className="left-card">
                <h3>{lang.title}</h3>
                <p>{lang.learner}</p>
                <span>{lang.graduation}</span>
              </div>
              <div className="right-card">
                <h3>{lang.certificate}</h3>
                <p>{lang.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
