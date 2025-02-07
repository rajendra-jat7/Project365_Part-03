import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import PropTypes from "prop-types";

const StepOne = ({ nextStep }) => {
  const { formData, setFormData } = useContext(FormContext);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) nextStep();
  };

  return (
    <div className="step-container">
      <h2>Step 1: Personal Info</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepOne;

StepOne.propTypes = {
  nextStep: PropTypes.node.isRequired,
};