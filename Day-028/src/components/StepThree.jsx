import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import PropTypes from "prop-types";

const StepThree = ({ prevStep }) => {
  const { formData } = useContext(FormContext);

  const handleSubmit = () => {
    alert("Form submitted successfully!");
  };

  return (
    <div className="step-container">
      <h2>Step 3: Review & Submit</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Password:</strong> {formData.password}</p>
      <p><strong>Address:</strong> {formData.address}</p>

      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StepThree;

StepThree.propTypes = {
  prevStep: PropTypes.node.isRequired,
};
