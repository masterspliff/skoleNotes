import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router'; // Use useLocalSearchParams for route-specific params
import QuizComponent from '@/components/QuizComponent'; // Assuming you have a QuizComponent

const QuizScreen = () => {
  const { topic } = useLocalSearchParams(); // Get the dynamic topic from the current route
  const router = useRouter(); // Allows for programmatic navigation

  // Mock quiz data for now - customize this for each topic
  const quizData = {
    topic,
    questions: [
      {
        question: `What is a key concept in ${topic}?`,
        options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        answer: 'Answer 1',
      },
      {
        question: `Another question about ${topic}?`,
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        answer: 'Option 2',
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz for {topic}</Text>
      {/* Render the QuizComponent here */}
      <QuizComponent data={quizData} />
      {/* Button to go back to the previous screen */}
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default QuizScreen;
