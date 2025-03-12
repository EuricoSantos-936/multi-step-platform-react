import { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@mui/material";

const UserInfo = ({ nextStep, handleChange, values }) => {
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
    setShowError(false);
    setEmailError(false);
    document.querySelector(".required").style.display = "none";
    document.querySelector(".requiredemail").style.display = "none";

    if (!validateNumber(values.phonenumber)) {
      setShowError(true);
      document.querySelector(".required").style.display = "block";
    }

    if (!validateEmail(values.email)) {
      setEmailError(true);
      document.querySelector(".requiredemail").style.display = "block";
    }

    if (validateNumber(values.phonenumber) && validateEmail(values.email)) {
      nextStep();
    }
  };
  return (
    <>
      <div className="usercontainer">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <label>Name</label>
        <TextField
          placeholder="e.g. Stephen King"
          onChange={handleChange("name")}
          defaultValue={values.name}
          margin="dense"
          sx={{ marginBottom: 3 }}
        />
        <div className="labels">
          <label>Email</label>
          <label
            className="requiredemail"
            style={{ display: "none", color: "red" }}
          >
            Invalid email address
          </label>
        </div>
        <TextField
          placeholder="e.g. stephenking@lorem.com"
          onChange={handleChange("email")}
          defaultValue={values.email}
          margin="dense"
          sx={{ marginBottom: 3 }}
          error={emailError}
        />
        <div className="labels">
          <label>Phonenumber</label>
          <label className="required" style={{ display: "none", color: "red" }}>
            This field has required
          </label>
        </div>
        <TextField
          className="phonenumberfield"
          placeholder="e.g. +1 234 567 890"
          inputProps={{ inputMode: "numeric" }}
          onChange={handleChange("phonenumber")}
          defaultValue={values.phonenumber}
          margin="dense"
          error={showError}
          sx={{ marginBottom: 3 }}
        />
      </div>
      <div className="buttonFirst">
        <Button variant="contained" onClick={Continue}>
          Next Step
        </Button>
      </div>
    </>
  );
};
UserInfo.propTypes = {
  nextStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phonenumber: PropTypes.string.isRequired,
    plan: PropTypes.string,
    yearly: PropTypes.bool,
    addons: PropTypes.arrayOf(
      PropTypes.shape({
        service: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        priceMonth: PropTypes.number.isRequired,
        priceYear: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};

export default UserInfo;
