import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, ProgressBar, RadioButton, Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo

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
  onQuizEnd: (score: number) => void; // Callback when the quiz ends
}

const QuizComponent: React.FC<QuizComponentProps> = ({ data, onQuizEnd }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const currentQuestion = data.questions[currentQuestionIndex];
  const totalQuestions = data.questions.length;
  const progress = (currentQuestionIndex + 1) / totalQuestions;

  // Handle when an option is selected
  const handleOptionSelect = (option: string): void => {
    setSelectedOption(option);
  };

  // Handle submission of the answer
  const handleSubmitAnswer = (): void => {
    const correctAnswer = currentQuestion.answer;

    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }

    setShowFeedback(true);
  };

  // Proceed to the next question or finish the quiz
  const handleContinue = (): void => {
    setShowFeedback(false);
    setSelectedOption('');

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onQuizEnd(score);
    }
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} color="#6200ee" style={styles.progressBar} />
      <Text style={styles.question}>
        {currentQuestionIndex + 1}. {currentQuestion.question}
      </Text>

      <RadioButton.Group onValueChange={handleOptionSelect} value={selectedOption}>
        {currentQuestion.options.map((option, index) => {
          let optionStyle = styles.optionCard;

          // Apply styles based on whether feedback is shown and if the option is correct or selected
          if (showFeedback) {
            if (option === currentQuestion.answer) {
              // Correct answer
              optionStyle = styles.correctOptionCard;
            } else if (option === selectedOption && selectedOption !== currentQuestion.answer) {
              // Selected wrong answer
              optionStyle = styles.incorrectOptionCard;
            }
          } else if (selectedOption === option) {
            optionStyle = styles.selectedOptionCard;
          }

          return (
            <Card key={index} style={optionStyle}>
              <RadioButton.Item
                label={option}
                value={option}
                disabled={showFeedback} // Disable options after feedback is shown
              />
            </Card>
          );
        })}
      </RadioButton.Group>

      {!showFeedback ? (
        <Button
          mode="contained"
          onPress={handleSubmitAnswer}
          disabled={!selectedOption}
          style={styles.nextButton}
        >
          Submit Answer
        </Button>
      ) : (
        <>
          <Ionicons
            name={selectedOption === currentQuestion.answer ? 'checkmark-circle' : 'close-circle'}
            size={64}
            color={selectedOption === currentQuestion.answer ? 'green' : 'red'}
            style={styles.feedbackIcon}
          />
          <Text style={styles.feedbackText}>
            {selectedOption === currentQuestion.answer
              ? 'Correct!'
              : `Incorrect! The correct answer is "${currentQuestion.answer}".`}
          </Text>
          <Button mode="contained" onPress={handleContinue} style={styles.nextButton}>
            {currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'See Results'}
          </Button>
        </>
      )}
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  progressBar: {
    marginVertical: 10,
  },
  question: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  optionCard: {
    marginVertical: 5,
  },
  selectedOptionCard: {
    marginVertical: 5,
    backgroundColor: '#e0e0e0',
  },
  correctOptionCard: {
    marginVertical: 5,
    backgroundColor: '#c8e6c9', // Light green background for correct answer
  },
  incorrectOptionCard: {
    marginVertical: 5,
    backgroundColor: '#ffcdd2', // Light red background for incorrect answer
  },
  nextButton: {
    marginTop: 20,
  },
  feedbackIcon: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  feedbackText: {
    fontSize: 18,
    marginVertical: 15,
    textAlign: 'center',
  },
});

export default QuizComponent;