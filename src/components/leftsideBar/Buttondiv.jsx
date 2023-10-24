import '../../scss/styleOfcompondnts/LeftScss/Buttondiv.scss'

export  function Buttondiv (props) {
const {img, cvUrl} = props;
    return (
        <div className="buttonDiv">
        <a href={cvUrl} 
        target="_blank" 
        rel="noreferrer" 
        id="downloadCv"
        >
            DOWNLOAD CV
            <img
                src={img}
                alt="download cv button"
                className="downloadIcon"
            />
        </a>
    </div>
    )
}