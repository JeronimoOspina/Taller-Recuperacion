import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#315FA9',
      tabBarInactiveTintColor: '#8390A5',
      tabBarStyle: { height: 66, paddingTop: 7, paddingBottom: 8, borderTopColor: '#E8ECF3' },
      tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
    }}>
      <Tabs.Screen name="index" options={{ title: 'Inicio', tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color as string} size={size} /> }} />
      <Tabs.Screen name="favoritos" options={{ title: 'Favoritos', tabBarIcon: ({ color, size }) => <Ionicons name="heart-outline" color={color as string} size={size} /> }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil', tabBarIcon: ({ color, size }) => <Ionicons name="person-circle-outline" color={color as string} size={size} /> }} />
    </Tabs>
  );
}
