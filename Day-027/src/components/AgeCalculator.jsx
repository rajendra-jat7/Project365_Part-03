import { useState } from "react";
import "./AgeCalculator.css";

const AgeCalculator = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="age-calculator">
      <h2>🎂 Age Calculator</h2>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>

      {age && (
        <p className="result">
          You are <strong>{age.years}</strong> years,{" "}
          <strong>{age.months}</strong> months, and{" "}
          <strong>{age.days}</strong> days old. 🎉
        </p>
      )}
    </div>
  );
};

export default AgeCalculator;
