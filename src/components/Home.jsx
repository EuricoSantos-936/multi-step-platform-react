import "../components/styles.css"
import {Component}from "react"
import UserInfo from "./UserInfo"
import Plans from "./Plans"
import Addons from "./Addons"
import Summary from "./Summary"
import Final from "./Final"
import { Container, Grid, Stepper, Step, StepLabel} from "@mui/material"

export default class Home extends Component {
  state = {
    step: 1,
    name: '',
    email: '', 
    phonenumber: '',
    plan: '',
    yearly: false,
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
              const value = e.target.value;
              this.setState({ [input]: value });
        }
    render(){
        const { step } = this.state;
        const { email, name, phonenumber, plan, yearly, addon } = this.state;
        const values = { email, name, phonenumber, plan, yearly, addon }



        return (
          <>
            <Container
              sx={{
                width: 900,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: "10px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <Grid container>
                <Grid className="sidebar" item>
                  <Stepper
                    className="stepper"
                    activeStep={step - 1}
                    orientation="vertical"
                    sx={{ marginTop: "30px" }}
                   
                  >
                    <Step>
                      <StepLabel
                        optional="YOUR INFO"
                        sx={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        Step 1
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel
                        optional="SELECT PLAN"
                        sx={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        Step 2
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel
                        optional="ADD-ONS"
                        sx={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        Step 3
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel
                        optional="SUMMARY"
                        sx={{ marginTop: "10px", marginBottom: "10px" }}
                      >
                        Step 4
                      </StepLabel>
                    </Step>
                  </Stepper>
                </Grid>
                <Grid item md={6} sx={{ marginLeft: 7 }}>
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
            <div className="attribution">
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                rel="noreferrer"
              >
                Frontend Mentor
              </a>
              . Coded by <a href="#">Eurico Santos</a>.
            </div>
          </>
        );
}
}