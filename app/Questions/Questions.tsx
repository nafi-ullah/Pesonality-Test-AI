"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { useQuestionsContext } from '../context/QuestionsContext';
interface Question {
  isImage: boolean;
  options: string[];
  question: string;
}

const myquestions: Question[] = [
  {
    isImage: false,
    options: [
      "Address the issue immediately and find a fair solution.",
      "Take time to understand both sides before making a decision.",
      "Avoid the conflict and hope it resolves itself.",
      "Delegate the issue to someone else."
    ],
    question: "How do you handle conflicts within the team?"
  },
  {
    isImage: false,
    options: [
      "Create a detailed schedule and stick to it strictly.",
      "Tackle the most urgent tasks first and adjust as needed.",
      "Focus on the tasks that you enjoy the most.",
      "Delegate tasks to other team members to manage workload."
    ],
    question: "How do you prioritize tasks when you have multiple deadlines?"
  },
  {
    isImage: false,
    options: [
      "Offer regular praise and recognition.",
      "Set clear goals and rewards.",
      "Lead by example and stay positive.",
      "Provide constructive feedback regularly."
    ],
    question: "How do you motivate others in the organization?"
  },
  {
    isImage: false,
    options: [
      "Have a private conversation to understand the issue.",
      "Provide additional resources and support.",
      "Give them some time to improve on their own.",
      "Escalate the issue to higher management."
    ],
    question: "How do you handle a situation when a team member is underperforming?"
  },
  {
    isImage: false,
    options: [
      "Gather all information and analyze before deciding.",
      "Trust my intuition and experience.",
      "Consult with team members and stakeholders.",
      "Delegate the decision to a more experienced person."
    ],
    question: "What's your approach to decision-making?"
  },
  {
    isImage: false,
    options: [
      "Accept it openly and use it to improve.",
      "Analyze it critically and take what's relevant.",
      "Focus more on positive feedback and dismiss negative.",
      "Take it personally and get discouraged."
    ],
    question: "How do you handle feedback, both positive and negative?"
  },
  {
    isImage: true,
    options: [
      "Schedule regular meetings and updates.",
      "Use messaging apps and collaboration tools.",
      "Make sure everyone is aware of their roles and responsibilities.",
      "Allow communication to happen naturally without too many rules."
    ],
    question: "How do you ensure effective communication within the team?"
  },
  {
    isImage: false,
    options: [
      "Stay calm and come up with a new plan.",
      "Consult with the team to find the best solution.",
      "Stick to the original plan and hope for the best.",
      "Panic and look for immediate solutions regardless of long-term effects."
    ],
    question: "How do you deal with unexpected challenges or changes in plans?"
  }
];

const Questions: React.FC = () => {
    const { questions, jobTitle } = useQuestionsContext();
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string }>({});
  const [loading, setLoading]= useState<boolean>(false);
  const [response, setResponse] = useState<{ description: string, title: string } | null>(null);

  const handleOptionClick = (questionIndex: number, option: string) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionIndex]: option,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const submissionData = {
        jobTitle,
        questions: questions.map((question, questionIndex) => ({
          ...question,
          answer: selectedOptions[questionIndex] || ""
        }))
      };
    console.log(submissionData);
    try {
        const res = await fetch("http://localhost:5000/get_personality", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        });
  
        const data = await res.json();
        setResponse(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching personality data:", error);
      }
    
  }

  return (
    <div id="text div" className="w-full flex flex-col items-center justify-center mt-10">
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="mb-10 w-full max-w-2xl px-5">
          <div className="text-xl font-bold text-black mb-3 text-center">
            {question.question}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {question.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className={`p-3 rounded-lg cursor-pointer border-2 border-gray-200 ${selectedOptions[questionIndex] === option ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
                onClick={() => handleOptionClick(questionIndex, option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="h-10"> </div>
          <hr />
        </div>
      ))}
      <div className="w-full flex flex-col items-center justify-center ">
        <button 
          onClick={handleSubmit}
          className="text-white bg-gray-700 rounded-lg w-1/3 h-10 flex items-center justify-center"
        >
          {!loading ? 'Submit' :  <div className="loader border-t-4 border-b-4 border-indigo-500 w-3 h-3 rounded-full animate-spin">            
</div>}
        </button>
        {response && (
        <div className="mt-10 w-full max-w-2xl px-5 text-center">
          <h2 className="text-2xl font-bold">{response.title}</h2>
          <p className="text-lg mt-4">{response.description}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default Questions;
