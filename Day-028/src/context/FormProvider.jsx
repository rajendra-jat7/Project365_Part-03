import { useState } from "react";
import PropTypes from "prop-types";
import { FormContext } from "./FormContext";

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// ✅ Add PropTypes validation
FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
