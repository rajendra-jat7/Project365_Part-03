import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { PollContext } from "./PollContext";

// Default poll data
const defaultPoll = {
  question: "Which is the best frontend framework?",
  options: [
    { id: 1, name: "React", votes: 0 },
    { id: 2, name: "Vue", votes: 0 },
    { id: 3, name: "Angular", votes: 0 },
    { id: 4, name: "Svelte", votes: 0 },
  ],
};

export const PollProvider = ({ children }) => {
  const [poll, setPoll] = useState(() => {
    const savedPoll = localStorage.getItem("pollData");
    return savedPoll ? JSON.parse(savedPoll) : defaultPoll;
  });

  useEffect(() => {
    localStorage.setItem("pollData", JSON.stringify(poll));
  }, [poll]);

  const vote = (optionId) => {
    setPoll((prevPoll) => ({
      ...prevPoll,
      options: prevPoll.options.map((option) =>
        option.id === optionId ? { ...option, votes: option.votes + 1 } : option
      ),
    }));
  };

  return (
    <PollContext.Provider value={{ poll, vote }}>
      {children}
    </PollContext.Provider>
  );
};

// ✅ Add PropTypes validation
PollProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PollProvider;
