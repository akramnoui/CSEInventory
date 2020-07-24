/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation"; 


import { LoginScreen } from './src/scenes/LoginScreen';
 
  
const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
});
const App: () => React$Node = () => {
  return (
    <>
      
     <AppNavigator></AppNavigator>
    </>
  );
};

const styles = StyleSheet.create({
  
  mainView: {
   flex: 1 , 
    justifyContent: "center" , 
    alignItems: "center"
  } , 
  maintext:{
    fontSize: 40
  }
});

export default App;
