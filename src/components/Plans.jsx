import PropTypes from "prop-types";
import { Button, Switch } from "@mui/material";
import { useState } from "react";
import "../components/styles.css";
import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";

const plansData = [
  {
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    iconplan: ArcadeIcon,
  },
  {
    name: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    iconplan: AdvancedIcon,
  },
  {
    name: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    iconplan: ProIcon,
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
  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
  };
  return (
    <>
      <div className="planscontainer">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="boxcontainer">
          {plansData.map((plan) => (
            <div className="gridplan" key={plan.name}>
              <div
                className={`boxplan ${
                  selectedPlan === plan.name ? "selected" : ""
                }`}
                onClick={() => {
                  handleSelectPlan(plan.name);
                }}
              >
                <img src={plan.iconplan} alt={`${plan.name} Icon`} />
                <p className="planname">{plan.name}</p>
                <p className="billingtype">
                  {billingType === "monthly"
                    ? "$" + plan.monthlyPrice + "/mo"
                    : "$" + plan.yearlyPrice + "/mo"}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="switchplan">
          <p id="monthly">Monthly</p>
          <Switch
            checked={billingType == "yearly"}
            onChange={() =>
              setBillingType(billingType === "monthly" ? "yearly" : "monthly")
            }
          />
          <p id="yearly">Yearly</p>
        </div>
      </div>
      <div className="btnPlans">
        <Button onClick={Previous} variant="text">
          Go Back
        </Button>
        <Button
          onClick={() => {
            handleChange("plan")(selectedPlan);
            Continue();
            console.log("User Info:", values);
            console.log("Selected Plan:", selectedPlan);
          }}
          variant="contained"
        >
          Next Step
        </Button>
      </div>
    </>
  );
};
Plans.propTypes = {
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phonenumber: PropTypes.string.isRequired,
    plan: PropTypes.string,
    yearly: PropTypes.string,
    addon: PropTypes.string,
  }).isRequired,
};
export default Plans;
