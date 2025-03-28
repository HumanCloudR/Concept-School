import React, { useState } from "react";

const baseQuestion = {
  text: "When light from some sources enters the earth’s atmosphere, it gets scattered. Which among the following is a reason behind scattering?",
  options: [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
  ],
  difficulty: "Easy",
};

const questions = Array.from({ length: 2 }, (_, index) => ({
  id: index + 1,
  text: baseQuestion.text,
  options: [...baseQuestion.options],
  difficulty: baseQuestion.difficulty,
}));

const QuestionBank = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleOptionChange = (questionId, optionIndex) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: optionIndex });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Fundamentals of Physics</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">5 Questions</h2>
        </div>
        {questions.map((question) => (
          <div key={question.id} className="p-4 border rounded-md mb-4 bg-white shadow">
            <h2 className="text-md font-semibold mb-2">{question.id}. {question.text}</h2>
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
            <span className="px-3 py-1 mt-2 text-sm font-medium text-blue-700 bg-blue-200 rounded-full inline-block">
              {question.difficulty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionBank;
