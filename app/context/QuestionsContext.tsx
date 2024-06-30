"use client";
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface Question {
  options: string[];
  question: string;
  answer: string;
}

interface QuestionsContextType {
  jobTitle: string;
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  setJobTitle: React.Dispatch<React.SetStateAction<string>>;
}

const QuestionsContext = createContext<QuestionsContextType | undefined>(undefined);

export const useQuestionsContext = () => {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error('useQuestionsContext must be used within a QuestionsProvider');
  }
  return context;
};

export const QuestionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [jobTitle, setJobTitle] = useState<string>('');

  return (
    <QuestionsContext.Provider value={{ questions, setQuestions, jobTitle, setJobTitle }}>
      {children}
    </QuestionsContext.Provider>
  );
};
