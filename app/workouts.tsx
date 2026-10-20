import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

export default function Workouts() {
  const router = useRouter();

  const workouts = [
    { id: 1, name: 'Strength Training', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400', exercises: 12, level: 'Intermediate' },
    { id: 2, name: 'Cardio', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400', exercises: 8, level: 'Beginner' },
    { id: 3, name: 'Yoga', image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=400', exercises: 10, level: 'All Levels' },
    { id: 4, name: 'HIIT', image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=400', exercises: 15, level: 'Advanced' },
    { id: 5, name: 'Pilates', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400', exercises: 9, level: 'Beginner' },
    { id: 6, name: 'CrossFit', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400', exercises: 20, level: 'Advanced' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>All Workouts</Text>
          <Text style={styles.headerSubtitle}>Find your perfect workout</Text>
        </View>

        <View style={styles.workoutsList}>
          {workouts.map((workout) => (
            <TouchableOpacity 
              key={workout.id} 
              style={styles.workoutCard}
              onPress={() => router.push(`/workout/${workout.id}`)}
            >
              <Image source={{ uri: workout.image }} style={styles.workoutImage} />
              <View style={styles.workoutContent}>
                <Text style={styles.workoutName}>{workout.name}</Text>
                <View style={styles.workoutMeta}>
                  <Text style={styles.workoutLevel}>{workout.level}</Text>
                  <Text style={styles.workoutExercises}>{workout.exercises} exercises</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
  header: {
    padding: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  workoutsList: {
    padding: 15,
  },
  workoutCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  workoutImage: {
    width: '100%',
    height: 150,
  },
  workoutContent: {
    padding: 15,
  },
  workoutName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  workoutMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  workoutLevel: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '600',
  },
  workoutExercises: {
    fontSize: 14,
    color: '#666',
  },
});
