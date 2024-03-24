import { CButton, CCard, CCardBody, CCardHeader, CCol, CInput, CRow, CImg } from "@coreui/react";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import { useHistory } from "react-router-dom";
import SuccessError from "../../common/SuccessError";

const LoginReact=()=>{

    useEffect(() => {
        $(window).resize(function(){
            setZoomSize(Math.round(window.devicePixelRatio * 100));
        });
    }, []);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [zoomSize, setZoomSize] = useState(
        Math.round(window.devicePixelRatio * 100)
    ); // browser zoom level
    const [success, setSuccess] = useState([]);
    const [error, setError] = useState([]);
    let history = useHistory();

    const userNameChange = (e) => {
        setUserName(e.target.value);
    }
    const passwordChange = (e) => {
        setPassword(e.target.value);
    }
    const LoginClick = () => {
        if (userName == "admin" && password == "12345") {
            history.push('/menus/Home');
            localStorage.setItem('LoginProcess', "true");
        }else{
            setError (["Username or Password is Wrong"])
        }
    }
    const keyDownHandle = (e) => {
        if (e.key == "Enter") {
            LoginClick();
            e.preventDefault();
        }
    };

    return(
        <>
        {zoomSize < 150 && (           
            <div className="min-vh-100 flex-row align-items-center login-bg">
                <CRow>
                    <CCol lg="6">

                    </CCol>
                    <CCol lg="6">
                        <CRow>
                            <CCol lg="2">

                            </CCol>
                            <CCol lg="8">

                                <CCard style={{ marginTop:"200px"}}>
                                    <CCardHeader className="Ccard-design-start">
                                        <h3 style={{marginTop:"15px"}}>Login Form</h3>
                                    </CCardHeader>
                                    <SuccessError success={success} error={error} />
                                    <CCardBody className="Ccard-design-end">
                                        <CRow>
                                            <CCol lg="4">
                                                <h5 style={{marginTop:"6px"}}>UserName</h5>

                                            </CCol>
                                            <CCol lg="8">
                                                <CInput className="input-field-blue-background"
                                                 value={userName} onChange={userNameChange}
                                                 onKeyDown={keyDownHandle}/>
                                            </CCol>
                                        </CRow><br/>
                                        <CRow>
                                            <CCol lg="4">
                                                <h5 style={{marginTop:"6px"}}>Password</h5>
                                                
                                            </CCol>
                                            <CCol lg="8">
                                                <CInput className="input-field-blue-background"
                                                 value={password} onChange={passwordChange}
                                                 onKeyDown={keyDownHandle}/>
                                            </CCol>
                                        </CRow><br/>
                                        <CRow style={{marginRight:"3px", justifyContent:"end"}}>
                                            <CButton className="btn create-btn"
                                            onClick={LoginClick}>
                                                Login
                                            </CButton>
                                        </CRow>
                                    </CCardBody>
                                </CCard>
                            </CCol>
                            <CCol lg="2">

                            </CCol>
                        </CRow>
                    </CCol>
                </CRow>
            </div>
        )}
        {zoomSize > 140 &&(
            <div className="login-bg-mobile">
                <br/><br/>
                <h2 style={{ textAlign:"center", fontWeight:"800", color:"white"}}>Login Form</h2>
                <CRow style={{ justifyContent: "center" }}>
            <CImg
            src={"/image/logo.png"}
            width={200}>

            </CImg>
        </CRow>
        <SuccessError success={success} error={error} />

        <CRow style={{ paddingLeft: "100px", paddingRight: "100px"}}>
            <CCol lg="3"></CCol>
            <CCol lg="6">
                <label 
                style={{
                    fontWeight: "800",
                    color: "#0b370",
                    fontSize: "15px",
                    marginTop: "20px",
                }}
                >
                    UserName
                </label>
                <br></br>
                <CInput className="input-field-blue-background"
                 value={userName} onChange={userNameChange}
                 onKeyDown={keyDownHandle}/>
                 <br></br>
                </CCol>
            </CRow>

            <CRow style={{ paddingLeft: "100px", paddingRight: "100px"}}>
            <CCol lg="3"></CCol>
            <CCol lg="6">
                <label 
                style={{
                    fontWeight: "800",
                    color: "#0b370",
                    fontSize: "15px",
                    marginTop: "20px",
                }}
                >
                    Password
                </label>
                <br></br>
                <CInput className="input-field-blue-background"
                 value={userName} onChange={userNameChange}
                 onKeyDown={keyDownHandle}/>
                 <br></br>
            </CCol>
            </CRow>

            <CRow
            style={{
                paddingLeft: "100px",
                paddingRight: "100px",
                justifyContent: "center",
            }}
            >
                <CButton className="btn create-btn">
                    <p style={{ marginTop: "3px" }}>
                        Login
                    </p>

                </CButton>

            </CRow>
            <CRow style={{ height: "100px" }}></CRow>

            </div>
        )}
        </>
       
    )
}


export default LoginReact;