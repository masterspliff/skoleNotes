import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

// Define the types for the quiz data
interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface QuizData {
  topic: string;
  questions: Question[];
}

// Define the props type for the component
interface QuizComponentProps {
  data: QuizData;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ data }) => {
  // State for the current question index, selected option, score, and finished state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Handle when an option is pressed
  const handleOptionPress = (option: string): void => {
    setSelectedOption(option);
  };

  // Handle navigation to the next question
  const handleNextQuestion = (): void => {
    const correctAnswer = data.questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < data.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selected option for the next question
    } else {
      setIsFinished(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.topic}</Text>

      {!isFinished ? (
        <>
          <Text style={styles.question}>
            {data.questions[currentQuestionIndex].question}
          </Text>

          {data.questions[currentQuestionIndex].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedOption === option && styles.selectedOptionButton,
              ]}
              onPress={() => handleOptionPress(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          <Button
            title="Next"
            onPress={handleNextQuestion}
            disabled={!selectedOption} // Disable Next button until an option is selected
          />
        </>
      ) : (
        <Text style={styles.score}>
          Your score: {score}/{data.questions.length}
        </Text>
      )}
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
    width: '100%',
    alignItems: 'center',
  },
  selectedOptionButton: {
    backgroundColor: '#d0e0ff',
  },
  optionText: {
    fontSize: 16,
  },
  score: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default QuizComponent;
