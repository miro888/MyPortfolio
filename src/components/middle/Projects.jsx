import "../middle../../../scss/styleOfcompondnts/MiddleScss/Repositoryes.scss";

export function Projects(props) {
  const { cards } = props;
  return (
    <section className="projects" id="Projects">
      <div className="heading">
        <h2>My Projects</h2>
        <div className="container projects">
          {cards.map((card, index) => {
            return (
              <div key={index} className="projectCard ">
                <h3>{card.name}</h3>
                <a href={card.url} target="_blank" rel="noreferrer">
                  <img src={card.imgCard} alt={`Img ${card.name}`} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
