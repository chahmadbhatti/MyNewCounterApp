import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const App = () => 
{
  const [count, setCount] = useState(0); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text> 
      <Text style={styles.counterText}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
        <Button title="Decrement" onPress={() => setCount(count - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingTop: 50, 
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  counterText: {
    fontSize: 32,
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});

export default App;
