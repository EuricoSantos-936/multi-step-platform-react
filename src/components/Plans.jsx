import { Box, Button, Container, Grid, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import '../components/styles.css'


const plansData = [
  {
    name: "Arcade",
    monthlyPrice: "$9/mo",
    yearlyPrice: "$90/year",
    iconplan: "../assets/images/icon-arcade.svg"
  },
  {
    name: "Advanced",
    monthlyPrice: "$12/mo",
    yearlyPrice: "$120/year",
  },
  {
    name: "Pro",
    monthlyPrice: "$15/mo",
    yearlyPrice: "$150/year",
  },
];

const Plans = ({ prevStep, nextStep, handleChange, values }) => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [billingType, setBillingType] = useState("monthly");

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <Container className="planscontainer">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <Grid container spacing={2}>
          {plansData.map((plan) => (
            <Grid item xs={4} key={plan.name}>
              <Box className="boxplan">
                <Typography className="planname">{plan.name}</Typography>
                <Typography className="billingtype">
                  {billingType === "monthly"
                    ? plan.monthlyPrice
                    : plan.yearlyPrice}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container className="switchplan">
          <p id='monthly'>Monthly</p>
          <Switch 
            
            checked= {billingType == "yearly"}
            onChange={() =>
              setBillingType(billingType === "monthly" ? "yearly" : "monthly")
            }
          />
          <p id='yearly'>Yearly</p>
        </Grid>
            </Container>
            <div className="btnPlans">
                <Button onClick={Previous} variant="text" >Go Back</Button>
                <Button onClick={Continue} variant="contained">Next Step</Button>
            </div>
        </>
    )

}

export default Plans