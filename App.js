// Entry Point -- everything starts from here!

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoadingAppView from './src/Views/LoadingAppView';
import AppNavigator from './routes/AppNavigator';
import AuthNavigator from './routes/AuthNavigator';
import { createAppContainer } from 'react-navigation';

// import gs from './src/components/StyleSheet';

// Any navigation must be placed in the `createAppContainer method
const InitApp = createAppContainer(AuthNavigator);

export default function App() {
  return (
    <View style={styles.container}>
      {/* Authenticates user (login) */}
      <InitApp />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#551A8B',
    alignContent: "flex-end",
    justifyContent: "center"
    
  },
});
