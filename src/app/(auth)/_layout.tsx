import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';

export default function AuthLayout() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.frame}>
        <Text style={styles.brand}>Biblioteca</Text>
        <Slot />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#E7EFFF' },
  frame: { flex: 1, margin: 18, padding: 24, borderRadius: 28, backgroundColor: '#E7EFFF' },
  brand: { marginTop: 28, marginBottom: 32, color: '#23427B', fontSize: 30, fontWeight: '800' },
});
