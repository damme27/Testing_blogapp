import { StyleSheet, Text, View } from 'react-native';

import { MainStackNavigator } from './navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
export default App
