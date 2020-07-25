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




import LoginScreen  from './src/scenes/LoginScreen/index';
import HomeScreen from './src/scenes/HomeScreen/index';

 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileScreen  from './src/scenes/ProfileScreen/index';


// const Pages = createStackNavigator(
//   {
//     Home: HomeScreen,
 

//   },

//   );

//   const MainTabs = createBottomTabNavigator(
//     {
//       Home: Pages,
//       Profile: ProfileScreen,
//     },
   
//   );
  // const AppNavigator = createSwitchNavigator({
  //   Login: LoginScreen,
  //   Main: MainTabs
  // });


 
 const Stack =  createStackNavigator(); 
 const MaterialBottomTabs = createMaterialBottomTabNavigator();


export default class App extends React.Component {
 
  render(){
      createHomeStack = () =>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      
      </Stack.Navigator>

createBottomTabs = () => 
   <MaterialBottomTabs.Navigator>
    <MaterialBottomTabs.Screen
      name="Home"
      style={{ marginBottom: 16 }}
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
       
      }}
    />
    <MaterialBottomTabs.Screen name="Profile" component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        
      }}
    />
    
  </MaterialBottomTabs.Navigator>
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"  screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" children={createBottomTabs}></Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
}



// const styles = StyleSheet.create({
  
//   mainView: {
//    flex: 1 , 
//     justifyContent: "center" , 
//     alignItems: "center"
//   } , 
//   maintext:{
//     fontSize: 40
//   }
// });
