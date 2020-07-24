/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
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
  createBottomTabNavigator , 
  createAppContainer
} from "react-navigation"; 


import LoginScreen  from './src/scenes/LoginScreen/index';
import HomeScreen from './src/scenes/HomeScreen/index'
 
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import ProfileScreen  from './src/scenes/ProfileScreen/index';


const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Home : HomeScreen , 
  Profile : ProfileScreen 

}, 
{
  initialRouteName: 'Login',
},

);
const App = createAppContainer(AppNavigator)
// const App: () => React$Node = () => {
//   return (
//     <>
//       <NavigationContainer>
//      <AppNavigator></AppNavigator>
//      </NavigationContainer>
//     </>
//   );
// };

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
