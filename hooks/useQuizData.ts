// app/hooks/useQuizData.ts
import { useState, useEffect } from 'react';
import quizData from '@/data/quizData.json';

export interface Question {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  image?: string;
}

export interface QuizData {
  topic: string;
  questions: Question[];
}

export const useQuizData = (topic: string): QuizData | null => {
  const [data, setData] = useState<QuizData | null>(null);

  useEffect(() => {
    const quiz = quizData.find(q => q.topic === topic) || null;
    setData(quiz);
  }, [topic]);

  return data;
};
