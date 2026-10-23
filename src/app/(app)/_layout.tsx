import { Drawer } from 'expo-router/drawer';

export default function AppDrawerLayout() {
  return (
    <Drawer screenOptions={{ headerTintColor: '#18345E', headerStyle: { backgroundColor: '#FFFFFF' }, drawerActiveTintColor: '#315FA9' }}>
      <Drawer.Screen name="(tabs)" options={{ drawerLabel: 'Inicio', title: 'Inicio' }} />
      <Drawer.Screen name="ajustes" options={{ drawerLabel: 'Ajustes', title: 'Ajustes' }} />
    </Drawer>
  );
}
