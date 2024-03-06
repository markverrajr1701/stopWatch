import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

//const Button = () => <View style={styles.button} />

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount(prevCount => prevCount + 1);
    console.log('Button Pressed');
   };

  return (
    <View style={styles.container}>
      <View style={styles.timeArea}>
        <Text style={styles.timeText}>00:00:00</Text>
      </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.text}>Stop</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.text}>Reset</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.text}>Lap</Text>  
      </View>
      <View style={styles.lapTimes}>
        <Text style={styles.text}>Lap Times</Text>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeArea: {
    width: 250,
    height: 75,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  timeText: {
    fontSize: 36,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    // alignContent: 'center',
    // justifyContent: 'center',
  },
  lapTimes: {
    //flex: 0.4,
    width: 250,
    height: 100,
    backgroundColor: 'green',
    alignItems: 'baseline stretch',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  }, 
});
