import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FavoritesScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['left', 'right']}>
      <View style={styles.content}>
        <Text style={styles.icon}>♡</Text>
        <Text style={styles.title}>Tus favoritos</Text>
        <Text style={styles.copy}>Aquí podrás tener a mano los libros que más te gustan.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F6F7FB' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 },
  icon: { color: '#315FA9', fontSize: 54 },
  title: { marginTop: 10, color: '#15284A', fontSize: 24, fontWeight: '800' },
  copy: { marginTop: 8, color: '#68778F', fontSize: 15, lineHeight: 22, textAlign: 'center' },
});
