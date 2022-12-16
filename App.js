import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './src/components/titulo';
import Principal from './src/components/principal';


export default function App() {
  return (
    <View style={styles.container}>
       <Text style={styles.fonteBlue}>IMC</Text>
      <Titulo/>
      <Principal/>
      <StatusBar styles="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizonte: 15,
    backgroundColor: '#4682B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fonteBlue: {
    color: 'BLACK',
    fontWeight: 'bold',
    fontSize: 30,
  },
}); 
