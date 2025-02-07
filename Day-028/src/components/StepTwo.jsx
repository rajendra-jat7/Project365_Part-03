import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import PropTypes from "prop-types";

const StepTwo = ({ nextStep, prevStep }) => {
  const { formData, setFormData } = useContext(FormContext);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.password || formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.address) tempErrors.address = "Address is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) nextStep();
  };

  return (
    <div className="step-container">
      <h2>Step 2: Security & Address</h2>

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      {errors.address && <p className="error">{errors.address}</p>}

      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepTwo;

StepTwo.propTypes = {
  nextStep: PropTypes.node.isRequired,
  prevStep: PropTypes.node.isRequired,
};
