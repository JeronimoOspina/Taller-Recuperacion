import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.content}>
      <Text style={styles.eyebrow}>BIENVENIDO</Text>
      <Text style={styles.title}>Tu próxima lectura empieza aquí.</Text>
      <Text style={styles.copy}>Explora una selección de grandes libros colombianos.</Text>
      <Pressable accessibilityRole="button" onPress={() => router.replace('/')} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { flex: 1, justifyContent: 'center' },
  eyebrow: { color: '#4266A4', fontSize: 12, fontWeight: '800', letterSpacing: 2 },
  title: { marginTop: 12, color: '#15284A', fontSize: 34, lineHeight: 41, fontWeight: '800' },
  copy: { marginTop: 14, color: '#5F6F89', fontSize: 16, lineHeight: 24 },
  button: { marginTop: 32, minHeight: 56, alignItems: 'center', justifyContent: 'center', borderRadius: 16, backgroundColor: '#315FA9' },
  pressed: { opacity: 0.78, transform: [{ scale: 0.99 }] },
  buttonText: { color: '#FFFFFF', fontSize: 17, fontWeight: '700' },
});
