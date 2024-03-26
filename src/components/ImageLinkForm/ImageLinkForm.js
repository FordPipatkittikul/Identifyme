import React from "react";
import "./ImageLinkForm.css"

const ImageLinkForm = ({onInputChange,onFaceDetectionButtonSubmit}) => {
    return(
        <div>
            <p className="f3">
                {"This Magic Brain will detect faces in your pictures. Give it a try"}
            </p>
            <div className="center">
                <div className="form center pa4 br-3 shadow-5">
                    
                    <input 
                    className="f4 pa2 w-70 center"
                    type="text"
                    onChange={onInputChange}
                    />

                    <button 
                    className="w-30 grow f5 link ph3 pv2 dib white bg-light-purple"
                    onClick={onFaceDetectionButtonSubmit}
                    >
                        Face Detection
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;