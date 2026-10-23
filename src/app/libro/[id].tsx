import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LIBROS } from '@/data/libros';

export default function BookDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const libro = LIBROS.find((item) => item.id === id);

  return (
    <SafeAreaView style={styles.safe}>
      <Stack.Screen options={{ title: libro?.titulo ?? 'Detalle' }} />
      {libro ? (
        <View style={styles.card}>
          <Text style={styles.kicker}>DETALLE DEL LIBRO</Text>
          <Text style={styles.title}>{libro.titulo}</Text>
          <View style={styles.rule} />
          <Text style={styles.label}>AUTOR</Text>
          <Text style={styles.value}>{libro.autor}</Text>
          <Text style={[styles.label, styles.yearLabel]}>AÑO DE PUBLICACIÓN</Text>
          <Text style={styles.value}>{libro.anio}</Text>
        </View>
      ) : (
        <View style={styles.notFound}><Text style={styles.title}>Libro no encontrado</Text></View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, padding: 22, backgroundColor: '#F6F7FB' },
  card: { marginTop: 20, padding: 24, borderRadius: 22, backgroundColor: '#FFFFFF' },
  kicker: { color: '#5976A9', fontSize: 11, fontWeight: '800', letterSpacing: 2 },
  title: { marginTop: 12, color: '#15284A', fontSize: 28, lineHeight: 35, fontWeight: '800' },
  rule: { height: 1, marginVertical: 22, backgroundColor: '#E8ECF3' },
  label: { color: '#8490A3', fontSize: 11, fontWeight: '800', letterSpacing: 1.5 },
  value: { marginTop: 7, color: '#263954', fontSize: 17, fontWeight: '600' },
  yearLabel: { marginTop: 24 },
  notFound: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
