"use client";
import Navber from '@/components/Navbar';
import { useState } from 'react';
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

const Survey = () => {

  const { questions, jobTitle } = useQuestionsContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<{ description: string, title: string } | null>(null);
  // const jobTitle = "Manager for a Student organization";

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const submissionData = {
      jobTitle,
      questions: questions.map((question, questionIndex) => ({
        ...question,
        answer: answers[questionIndex] || ""
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
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#141416] h-screen w-screen overflow-auto flex flex-col main-scrollbar-hide">
        <Navber />
      <div className="grid grid-cols-8 gap-4 my-6 mx-4 sm:mx-6 md:mx-8 lg:mx-12 flex-grow">
        <div id="left-div" className="col-span-2 p-6 bg-gray-800 rounded-xl shadow-xl overflow-scroll main-scrollbar-hide">
          {questions.map((question, index) => (
            <div
              key={index}
              className={`p-4 mb-2 rounded-lg cursor-pointer text-white ${
                currentQuestionIndex === index ? 'bg-blue-900' : answers[index] !== null ? 'bg-slate-500 ai-button' : 'bg-gray-500 opacity-50'
              }`}
              onClick={() => answers[index] !== null && setCurrentQuestionIndex(index)}
              style={{ pointerEvents: answers[index] === null ? 'none' : 'auto' }}
            >
              {index + 1}. {question.question}
            </div>
          ))}
        </div>
        <div id="right-div" className="col-span-6 p-6 bg-gray-800 rounded-xl shadow-xl overflow-scroll main-scrollbar-hide">
        <div className='text-white'>{currentQuestionIndex + 1} of {questions.length}</div>
        
          <div className="mb-4 text-white text-2xl text-center mt-10">{questions[currentQuestionIndex].question}</div>
          <div className="grid grid-cols-2 gap-2 px-20">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`p-4 py-20 text-lg rounded-lg border-[1px] border-gray-200 ${
                  answers[currentQuestionIndex] === option ? 'bg-red-900 text-white' : 'ai-button text-white'
                }`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          {currentQuestionIndex === questions.length - 1 && (
            <button
              className="mt-4 p-4 bg-green-500 text-white rounded-lg"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </div>
      </div>
      {response && (
        <div className="mt-10 w-full max-w-2xl px-5 text-center">
          <h2 className="text-2xl font-bold">{response.title}</h2>
          <p className="text-lg mt-4">{response.description}</p>
        </div>
      )}
    </main>
  );
};

export default Survey;
