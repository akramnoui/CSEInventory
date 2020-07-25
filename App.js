/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import LoginScreen from './src/scenes/LoginScreen/index';
import HomeScreen from './src/scenes/HomeScreen/index';
import ArticlesView from './src/scenes/GoodsList/ArticlesView';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {DrawerNavigator} from 'react-navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ProfileScreen from './src/scenes/ProfileScreen/index';
import DrawerContent from './src/scenes/DrawerContent/DrawerContent'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Icon,
} from 'react-native';
import {Drawer} from 'react-native-paper';

const DrawerNav = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

export default class App extends React.Component {
  render() {
    createHomeStack = () => (
      <DrawerNav.Navigator initialRouteName="Main" drawerContent={() => <DrawerContent />} > 
        <DrawerNav.Screen name="Main" children={createBottomTabs} />
        <DrawerNav.Screen name="Profile" component={ProfileScreen} />
      </DrawerNav.Navigator>
    );

    createBottomTabs = () => (
      <MaterialBottomTabs.Navigator
        activeColor="#f0edf6"
        inactiveColor="#707070"
        barStyle={{backgroundColor: '#000000'}}>
        <MaterialBottomTabs.Screen
          name="Home"
          style={{marginBottom: 16}}
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, tintColor}) => (
              <Ionicons name={'file-tray'} size={25} color={'white'} />
            ),
          }}
        />
        <MaterialBottomTabs.Screen
          name="ArticlesView"
          component={ArticlesView}
          options={{
            tabBarLabel: 'Articles',
            tabBarIcon: ({focused, tintColor}) => (
              <Ionicons name={'grid'} size={25} color={'white'} />
            ),
          }}
        />
      </MaterialBottomTabs.Navigator>
    );

    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Main" children={createHomeStack}></Stack.Screen>
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
