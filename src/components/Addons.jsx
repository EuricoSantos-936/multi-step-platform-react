import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import "../components/styles.css";

const Addons = ({ nextStep, prevStep, handleChange, values }) => {
  const addonsData = [
    {
      service: "Online service",
      description: "Access to multiplayer games",
      priceMonth: 1,
      priceYear: 10,
    },
    {
      service: "Larger storage",
      description: "Extra 1TB of cloud save",
      priceMonth: 2,
      priceYear: 20,
    },
    {
      service: "Customizable Profile",
      description: "Custom theme on your profile",
      priceMonth: 2,
      priceYear: 20,
    },
  ];

  const [checkedStatus, setCheckedStatus] = useState(
    Array(addonsData.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const newCheckedStatus = [...checkedStatus];
    newCheckedStatus[index] = !newCheckedStatus[index];
    setCheckedStatus(newCheckedStatus);
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const Continue = (e) => {
    e.preventDefault();
    const selectedAddons = addonsData
      .filter((_, index) => checkedStatus[index])
      .map((addon) => ({
        service: addon.service,
        description: addon.description,
        price: values.yearly ? addon.priceYear : addon.priceMonth,
      }));

    if (values.name && values.email && values.phonenumber && values.plan) {
      handleChange({ target: { name: "addons", value: selectedAddons } });
      console.log("Selected Addons:", selectedAddons);
      nextStep();
    } else {
      console.log("Please fill in all required information.");
    }
    console.log(values);
  };

  return (
    <>
      <div className="addoncontainer">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className="addonbox">
          {addonsData.map((addon, index) => (
            <div
              key={index}
              className={`addonframe ${checkedStatus[index] ? "checked" : ""}`}
            >
              <div className="addon-content">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={checkedStatus[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span className="checkbox-custom"></span>
                </div>
                <div className="addon">
                  <p className="service">{addon.service}</p>
                  <p>{addon.description}</p>
                </div>
                <p className="price">
                  +$
                  {values.yearly
                    ? addon.priceYear + "/yr"
                    : addon.priceMonth + "/mo"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="btnPlans">
        <Button onClick={Previous} variant="text">
          Go Back
        </Button>
        <Button onClick={Continue} variant="contained">
          Next Step
        </Button>
      </div>
    </>
  );
};

Addons.propTypes = {
  prevStep: PropTypes.func.isRequired,
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

export default Addons;
