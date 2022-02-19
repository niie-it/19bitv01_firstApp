import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Body } from './Body';
import { Header } from './Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HOT RELOAD React Native App</Text>
      <Header />
      <Body />
      <Body content="Lớp 19BITV02" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
