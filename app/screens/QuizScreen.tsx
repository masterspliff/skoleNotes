import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import QuizComponent from '@/components/QuizComponent';
import { Button } from 'react-native-paper';
import { useQuizData } from '@/hooks/useQuizData';

const QuizScreen = () => {
  const { topic } = useLocalSearchParams<{ topic: string }>();
  const router = useRouter();
  const quizData = useQuizData(topic);
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<number>(0);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back(); // Gå tilbage, hvis der er en tidligere skærm
    } else {
      router.replace('/moduler'); // Fallback: Naviger til en standard rute (f.eks. forsiden)
    }
  };


  if (!quizData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Quiz data not found for '{topic}'.</Text>
      </View>
    );
  }

  const handleQuizEnd = (score: number) => {
    setFinalScore(score);
    setIsQuizFinished(true);
  };

  return (
    <View style={styles.container}>
      {!isQuizFinished ? (
        <>
          <Text style={styles.title}>Quiz: {quizData.topic}</Text>
          <QuizComponent data={quizData} onQuizEnd={handleQuizEnd} />
        </>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Your Score: {finalScore}/{quizData.questions.length}
          </Text>
          <Button
            mode="contained"
            onPress={handleBack}
            style={styles.homeButton}
          >
            Go back
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              router.replace(`/screens/QuizScreen?topic=${encodeURIComponent(topic)}`); // Try again
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
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});

export default QuizScreen;
