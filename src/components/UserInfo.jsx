import React from "react";
import { TextField, Button } from "@mui/material";
import { borderRadius } from "@mui/system";

const UserInfo = ({nextStep, handleChange, values}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
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
                <label>Phonenumber</label>
                <TextField
                placeholder="e.g. +1 234 567 890"
                onChange={handleChange('phonenumber')}
                defaultValue={values.phonenumber}
                margin="dense"
                sx={{marginBottom:3}}
                />
                </div>
            <div className="buttonFirst">
                <Button variant="contained" onClick={ Continue }>Next</Button>
            </div>
        </>
    )

}

export default UserInfo