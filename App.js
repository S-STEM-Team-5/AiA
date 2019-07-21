import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoadingApp from './src/Views/LoadingApp';

export default function App() {
  return (
    <View style={styles.container}>
      <LoadingApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: "flex-end",
    // justifyContent: "space-evenly"
    
  },
});
