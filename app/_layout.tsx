import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24, color }}>🏠</Text>
        }} 
      />
      <Tabs.Screen 
        name="workouts" 
        options={{ 
          title: 'Workouts',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24, color }}>💪</Text>
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profile',
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24, color }}>👤</Text>
        }} 
      />
      <Tabs.Screen 
        name="workout/[id]" 
        options={{ 
          href: null,
          title: 'Workout Details'
        }} 
      />
    </Tabs>
  );
}
