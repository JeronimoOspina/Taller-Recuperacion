import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.card}>
        <Text style={styles.kicker}>PREFERENCIAS</Text>
        <Text style={styles.title}>Ajustes</Text>
        <Text style={styles.copy}>La navegación y la lectura están listas para acompañarte.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, padding: 24, backgroundColor: '#F6F7FB' },
  card: { padding: 22, borderRadius: 20, backgroundColor: '#FFFFFF' },
  kicker: { color: '#5976A9', fontSize: 11, fontWeight: '800', letterSpacing: 2 },
  title: { marginTop: 10, color: '#15284A', fontSize: 27, fontWeight: '800' },
  copy: { marginTop: 9, color: '#68778F', fontSize: 15, lineHeight: 23 },
});
