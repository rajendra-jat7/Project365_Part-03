import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import { FormProvider } from "./context/FormProvider";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <FormProvider>
      <div className="app-container">
        <h1>📝 Multi-Step Form</h1>
        {step === 1 && <StepOne nextStep={nextStep} />}
        {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <StepThree prevStep={prevStep} />}
      </div>
    </FormProvider>
  );
}

export default App;
