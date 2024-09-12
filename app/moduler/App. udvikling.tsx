import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Button } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Link } from 'expo-router'; // Import Link for navigation

export default function AppUdviklingScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">App Udvikling</ThemedText>
      </ThemedView>
      
      <ThemedText>Her kan du finde de forskellige emner</ThemedText>

      <Collapsible title="Introduktion">
        {/* Link to the quiz screen with the topic as a URL parameter */}
        <Link href="/quiz/introduktion">
          <Button title="Take Quiz" />
        </Link>
      </Collapsible>

      <Collapsible title="Kontrolstrukturer">
        
      </Collapsible>

      <Collapsible title="Arrays og Metoder">
        
      </Collapsible>

      <Collapsible title="Intro til OOP 1">
        
      </Collapsible>

      <Collapsible title="Intro til OOP 2">
        
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
});
