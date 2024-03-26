import React from "react";
import Tilt from 'react-parallax-tilt';
import "./Logo.scss"
import brain from "./brain.png"


const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt
                className="parallax-effect-glare-scale"      
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
                gyroscope={true}
            >
                <div className = "br2 shadow-2 inner-element">
                    <img alt ="logo" src={brain}/>
                </div>
            </Tilt>
        </div>
    );
};

export default Logo