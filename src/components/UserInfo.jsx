import React, {useState} from "react";
import { TextField, Button} from "@mui/material";


const UserInfo = ({nextStep, handleChange, values}) => {
    const [showError, setShowError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    const validateNumber = (phonenumber) => {
        const numberRegex = /^\d{1,20}$/;
        return numberRegex.test(phonenumber);
    };

      const Continue = (e) => {
        e.preventDefault();
        setShowError(false); // Reset the error state
        setEmailError(false); // Reset the email error
        document.querySelector(".required").style.display = "none"; // Hide the required message for phone number
        document.querySelector(".requiredemail").style.display = "none"; // Hide the required message for email
      
        if (!validateNumber(values.phonenumber)) {
          // Phone number is empty, show required field message
          setShowError(true);
          document.querySelector(".required").style.display = "block";
        }
      
        if (!validateEmail(values.email)) {
          // Email is invalid
          setEmailError(true);
          document.querySelector(".requiredemail").style.display = "block";
        }
      
        if (validateNumber(values.phonenumber) && validateEmail(values.email)) {
          // Both phone number and email are valid, proceed
          nextStep();
        }
      
      };
    return(
        <>
            <div className="usercontainer">
                <h1>Personal Info</h1>
                <p>Please provide your name, email address, and phone number.</p>
                <label>Name</label>
                <TextField
                    placeholder="e.g. Stephen King"
                    onChange={handleChange('name')}
                    defaultValue={values.name}
                    margin="dense"
                    sx={{marginBottom:3}}
                />
                <div className="labels">
                <label>Email</label><label className="requiredemail" style={{ display: "none", color:"red"}}>Invalid email address</label>
                </div>
                <TextField
                    placeholder="e.g. stephenking@lorem.com"
                    onChange={handleChange("email")}
                    defaultValue={values.email}
                    margin="dense"
                    sx={{ marginBottom: 3, borderColor:"black" }}
                    error={emailError}
                />
                <div className="labels">
                    <label>Phonenumber</label><label className="required" style={{ display: "none", color:"red"}}>This field has required</label>
                </div>
                <TextField
                    className="phonenumberfield"
                    placeholder="e.g. +1 234 567 890"
                    inputProps={{ inputMode: 'numeric' }}
                    onChange={handleChange('phonenumber')}
                    defaultValue={values.phonenumber}
                    margin="dense"
                    error = {showError}
                    sx={{marginBottom:3, borderColor:"black"}}
                />
                </div>
            <div className="buttonFirst">
                <Button variant="contained" onClick={ Continue }>Next Step</Button>
            </div>
        </>
    )

}

export default UserInfo