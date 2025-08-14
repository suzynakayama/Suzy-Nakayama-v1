import React from "react";
import "./Intro.css";

const Intro = ({ src, cannotUseWebp }) => {

    return (<div className="intro" id="intro" style={ { backgroundImage: `url(${src})` } }>
        <div className="intro__container">
            <div className="intro__titles">
                <h1 className="intro__title--first">Suzy</h1>
                <h1 className="intro__title--last">Nakayama</h1>
                <h2 className="intro__subtitle">
                    &lt; Full-Stack Developer &gt;
                    </h2>
            </div>
            { cannotUseWebp ?
                (
                    <img src={process.env.PUBLIC_URL + '/images/suzy.jpg'} alt="suzy" className="intro__img" />
                ) : (
                    <img src={process.env.PUBLIC_URL + '/images/suzy.webp'} alt="suzy" className="intro__img" />
                )
            }
        </div>
    </div>
    );
}

export default Intro;
