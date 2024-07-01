'use client';
import React, { useState } from 'react';
import Navber from "@/components/Navbar";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useQuestionsContext } from '../context/QuestionsContext';

const CreateQuestionier = () => {
  const [jobTitle, setJobTitleForm] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState('14');
  const [loading, setLoading] = useState(false);
  const { setQuestions, setJobTitle } = useQuestionsContext();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
        console.log(jobTitle);
        console.log(numberOfQuestions);
      const response = await axios.post('http://localhost:5000/generate_personality_question', {
        jobTitle,
        numberOfQuestions,
      });
        console.log(response.data)
      setQuestions(response.data);
      setJobTitle(jobTitle);
      setLoading(false);
      router.push('/Survey');

    } catch (error) {
      console.error('Error fetching questions:', error);
      setLoading(false);
    }
  };


  return (
    <main className="bg-[#141416] h-screen w-screen overflow-auto flex flex-col main-scrollbar-hide">
      <Navber />
      {loading ? (
        <div className="flex flex-col dashboard-bg  justify-center items-center h-screen">
          <div className="loader border-t-4 border-b-4 border-indigo-500 w-12 h-12 rounded-full animate-spin">

            
          </div>
          <div className='text-white'>Questions Generating With AI </div>
        </div>
      ) : (
      <div className="my-6 mx-4 sm:mx-6 md:mx-8 lg:mx-12 p-6 dashboard-bg rounded-xl shadow-xl flex-grow flex flex-col overflow-scroll main-scrollbar-hide">
        <div className="flex-grow mt-6 px-4 flex flex-col justify-center items-center text-white text-xl">
          <h1 className="text-left text-white text-3xl font-bold tracking-wide mb-12">
            ENTER CODE TO TEST PERSONALITY
          </h1>
          <h1>YOUR NAME</h1>
          <input
            type="text"
            
            className="w-full max-w-[600px] h-12 mt-2 p-2 bg-transparent border-b-2 focus:bg-[#ffffff15] focus:outline-0 focus:rounded-lg text-center"
          />
          <h1 className="mt-12">ENTER CODE</h1>
          <input 
          type='text'
          onChange={(e) => setJobTitleForm(e.target.value)}
          className="w-full max-w-[600px] h-12 mt-2 p-2 bg-transparent border-b-2 focus:bg-[#ffffff15] focus:outline-0 focus:rounded-lg text-center" />
          <button
            onClick={handleSubmit}
            className="text-slate-900 font-bold text-lg bg-slate-300 px-6 py-2.5 rounded-xl shadow-lg hover:bg-slate-900 hover:text-slate-200 mt-12"
          >
            START TEST
          </button>
        </div>
      </div>
       )}
    </main>
  );
};
export default CreateQuestionier;
