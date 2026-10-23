import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const logout = () => {
    router.dismissAll();
    router.replace('/login');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['left', 'right']}>
      <View style={styles.content}>
        <View style={styles.avatar}><Text style={styles.avatarText}>B</Text></View>
        <Text style={styles.title}>Tu perfil</Text>
        <Text style={styles.copy}>Gestiona tu experiencia en Biblioteca.</Text>
        <Pressable accessibilityRole="button" onPress={() => router.push('/acerca')} style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
          <Text style={styles.primaryText}>Acerca de</Text>
        </Pressable>
        <Pressable accessibilityRole="button" onPress={logout} style={({ pressed }) => [styles.secondaryButton, pressed && styles.pressed]}>
          <Text style={styles.secondaryText}>Cerrar sesión</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F6F7FB' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 28 },
  avatar: { width: 82, height: 82, alignItems: 'center', justifyContent: 'center', borderRadius: 41, backgroundColor: '#DDE8FA' },
  avatarText: { color: '#315FA9', fontSize: 34, fontWeight: '800' },
  title: { marginTop: 18, color: '#15284A', fontSize: 26, fontWeight: '800' },
  copy: { marginTop: 7, marginBottom: 30, color: '#68778F', fontSize: 15 },
  primaryButton: { width: '100%', minHeight: 54, alignItems: 'center', justifyContent: 'center', borderRadius: 15, backgroundColor: '#315FA9' },
  primaryText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  secondaryButton: { width: '100%', minHeight: 54, alignItems: 'center', justifyContent: 'center', marginTop: 12, borderWidth: 1, borderColor: '#D7DFEA', borderRadius: 15, backgroundColor: '#FFFFFF' },
  secondaryText: { color: '#43536C', fontSize: 16, fontWeight: '700' },
  pressed: { opacity: 0.75 },
});
