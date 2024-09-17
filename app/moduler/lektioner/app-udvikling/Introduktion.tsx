// Introduktion.tsx

import { ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function Introduktion() {
  return (
    <ScrollView style={styles.container}>
      <ThemedText style={styles.title}>Introduktion</ThemedText>
      <ThemedText>This app includes example code to help you get started.</ThemedText>




      <ThemedText style={styles.subTitle}>Anbefalede Artikler</ThemedText>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingTop: 12,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 12,
  },
});
