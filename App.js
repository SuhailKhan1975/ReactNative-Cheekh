import React from 'react';
import { Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoardingScreen from './src/screens/OnBoardingScreen';
import HomeScreen from './src/screens/HomeScreen';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
      headerMode="none">
        <AppStack.Screen name="OnBoarding" component={OnBoardingScreen}/>
        <AppStack.Screen name="Home" component={HomeScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;