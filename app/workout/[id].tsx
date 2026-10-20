import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function WorkoutDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const workoutData: any = {
    '1': {
      name: 'Strength Training',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
      duration: '45 min',
      calories: '350 cal',
      exercises: [
        { name: 'Push-ups', reps: '3 x 15', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400' },
        { name: 'Squats', reps: '4 x 20', image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400' },
        { name: 'Lunges', reps: '3 x 12 each', image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400' },
        { name: 'Plank', reps: '3 x 60 sec', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400' },
      ]
    },
    '2': {
      name: 'Cardio',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800',
      duration: '30 min',
      calories: '400 cal',
      exercises: [
        { name: 'Jumping Jacks', reps: '3 x 50', image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=400' },
        { name: 'High Knees', reps: '3 x 30 sec', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400' },
        { name: 'Burpees', reps: '3 x 15', image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=400' },
      ]
    },
    '3': {
      name: 'Yoga',
      image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=800',
      duration: '60 min',
      calories: '200 cal',
      exercises: [
        { name: 'Downward Dog', reps: '3 x 60 sec', image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=400' },
        { name: 'Warrior Pose', reps: '3 x 30 sec each', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400' },
        { name: 'Tree Pose', reps: '3 x 45 sec each', image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400' },
      ]
    },
    '4': {
      name: 'HIIT',
      image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800',
      duration: '25 min',
      calories: '500 cal',
      exercises: [
        { name: 'Mountain Climbers', reps: '4 x 30 sec', image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=400' },
        { name: 'Box Jumps', reps: '4 x 15', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400' },
        { name: 'Sprint Intervals', reps: '5 x 30 sec', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400' },
      ]
    }
  };

  const workout = workoutData[id as string] || workoutData['1'];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>

        <Image source={{ uri: workout.image }} style={styles.headerImage} />
        
        <View style={styles.content}>
          <Text style={styles.workoutName}>{workout.name}</Text>
          
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{workout.duration}</Text>
              <Text style={styles.statLabel}>Duration</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{workout.calories}</Text>
              <Text style={styles.statLabel}>Calories</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{workout.exercises.length}</Text>
              <Text style={styles.statLabel}>Exercises</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Exercises</Text>
          {workout.exercises.map((exercise: any, index: number) => (
            <View key={index} style={styles.exerciseCard}>
              <Image source={{ uri: exercise.image }} style={styles.exerciseImage} />
              <View style={styles.exerciseInfo}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseReps}>{exercise.reps}</Text>
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}>Start Workout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerImage: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
  },
  workoutName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  exerciseCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
  },
  exerciseImage: {
    width: 100,
    height: 100,
  },
  exerciseInfo: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  exerciseReps: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  startButton: {
    backgroundColor: '#4CAF50',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
