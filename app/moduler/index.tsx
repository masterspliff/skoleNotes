import { Text } from 'react-native';
import { Image, StyleSheet, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';



export default function ModulerPage() {
  const router = useRouter();

  const modules = [
    { title: 'App. udvikling', path: '/' },
    { title: 'Database Design', path: '/' },
  ];

  return(
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
        
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Moduler</ThemedText>
        <HelloWave />
      </ThemedView>
      <ScrollView style={styles.lessonsContainer}>
        {modules.map((lesson, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(lesson.path)}
            style={styles.lessonItem}
          >
            <Text style={styles.lessonText}>{lesson.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </ParallaxScrollView>);
}


const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    linkColor: {
      color: "blue",
      fontSize: 20,
    },
    headerImage: {
      color: '#808080',
      bottom: -90,
      left: -35,
      position: 'absolute',
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
  