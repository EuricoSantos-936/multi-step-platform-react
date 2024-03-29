import React from "react";
import { Button } from "@mui/material";

const Summary = ({nextStep,prevStep, handleChange, values}) => {
 const Previous = (e) => {
   e.preventDefault();
   prevStep();
 };

 const Continue = (e) => {
   
     nextStep();

 };
    return (
      <>
        <div className="btnPlans">
          <Button onClick={Previous} variant="text">
            Go Back
          </Button>
          <Button
            onClick={() => {
              Continue();
            }}
            variant="contained"
          >
            Next Step
          </Button>
        </div>
      </>
    );

}

export default Summary