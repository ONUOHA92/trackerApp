import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from "@react-navigation/drawer"

const Stack = createStackNavigator();

import {

  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// IMPORT SPLASH SCREEN
import SplashScreen from './screen/SplashScreen';
import LoginScreen from './screen/LoginScreen'
import SignUpScreen from './screen/SignUpScreen';
import HomeScreen from './screen/HomeScreen';



const MyStack = () => {
  return (
    
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>   
  

  );
};



const styles = StyleSheet.create({
  flex: 1
});

export default MyStack;
