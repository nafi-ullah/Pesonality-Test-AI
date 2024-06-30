'use client';
import React, { useState } from 'react';
import { useQuestionsContext } from '../context/QuestionsContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Navber from '@/components/Navbar';

const GroupPage: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState('');
  const [loading, setLoading] = useState(false);
  const { setQuestions } = useQuestionsContext();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/generate_personality_question', {
        jobTitle,
        numberOfQuestions,
      });

      setQuestions(response.data.questions);
      router.push('/ShowQuestion');
    } catch (error) {
      console.error('Error fetching questions:', error);
      setLoading(false);
    }
  };

  return (
    <div className="w-screen">
        <Navber />
        <div className='flex justify-center '>
        <div className='mt-10 w-96  '>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader border-t-4 border-b-4 border-indigo-500 w-12 h-12 rounded-full animate-spin"></div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="numberOfQuestions" className="block text-sm font-medium text-gray-700">Number of Questions</label>
            <input
              type="number"
              id="numberOfQuestions"
              value={numberOfQuestions}
              onChange={(e) => setNumberOfQuestions(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      )}
      </div>
    </div>
    </div>
  );
};

export default GroupPage;
