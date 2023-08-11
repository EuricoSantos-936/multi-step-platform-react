import "../components/styles.css"
import React,{Component}from "react"
import UserInfo from "./UserInfo"
import Plans from "./Plans"
import { Container, Grid, Stepper, Step, StepLabel } from "@mui/material"

export default class Home extends Component {
  state = {
    step: 1,
    name: '',
    email: '', 
    phonenumber: '',
    plan: '',
    yearly: '',
    addon: '',
    
  }

        // go back to previous step
        prevStep = () => {
            const { step } = this.state;
            this.setState({ step: step - 1 });
        }

        // proceed to the next step
        nextStep = () => {
            const { step } = this.state;
            this.setState({ step: step + 1 });
        }

        // handle field change
        handleChange = input => e => {
            this.setState({ [input]: e.target.value });
        }
    render(){
        const { step } = this.state;
        const { email, name, phonenumber, plan, yearly, addon } = this.state;
        const values = { email, name, phonenumber, plan, yearly, addon }

        return(
          <>
          <Container sx={{
            width:900, 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            backgroundColor:"white", 
            borderRadius:"10px",
            paddingTop:"10px",
            paddingBottom:"10px"}}>
        <Grid container>
          <Grid className="sidebar"item >
            
          <Stepper  className="stepper" connector="" activeStep={step - 1} orientation="vertical" sx={{
          '& .MuiStepLabel-label.Mui-active': {
            color: '#bfe2fd', // text (ACTIVE)
          },
          '& .MuiStepLabel-label.Mui-completed': {
            color: '#bfe2fd', // Text (COMPLETED)
          },
          '& .MuiStepLabel-labelContainer': {
            color: 'white', // OptionalText
          },
          '& .MuiStepLabel-label': {
            color: '#bfe2fd', // text {DEFAULT}
          },
          '& .MuiStepIcon-root.Mui-active': {
            color: '#bfe2fd', // icon color (ACTIVE)

          },
          '& .MuiStepIcon-root.Mui-completed': {
            color: 'transparent',
            border: "2px solid white", // icon color (COMPLETED)
          },
          '& .MuiStepIcon-root': {
            color: 'transparent',
            border: "2px solid white",
            borderRadius: "50px" // icon color (default)
          },



        }}>
                <Step >
                  <StepLabel optional="YOUR INFO">Step 1</StepLabel>
                </Step>
                <Step>
                  <StepLabel optional="SELECT PLAN">Step 2</StepLabel>
                </Step>
                <Step>
                  <StepLabel optional="ADDONS">Step 3</StepLabel>
                </Step>
                <Step>
                  <StepLabel optional="SUMMARY">Step 4</StepLabel>
                </Step>
              </Stepper>
          </Grid>
          <Grid item md={6} sx={{marginLeft:7}}>
            {step === 1 && (
              <UserInfo 
                nextStep={this.nextStep} 
                handleChange={this.handleChange}
                values={values}
              />
            )}
            {step === 2 && (
              <Plans 
                prevStep={this.prevStep}
                nextStep={this.nextStep} 
                handleChange={this.handleChange}
                values={values}
              />
            )}
            {step === 3 && (
              <Addons 
                prevStep={this.prevStep}
                nextStep={this.nextStep} 
                handleChange={this.handleChange}
                values={values}
              />
            )}
            {step === 4 && (
              <Summary 
                prevStep={this.prevStep}
                nextStep={this.nextStep} 
                handleChange={this.handleChange}
                values={values}
              />
            )}
            {step === 5 && <Final />}
          </Grid>
      </Grid>
      </Container>
        <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Eurico Santos</a>.
      </div>
      </>
        )
         {/* <!-- Sidebar start -->

<!-- Step 2 start -->

Select your plan
You have the option of monthly or yearly billing.

Arcade
$9/mo

Advanced
$12/mo

Pro
$15/mo

Monthly
Yearly

Go Back
Next Step

<!-- Step 2 end -->

<!-- Step 3 start -->

Pick add-ons
Add-ons help enhance your gaming experience.

Online service
Access to multiplayer games
+$1/mo

Larger storage
Extra 1TB of cloud save
+$2/mo

Customizable Profile
Custom theme on your profile
+$2/mo

Go Back
Next Step

<!-- Step 3 end -->

<!-- Step 4 start -->

Finishing up
Double-check everything looks OK before confirming.

<!-- Dynamically add subscription and add-on selections here -->

Total (per month/year)

Go Back
Confirm

<!-- Step 4 end -->

<!-- Step 5 start -->

Thank you!

Thanks for confirming your subscription! We hope you have fun 
using our platform. If you ever need support, please feel free 
to email us at support@loremgaming.com.

<!-- Step 5 end -->*/}
}
}