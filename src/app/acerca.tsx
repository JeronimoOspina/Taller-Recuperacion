import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <View style={styles.mark}><Text style={styles.markText}>B</Text></View>
        <Text style={styles.title}>Biblioteca</Text>
        <Text style={styles.copy}>Un espacio para descubrir historias y acercarse a la literatura colombiana.</Text>
        <Pressable accessibilityRole="button" onPress={() => router.back()} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
          <Text style={styles.buttonText}>Cerrar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, padding: 22, backgroundColor: '#F6F7FB' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  mark: { width: 68, height: 68, alignItems: 'center', justifyContent: 'center', borderRadius: 22, backgroundColor: '#DDE8FA' },
  markText: { color: '#315FA9', fontSize: 32, fontWeight: '800' },
  title: { marginTop: 18, color: '#15284A', fontSize: 28, fontWeight: '800' },
  copy: { marginTop: 10, color: '#68778F', fontSize: 16, lineHeight: 24, textAlign: 'center' },
  button: { alignSelf: 'stretch', minHeight: 54, alignItems: 'center', justifyContent: 'center', marginTop: 28, borderRadius: 15, backgroundColor: '#315FA9' },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  pressed: { opacity: 0.76 },
});
