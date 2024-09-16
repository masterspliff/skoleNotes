import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import QuizComponent from '@/components/QuizComponent';
import { Button } from 'react-native-paper';

const IntroductionQuiz = () => {
  const { topic } = useLocalSearchParams<{ topic: string }>();
  const router = useRouter();
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<number>(0);

  // Mock quiz data - customize this for each topic
  const quizData = {
    topic,
    questions: [
      {
        question: `What is a key concept in ${topic}?`,
        options: ['Encapsulation', 'Polymorphism', 'Inheritance', 'All of the above'],
        answer: 'All of the above',
      },
      {
        question: `Which keyword is used to define a class in ${topic}?`,
        options: ['function', 'class', 'def', 'module'],
        answer: 'class',
      },
      // Add more questions as needed
    ],
  };

  const handleQuizEnd = (score: number) => {
    setFinalScore(score);
    setIsQuizFinished(true);
  };

  return (
    <View style={styles.container}>
      {!isQuizFinished ? (
        <>
          <Text style={styles.title}>Quiz: {topic}</Text>
          <QuizComponent data={quizData} onQuizEnd={handleQuizEnd} />
        </>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your Score: {finalScore}/{quizData.questions.length}</Text>
          <Button
            mode="contained"
            onPress={() => {
              router.replace('/moduler/App. udvikling'); // Navigate back to home
            }}
            style={styles.homeButton}
          >
            Go back
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              router.replace('/quiz/introduktion'); // Navigate back to home
            }}
            style={styles.homeButton}
          >
            Try again
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 26,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  homeButton: {
    paddingHorizontal: 20,
    marginTop: 10,
    },
});

export default IntroductionQuiz;