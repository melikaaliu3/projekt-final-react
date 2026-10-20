import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Page() {
  const router = useRouter();

  const workouts = [
    { id: 1, name: 'Strength Training', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400', exercises: 12 },
    { id: 2, name: 'Cardio', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400', exercises: 8 },
    { id: 3, name: 'Yoga', image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=400', exercises: 10 },
    { id: 4, name: 'HIIT', image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=400', exercises: 15 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Fitness Tracker</Text>
          <Text style={styles.headerSubtitle}>Choose your workout</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Workouts</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Streak</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Workout Categories</Text>
        <View style={styles.workoutsGrid}>
          {workouts.map((workout) => (
            <TouchableOpacity 
              key={workout.id} 
              style={styles.workoutCard}
              onPress={() => router.push(`/workout/${workout.id}`)}
            >
              <Image source={{ uri: workout.image }} style={styles.workoutImage} />
              <View style={styles.workoutOverlay}>
                <Text style={styles.workoutName}>{workout.name}</Text>
                <Text style={styles.workoutExercises}>{workout.exercises} exercises</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Today's Goal</Text>
        <View style={styles.goalCard}>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
          <Text style={styles.goalText}>3/5 workouts completed</Text>
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  statCard: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
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
    margin: 20,
    marginTop: 30,
  },
  workoutsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
  },
  workoutCard: {
    width: '48%',
    margin: '1%',
    height: 180,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
  },
  workoutImage: {
    width: '100%',
    height: '100%',
  },
  workoutOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
  },
  workoutName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  workoutExercises: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 2,
  },
  goalCard: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progressFill: {
    width: '60%',
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  goalText: {
    fontSize: 16,
    color: '#666',
  },
});
