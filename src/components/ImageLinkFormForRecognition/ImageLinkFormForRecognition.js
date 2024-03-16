import React from "react";
import "./ImageLinkFormForRecognition.css"

const ImageLinkFormForRecognition = ({onInputChange2,onImageRecognitionButtonSubmit}) => {
    return(
        <div>
            <div className="pt4 center">
                <div className="form1 center pa4 br-3 shadow-5">
                    
                    <input 
                    className="f4 pa2 w-70 center"
                    type="text"
                    onChange={onInputChange2}
                    />

                    <button 
                    className="w-30 grow f5 link ph3 pv2 dib white bg-light-red"
                    onClick={onImageRecognitionButtonSubmit}
                    >
                        Image Recognition
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ImageLinkFormForRecognition;