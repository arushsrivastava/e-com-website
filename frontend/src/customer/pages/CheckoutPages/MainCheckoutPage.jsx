import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import CartPage from "./CartPage";
import AddressesPage from "./AdressesPage";
import SummaryPage from "./SummaryPage";

const steps = [
  "Finalize Products",
  "Add Shipping Address",
  "Payment Details",
  "Order Summary",
];

export default function MainCheckoutPage() {
  const [activeStep, setActiveStep] = React.useState(0);

  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const stepParam = querySearch.get("step");

  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // FINAL ACTION
      // placeOrder() OR navigate("/order-success")
      return;
    }
    setActiveStep((prev) => {
      const next = prev + 1;
      navigate(`?step=${next + 1}`, { replace: true });
      return next;
    });
  };

  const handleBack = () => {
    setActiveStep((prev) => {
      const back = prev - 1;
      navigate(`?step=${back + 1}`, { replace: true });
      return back;
    });
  };

  useEffect(() => {
    if (!isNaN(stepParam) && stepParam >= 1 && stepParam <= steps.length) {
      setActiveStep(stepParam - 1); // convert to 0-based
    }
  }, [stepParam]);

  return (
    <div className="p-6">
      <div>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
               
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>

                <Box sx={{ flex: "1 1 auto" }} />

                {activeStep === steps.length - 1 && <button onClick={() => navigate("/account/orders")}
                className="text-blue-600 hover:underline hover:text-blue-800 ">
                Go to order history
                </button>}
              </Box>
            </>
          )}
          {activeStep === 0 && <CartPage handleNext={handleNext} />}
          {activeStep === 1 && <AddressesPage handleNext={handleNext} />}
          {activeStep === 3 && <SummaryPage  />}
        </Box>
      </div>
    </div>
  );
}
