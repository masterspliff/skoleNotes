import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button, ProgressBar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as Device from 'expo-device'; // Import expo-device
import { QuizData } from '@/hooks/useQuizData';

/**
 * QuizComponent
 *
 * This component renders a quiz interface based on the provided quiz data. It displays questions,
 * options, handles user selections, and provides feedback. A progress bar is conditionally rendered
 * when the user is on iOS or Android devices, using the expo-device module for platform detection.
 *
 * Props:
 * - data: The quiz data containing questions, options, and answers.
 * - onQuizEnd: Callback function invoked when the quiz ends, providing the user's score.
 *
 * Dependencies:
 * - React and React Native components for UI rendering.
 * - expo-device for detecting the device platform.
 * - react-native-paper for UI components like ProgressBar and Button.
 * - @expo/vector-icons for icons.
 */

interface QuizComponentProps {
  data: QuizData;
  onQuizEnd: (score: number) => void;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ data, onQuizEnd }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const currentQuestion = data.questions[currentQuestionIndex];
  const totalQuestions = data.questions.length;
  const progress = (currentQuestionIndex + 1) / totalQuestions;
  

  // Check if the device is iOS or Android
  const isIOSorAndroid = Device.osName === 'iOS' || Device.osName === 'Android';

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
      {/* Conditionally render ProgressBar for iOS or Android */}
      {isIOSorAndroid && (
        <ProgressBar progress={progress} color="#6200ee" style={styles.progressBar} />
      )}

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.question}>
          {currentQuestionIndex + 1}. {currentQuestion.question}
        </Text>

        {currentQuestion.image && (
          <Image
            source={{ uri: currentQuestion.image }}
            style={styles.questionImage}
            resizeMode="contain"
          />
        )}

        {currentQuestion.options.map((option, index) => {
          let optionStyle = styles.optionCard;

          // Apply styles based on selection and feedback
          if (showFeedback) {
            if (option === currentQuestion.answer) {
              optionStyle = styles.correctOptionCard;
            } else if (option === selectedOption && selectedOption !== currentQuestion.answer) {
              optionStyle = styles.incorrectOptionCard;
            }
          } else if (selectedOption === option) {
            optionStyle = styles.selectedOptionCard;
          }

          return (
            <TouchableOpacity
              key={index}
              style={optionStyle}
              onPress={() => handleOptionSelect(option)}
              disabled={showFeedback}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          );
        })}

        {showFeedback && (
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
                : `Incorrect! The correct answer is "${currentQuestion.answer}".\n${currentQuestion.explanation}`}
            </Text>
          </>
        )}

        {/* Add bottom padding to avoid content being hidden behind the button */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Fixed button at the bottom */}
      <View style={styles.fixedButtonContainer}>
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
          <Button mode="contained" onPress={handleContinue} style={styles.nextButton}>
            {currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'See Results'}
          </Button>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  progressBar: {
    marginVertical: 10,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  question: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  questionImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  optionCard: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  selectedOptionCard: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  correctOptionCard: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#c8e6c9',
    borderRadius: 5,
  },
  incorrectOptionCard: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#ffcdd2',
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  nextButton: {
    width: '100%',
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
