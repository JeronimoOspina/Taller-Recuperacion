import { router } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LIBROS } from '@/data/libros';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['left', 'right']}>
      <FlatList
        contentContainerStyle={styles.list}
        data={LIBROS}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<View style={styles.intro}><Text style={styles.kicker}>BIBLIOTECA</Text><Text style={styles.title}>Historias para descubrir</Text><Text style={styles.subtitle}>Autores y obras que viven en la literatura colombiana.</Text></View>}
        renderItem={({ item, index }) => (
          <Pressable accessibilityRole="button" onPress={() => router.push(`/libro/${item.id}`)} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
            <View style={styles.number}><Text style={styles.numberText}>{String(index + 1).padStart(2, '0')}</Text></View>
            <View style={styles.info}><Text style={styles.bookTitle}>{item.titulo}</Text><Text style={styles.author}>{item.autor}</Text></View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F6F7FB' },
  list: { padding: 22, paddingBottom: 28 },
  intro: { marginBottom: 20, paddingVertical: 12 },
  kicker: { color: '#5976A9', fontSize: 11, fontWeight: '800', letterSpacing: 2 },
  title: { marginTop: 10, color: '#15284A', fontSize: 29, lineHeight: 35, fontWeight: '800' },
  subtitle: { marginTop: 8, color: '#68778F', fontSize: 15, lineHeight: 22 },
  card: { flexDirection: 'row', alignItems: 'center', marginBottom: 12, padding: 16, minHeight: 82, borderRadius: 18, backgroundColor: '#FFFFFF', shadowColor: '#18345E', shadowOpacity: 0.06, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 2 },
  pressed: { opacity: 0.76 },
  number: { width: 42, height: 42, alignItems: 'center', justifyContent: 'center', borderRadius: 13, backgroundColor: '#EAF0FB' },
  numberText: { color: '#315FA9', fontSize: 13, fontWeight: '800' },
  info: { flex: 1, marginHorizontal: 13 },
  bookTitle: { color: '#1C2C47', fontSize: 16, fontWeight: '700' },
  author: { marginTop: 5, color: '#77849A', fontSize: 13 },
  chevron: { color: '#8A97AB', fontSize: 26 },
});
