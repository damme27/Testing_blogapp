import React, { Component } from 'react'
import { Text, View } from 'react-native'

import About from '../screens/About';
import Detail from '../screens/Detail';
import Home from '../screens/Home';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };