import { CButton, CCol, CInput, CRow, CSelect } from "@coreui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SuccessError from "../../common/SuccessError";
import { emailChk, nullChk, numberChk, validateName } from "../../common/CommonValidation";
import Confirmation from "../../common/Confirmation";
import Loading from "../../common/Loading";
import Dropzone from "react-dropzone";

const Home=()=>{
let history = useHistory();
const [loading, setLoading] = useState(false); // For Loading
const [confirmationModal, setConfirmationModal] = useState(false); 
const [content, setContent] = useState("");
const [files, setFiles] = useState([]);
const [confirmType, setConfirmType] = useState("");
const [userName, setUserName] = useState(""); 
const [phNumber, setPhNumber] = useState(""); 
const [age, setAge] = useState(""); 
const [email, setEmail] = useState(""); 
const [japaneseSkill, setJapaneseSkill] = useState([
   { id: "1", name: "N1" },
   { id: "2", name: "N2" },
   { id: "3", name: "N3" },
   { id: "4", name: "N4" },
   { id: "5", name: "N5" }
 ]); 
 const [englishSkill, setEnglishSkill] = useState([
   { id: "1", name: "Senior" },
   { id: "2", name: "Junior" },
   { id: "3", name: "Middle" },
   { id: "4", name: "Below" },
   { id: "5", name: "Beginner"}
 ]); 
 const [selectedenglishSkill, setSelectedEnglishSkill] = useState(""); 
 const [selectedJapaneseSkill, setSelectedJapaneseSkill] = useState(""); 
 const [success, setSuccess] = useState([]);
 const [error, setError] = useState([]);

const userNameChange = (e)=>{
   setUserName(e.target.value);
}  
const phNumberChange = (e)=>{
   setPhNumber(e.target.value);
}
const ageChange = (e)=>{
   setAge(e.target.value);
}
const emailChange = (e)=>{
   setEmail(e.target.value);
}
const japaneseSkillChange = (e)=>{
   setSelectedJapaneseSkill(e.target.value);
   console.log("You choose",selectedJapaneseSkill)
}
const englishSkillChange = (e)=>{
   setSelectedEnglishSkill(e.target.value);
   console.log("You choose",selectedJapaneseSkill)
}
const resetClick = ()=>{
  setConfirmationModal(true);
  setContent("Are you sure want Reset the input box?"); 
  setConfirmType("edit");
}

const editOK =()=>{
  setUserName("");
  setPhNumber("");
  setAge("");
  setEmail("");
  setSelectedEnglishSkill("");
  setSelectedJapaneseSkill("");
  setConfirmationModal(false);
}

const deleteClick = ()=>{
  setConfirmationModal(true);
  setContent("Are you sure want Delete?"); 
  setConfirmType("delete");
}

const deleteOK =()=>{
  alert("Delete")
}

const resignClick =() =>{
  setConfirmationModal(true);
  setContent("Are you sure want reign?"); 
  setConfirmType("resign");
}

const resignOK =()=>{
  alert("resign")
}


const loadingClick =() =>{
  setLoading(true);
}

const updateClick = ()=>{
  setConfirmationModal(true);
  setContent("Are you sure want Update?"); 
  setConfirmType("update");
}

const updateOK =()=>{
  alert("Update")
}

const saveClick = ()=>{
   let errMsg= [];

   if (!nullChk(userName)) {
      errMsg.push("Please fill Username");
    }else  if (!validateName(userName)) {
      errMsg.push("Please fill Character Only in Username");
    }
    if (!nullChk(age)) {
      errMsg.push("Please fill Age");
    }else  if (!numberChk(age)) {
      errMsg.push("Please fill number only in Age");
    } else if (parseInt(age) > 100){
      errMsg.push("Please fill possible Age");
    }

    if (!nullChk(email)) {
      errMsg.push("Please fill Eamil");
    }else  if (!emailChk(email)) {
      errMsg.push("Please fill Email Format");
    }

    if (!nullChk(phNumber)) {
      errMsg.push("Please fill Phone Number");
    }else  if (!numberChk(phNumber)) {
      errMsg.push("Please fill number only in Phone Number");
    }

    if (!nullChk(selectedJapaneseSkill)) {
      errMsg.push("Please select Japanese Skill");
    }
    if (!nullChk(selectedenglishSkill)) {
      errMsg.push("Please select English Skill");
    }

    if (errMsg.length <= 0) {
   history.push(`/menus/Result`)
   //setSuccess(["Successfully Saved"])
   localStorage.setItem("USERNAME",userName);
   localStorage.setItem("AGE",age);
   localStorage.setItem("PHNUM",phNumber);
   localStorage.setItem("JAPSKILL",selectedJapaneseSkill);
   localStorage.setItem("ENGSKILL",selectedenglishSkill);
   localStorage.setItem("EMAIL",email);
    }else{
      setError(errMsg);
    }
}

const handleDrop = (acceptedFiles) => {
  setFiles(acceptedFiles);
};

const removeFile = () => {
  setFiles([]);
}


    return(
        <>
        <h1>This is Home.</h1>
        <br></br>
        <br></br>

        <SuccessError success={success} error={error} />
       
        <CRow> 
      
        <CCol lg="6">
            <CRow>
               <CCol lg="1"></CCol> 
               <CCol lg="3">UserName</CCol> 
               <CCol lg="8"><CInput type ="text" value={userName} 
               onChange={userNameChange}
               /></CCol> 
            </CRow>
            <br></br>
            <CRow>
               <CCol lg="1"></CCol> 
               <CCol lg="3">Phone Number</CCol> 
               <CCol lg="8"><CInput type ="text" value={phNumber} 
               onChange={phNumberChange}/></CCol> 
            </CRow>
            <br></br>
            <CRow>
            <CCol lg="1"></CCol> 
            <CCol lg="3">Japanese Skill</CCol>
           <CCol lg="8">
            <CSelect
            value={selectedJapaneseSkill}
            onChange={japaneseSkillChange}
            >
            <option value="">-- Select --</option>
              { japaneseSkill.map((data,index)=>{
               return(
                  <option key={index}
                    value={data.name}
                  >{data.name}</option>
               )
              }
              )
              }


            </CSelect>
           </CCol>
            </CRow>


            </CCol>

            <CCol lg="6">
            
            <CRow>
               <CCol lg="1"></CCol> 
               <CCol lg="3">Age</CCol> 
               <CCol lg="8"><CInput type ="text" value={age}
                onChange={ageChange}
               /></CCol> 
            </CRow>
            <br></br>
            <CRow>
               <CCol lg="1"></CCol> 
               <CCol lg="3">Email</CCol> 
               <CCol lg="8"><CInput 
               type ="text" value={email}
               onChange={emailChange}/></CCol> 
            </CRow>
            <br></br>
            <CRow>
            <CCol lg="1"></CCol> 
            <CCol lg="3">English Skill</CCol>
           <CCol lg="8">
            <CSelect
            value={selectedenglishSkill}
            onChange={englishSkillChange}
            >
            <option value="">-- Select --</option>
              { englishSkill.map((data,index)=>{
               return(
                  <option key={index}
                    value={data.name}
                  >{data.name}</option>
               )
              }
              )
              }


            </CSelect>
           </CCol>
            </CRow>
            
            </CCol>
        </CRow>
        <br></br>
        <CRow style={{justifyContent:"center"}}>
        <CButton className="btn btn-success" onClick={saveClick}>Save</CButton>&nbsp;&nbsp;
         <CButton className="btn btn-danger" onClick={resetClick}>Reset</CButton>&nbsp;&nbsp;
         <CButton className="btn btn-warning" onClick={deleteClick}>Delete</CButton>&nbsp;&nbsp;
         <CButton className="btn btn-facebook" onClick={updateClick}>Update</CButton>&nbsp;&nbsp;
         <CButton className="btn btn-info" onClick={resignClick}>Resign</CButton>&nbsp;&nbsp;
         <CButton className="btn btn-light" onClick={loadingClick}>Loading</CButton>
        </CRow>


        <Confirmation 
         show={confirmationModal}
         content={content}
         type={confirmType}
         deleteOK={deleteOK}
         updateOK={updateOK}
         resignOK={resignOK}
         editOK={editOK}
         cancel={() => setConfirmationModal(false)}
         cancelButton="No"
         okButton="Yes"
        />

        <Loading start={loading} />  

        <CRow>
        <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <CInput type="text" readOnly 
                placeholder="Click here to attach file"/>
              </div>
            )}
          </Dropzone>

          <div style={{ display: "flex", marginTop: "20px" }}>
            {files.map((a) => (
              <>
                <li style={{ marginTop: "-14px", marginLeft: "5px"}} 
                key={a.name}>{a.name}</li>  
                  <label  style={{ marginLeft: "20px" 
                  ,color:"red", marginTop: "-14px",
                  cursor:"pointer"}} 
                  onClick={removeFile}>X</label>
              </>
            ))}
          </div>
        </CRow>
        </>
       
    )
}

export default Home;