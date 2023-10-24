import "../middle../../../scss/styleOfcompondnts/MiddleScss/Myservices.scss";

export function Myservices(props) {
  const { myservice, todoservices } = props;

  return (
    <section className="myServices" id="MyServices">
      <div className="heading">
        <h2>My Services</h2>
        <p>{myservice}</p>
      </div>
      <div className="cardsWrapper">
        <div className="cards">
          {todoservices.map((service, index) => (
            <div key={index} className="serviceCard">
              <h3 className="cardTitle">{service.title}</h3>
              <p className="cardParagraph">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
