import { useContext } from "react";
import { PollContext } from "../context/PollContext";
import "./Poll.css";

const Poll = () => {
  const { poll, vote } = useContext(PollContext);

  return (
    <div className="poll-container">
      <h2>🗳 {poll.question}</h2>
      <ul className="poll-options">
        {poll.options.map((option) => (
          <li key={option.id} className="poll-option">
            <button onClick={() => vote(option.id)}>
              {option.name} ({option.votes} votes)
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Poll;
