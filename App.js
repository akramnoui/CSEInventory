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
import DrawerContent from './src/scenes/DrawerContent/DrawerContent';
import AddAnomaly from './src/scenes/AddAnomaly/AddAnomaly';
import AnomaliesView from './src/scenes/AnomalyList/AnomaliesView';

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
import ItemPage from './src/scenes/ItemPage/ItemPage';
import ArticlesList from './src/scenes/GoodsList/ArticlesList';

const DrawerNav = createDrawerNavigator();
const Stack = createStackNavigator();
const DetailStack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

export default class App extends React.Component {
  render() {
    // Drawer  implementation
    createHomeStack = () => (
      <DrawerNav.Navigator
        initialRouteName="Main"
        drawerContent={() => <DrawerContent />}>
        <DrawerNav.Screen name="Main" children={createBottomTabs} />
        <DrawerNav.Screen name="Profile" component={ProfileScreen} />
      </DrawerNav.Navigator>
    );
    createItemInfo = () => (
      <DetailStack.Navigator initialRouteName="Articles" headerMode="none">
        <DetailStack.Screen name="Item" component={ItemPage} />
        <DetailStack.Screen name="Articles" component={ArticlesView} />
      </DetailStack.Navigator>
    );
    // bottom bar implementation
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
              <Ionicons
                name={`file-tray${focused ? '' : '-outline'}`}
                size={25}
                color={`${focused ? 'white' : 'grey'}`}
              />
            ),
          }}
        />
        <MaterialBottomTabs.Screen
          name="Articles"
          children={createItemInfo}
          options={{
            tabBarLabel: 'Articles',
            tabBarIcon: ({focused, tintColor}) => (
              <Ionicons
                name={`grid${focused ? '' : '-outline'}`}
                size={25}
                color={`${focused ? 'white' : 'grey'}`}
              />
            ),
          }}
        />
        <MaterialBottomTabs.Screen
          name="AnomaliesView"
          component={AnomaliesView}
          options={{
            tabBarLabel: 'Degats',
            tabBarIcon: ({focused, tintColor}) => (
              <Ionicons
                name={`hammer${focused ? '' : '-outline'}`}
                size={25}
                color={`${focused ? 'white' : 'grey'}`}
              />
            ),
          }}
        />
      </MaterialBottomTabs.Navigator>
    );

    return (
      //main Stack
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
