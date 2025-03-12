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
  const [billingType, setBillingType] = useState(values.yearly || false);
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  const Continue = (e) => {
    if (!e || !e.target) {
      console.error("Invalid event object:", e);
      return;
    }
    e.preventDefault();
    if (values.name && values.email && values.phonenumber && selectedPlan) {
      nextStep();
    } else {
      console.log("Please fill in all required information.");
    }
  };
  const handleSelectPlan = (planName, event) => {
    event.preventDefault();
    setSelectedPlan(planName);
    handleChange("plan")({ target: { value: planName } });
  };
  const handleSwitchChange = () => {
    setBillingType(!billingType);
    handleChange("yearly")({ target: { value: !billingType } });
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
                } ${billingType ? "large" : ""}`}
                onClick={(e) => {
                  handleSelectPlan(plan.name, e);
                }}
              >
                <img src={plan.iconplan} alt={`${plan.name} Icon`} />
                <p className="planname">{plan.name}</p>
                <p className="billingtype">
                  {billingType
                    ? "$" + plan.yearlyPrice + "/mo"
                    : "$" + plan.monthlyPrice + "/mo"}
                </p>
                {billingType && <p className="promotion">2 months free</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="switchplan">
          <p id="monthly">Monthly</p>
          <Switch checked={billingType} onChange={handleSwitchChange} />
          <p id="yearly">Yearly</p>
        </div>
      </div>
      <div className="btnPlans">
        <Button onClick={Previous} variant="text">
          Go Back
        </Button>
        <Button
          onClick={(e) => {
            Continue(e);
            handleChange("plan", selectedPlan);
            console.log("User Info:", values);
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
export default Plans;
