import React from "react";

/*
If isSignedIn === true Navigation component going to be only Signout option.
Else Navigation component going to be Sign In & Register option.
*/
const Navigation = ({onRouteChange,isSignedIn}) => {
    if (isSignedIn){
        return(
            <nav style={{display: "flex", justifyContent: "flex-end"}}>
                <p onClick={() => onRouteChange("signout")} className="f3 link dim black underline pa3 pointer">Sign Out</p>
            </nav>
        )
    } else {
        return(
            <nav style={{display: "flex", justifyContent: "flex-end"}}>
                <p onClick={() => onRouteChange("signin")} className="f3 link dim black underline pa3 pointer">Sign In</p>
                <p onClick={() => onRouteChange("register")} className="f3 link dim black underline pa3 pointer">Register</p>
            </nav>
        );
    }
};

export default Navigation;