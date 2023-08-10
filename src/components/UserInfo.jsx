import React, {useState} from "react";
import { TextField, Button, Hidden } from "@mui/material";


const UserInfo = ({nextStep, handleChange, values}) => {
    const [showError, setShowError] = useState(false);
    const Continue = e => {
        e.preventDefault();
        if (values.phonenumber !== ""){
            setShowError(false);
            nextStep();
        }else {
            setShowError(true);
            document.querySelector(".required").style.display = "block";
        }

      }
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
                <label>Email</label>
                <TextField
                placeholder="e.g. stephenking@lorem.com"
                onChange={handleChange('email')}
                defaultValue={values.email}
                margin="dense"
                sx={{marginBottom:3}}
                />
                <div className="phonenumberlabel">
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
                <Button variant="contained" onClick={ Continue }>Next</Button>
            </div>
        </>
    )

}

export default UserInfo