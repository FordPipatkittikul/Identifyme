import React from "react";
import "./ImageRecognition.scss"
import Tilt from 'react-parallax-tilt';
import "../Logo/Logo.scss";

const ImageRecognition = ({imageUrl2,list}) => {
    return( 
    <div className="center ma ">
        <div className="absolute mt2 container">
            <img id = "inputimage" alt ="" src={imageUrl2} width="400px" height="auto"/>
            <div>
                <Tilt
                className="parallax-effect-glare-scale2"      
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
                gyroscope={true}
                >
                    <div className = "br2 shadow-2 inner-element2 column">
                        <h1>Top 4 recognition</h1>
                        <h2>{list[0]}</h2>
                        <h2>{list[1]}</h2>
                        <h2>{list[2]}</h2>
                        <h2>{list[3]}</h2>
                    </div>
                </Tilt>
            </div>
            {/* <img id = "inputimage" alt ="2" src={imageUrl} width="400px" height="auto"/> */}
        </div>
    </div>
    )
}

export default ImageRecognition;