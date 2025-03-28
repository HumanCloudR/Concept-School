import React, { useState } from "react";

const baseQuestion = {
  text: "The de-Broglie wavelength of a neutron in thermal equilibrium with heavy water at a temperature T (kelvin) and mass m, is:",
  options: [
    "h / mKT",
    "h / √mKT",
    "2h / √mKT",
    "2h / mKT",
  ],
};

const questions = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  text: baseQuestion.text,
  options: [...baseQuestion.options],
}));

const Papers = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleOptionChange = (questionId, optionIndex) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: optionIndex });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Fundamentals of Physics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {questions.map((question) => (
          <div key={question.id} className="p-4 bg-white shadow rounded-md">
            <h2 className="text-lg font-semibold mb-2">Question {question.id}</h2>
            <p className="mb-4">{question.text}</p>
            <div>
              {question.options.map((option, index) => (
                <label key={index} className="block mb-2">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={index}
                    checked={selectedAnswers[question.id] === index}
                    onChange={() => handleOptionChange(question.id, index)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Papers;
