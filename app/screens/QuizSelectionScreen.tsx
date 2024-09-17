// app/screens/QuizSelectionScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import quizData from '@/data/quizData.json';

const QuizSelectionScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Quiz</Text>
      {quizData.map((quiz, index) => (
        <Button
          key={index}
          mode="contained"
          onPress={() => router.push(`/quiz?topic=${encodeURIComponent(quiz.topic)}`)}
          style={styles.button}
        >
          {quiz.topic}
        </Button>
      ))}
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
  button: {
    marginVertical: 10,
  },
});

export default QuizSelectionScreen;
