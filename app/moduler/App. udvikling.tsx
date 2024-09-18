// Import necessary modules
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Button, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Link, useRouter } from 'expo-router';

import Introduktion from './lektioner/app-udvikling/Introduktion'; // Adjust this path based on the actual location of Introduktion.tsx

export default function AppUdviklingScreen() {


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">App Udvikling</ThemedText>
      </ThemedView>

      <ThemedText>Emner</ThemedText>

      <Collapsible title="Introduktion">
        <Introduktion />
        <Link push
          href={{
            pathname: '/screens/QuizScreen',
            params: { topic: 'Introduktion' },
          }}
        >
          <Button title="Take Quiz" />
        </Link>
      </Collapsible>

      <Collapsible title="Kontrolstrukturer">
        <Link
          href={{
            pathname: '/screens/QuizScreen',
            params: { topic: 'Kontrolstrukturer' },
          }}
        >
          <Button title="Quiz" />
        </Link>
      </Collapsible>

      <Collapsible title="Arrays og Metoder">
        <Link
          href={{
            pathname: '/screens/QuizScreen',
            params: { topic: 'Arrays og Metoder' },
          }}
        >
          <Button title="Quiz" />
        </Link>
      </Collapsible>

      <Collapsible title="Intro til OOP I ">
        <Link
          href={{
            pathname: '/screens/QuizScreen',
            params: { topic: 'Intro til OOP I' },
          }}
        >
          <Button title="Quiz" />
        </Link>
      </Collapsible>

      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  lessonsContainer: {
    marginVertical: 20,
  },
  lessonItem: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  lessonText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
