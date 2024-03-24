import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const LogoutReact=()=>{
    let history = useHistory();
    useEffect(() => {
        localStorage.clear();
        history.push('/loginReact');
    })
    return(
        <></>
    )
}

export default LogoutReact;