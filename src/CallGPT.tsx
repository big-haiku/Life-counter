import React, { useState } from "react";
import axios from "axios";

const CallGPT = () => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [response, setResponse] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = async () => {
    if (!query.trim()) {
      setResponse("Please enter a query.");
      return; // Prevent submitting if query is empty or whitespace
    }

    try {
      // Log the request details for debugging
      console.log({
        endpoint: "https://api.openai.com/v1/chat/completions",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          "Content-Type": "application/json",
        },
        data: {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: query }],
        },
      });

      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: query }],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      setResponse(res.data.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("Error fetching response");
    }
  };

  return (
    <>
      <span
        className="material-symbols-outlined reset-button icon"
        onClick={() => setIsInputOpen(true)}
      >
        robot_2
      </span>
      {isInputOpen && (
        <div
          className="gpt-popup-overlay"
          onClick={() => setIsInputOpen(false)} // Close the popup when clicked outside
        >
          <div className="gpt-popup" onClick={(e) => e.stopPropagation()}>
            <textarea
              className="rounded text-light"
              placeholder="Type your query here..."
              onChange={(e) => setQuery(e.target.value)} // Handle textarea input
            />
            <button
              className="rounded text-light"
              onClick={() => {
                handleSubmit(); // Call handleSubmit
                setIsInputOpen(false);
              }}
            >
              Submit
            </button>
            {response && <div className="response-popup">{response}</div>}{" "}
            {/* Display response */}
          </div>
        </div>
      )}
    </>
  );
};

export default CallGPT;
