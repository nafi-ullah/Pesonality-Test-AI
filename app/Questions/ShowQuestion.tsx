'use client';
import React from 'react';
import { useQuestionsContext } from '../context/QuestionsContext';

const ShowQuestionPage: React.FC = () => {
  const { questions } = useQuestionsContext();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Generated Questions</h1>
      {questions?.length > 0 ? (
        questions?.map((question, index) => (
          <div key={index} className="mb-4 p-4 border rounded-md">
            <p className="font-semibold">{question.question}</p>
            <ul className="list-disc pl-5">
              {question.options.map((option, idx) => (
                <li key={idx}>{option}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No questions generated yet.</p>
      )}
    </div>
  );
};

export default ShowQuestionPage;
