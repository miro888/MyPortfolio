import "../../scss/styleOfcompondnts/LeftScss/Socialicons.scss";
export function Socialicons(props) {
    const { icon } = props;
    return (
      
          <div className="socIcons" >
        {icon.map((item, index) => (
            <div className="iconDiv" key={index}>
              <a href={item.url} target="_blank" rel="noreferrer">
                <img src={item.icon} alt={`Icon ${item.name}`} />
              </a>
            </div>
        ))}
        </div>
      
    );
  }
