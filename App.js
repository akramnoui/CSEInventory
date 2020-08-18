/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import ForgotPassword from './src/scenes/LoginScreen/forgotPassword';
import NewPassword from './src/scenes/LoginScreen/newPassword';
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
import ActionDetail from './src/scenes/ActionDetails/ActionDetail';
import AddAnomaly from './src/scenes/AddAnomaly/AddAnomaly';
import AnomaliesView from './src/scenes/AnomalyList/AnomaliesView';
import ReserveScreen from './src/scenes/ReserveScreen/index';
import UsersInput from './src/scenes/ReserveScreen/UsersInput';

import {Platform} from 'react-native';
import {Drawer} from 'react-native-paper';
import ItemPage from './src/scenes/ItemPage/ItemPage';
import AddOP from './src/scenes/AddOP/AddOP';
import LostObject from './src/scenes/AnomalyList/LostObject';
import OnBoarding from './src/scenes/OnBoarding.js/OnBoarding';

const DrawerNav = createDrawerNavigator();
const Stack = createStackNavigator();
const DetailStack = createStackNavigator();
const ActionStack = createStackNavigator();
const AnomaliesStack = createStackNavigator();

const MaterialBottomTabs = createMaterialBottomTabNavigator();

// ----------------this  code will be refactored into another file

export default class App extends React.Component {
  render() {
    // Drawer implementation
    createHomeStack = () => (
      <DrawerNav.Navigator
        initialRouteName="Main"
        drawerContent={(props) => <DrawerContent {...props} />}>
        <DrawerNav.Screen name="Home" children={createBottomTabs} />
        <DrawerNav.Screen name="Report a missing object" component={AddOP} />
        <DrawerNav.Screen name="Report an anomaly" component={AddAnomaly} />
        <DrawerNav.Screen name="Profile" component={ProfileScreen} />
      </DrawerNav.Navigator>
    );
    createActionInfo = () => (
      <ActionStack.Navigator initialRouteName="Home" headerMode="none">
        <ActionStack.Screen name="ActionDetail" component={ActionDetail} />
        <ActionStack.Screen name="Profile" component={ProfileScreen} />
        <ActionStack.Screen name="Home" component={HomeScreen} />
      </ActionStack.Navigator>
    );
    createAnomalyScreen = () => (
      <AnomaliesStack.Navigator
        initialRouteName="AnomaliesView"
        headerMode="none">
        <AnomaliesStack.Screen name="AnomaliesView" component={AnomaliesView} />
        <AnomaliesStack.Screen name="AddAnomaly" component={AddAnomaly} />
      </AnomaliesStack.Navigator>
    );

    createItemInfo = () => (
      <DetailStack.Navigator initialRouteName="Articles" headerMode="none">
        <DetailStack.Screen name="Book" component={ReserveScreen} />
        <DetailStack.Screen name="Item" component={ItemPage} />
        <DetailStack.Screen name="Articles" component={ArticlesView} />
      </DetailStack.Navigator>
    );

    // bottom bar implementation
    createBottomTabs = () => (
      <MaterialBottomTabs.Navigator
        activeColor="#000000"
        inactiveColor="#111111"
        barStyle={{
          backgroundColor: '#5AFFFF',
        }}>
        <MaterialBottomTabs.Screen
          name="Home"
          style={{marginBottom: 16}}
          children={createActionInfo}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, tintColor}) => (
              <Ionicons
                name={`file-tray${focused ? '' : '-outline'}`}
                size={25}
                color={`${focused ? '#000000' : '#111111'}`}
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
                color={`${focused ? '#000000' : '#111111'}`}
              />
            ),
          }}
        />
        <MaterialBottomTabs.Screen
          name="AnomaliesView"
          children={createAnomalyScreen}
          options={{
            tabBarLabel: 'Damages',
            tabBarIcon: ({focused, tintColor}) => (
              <Ionicons
                name={`hammer${focused ? '' : '-outline'}`}
                size={25}
                color={`${focused ? '#000000' : '#111111'}`}
              />
            ),
          }}
        />
        <MaterialBottomTabs.Screen
          name="MissingObjects"
          component={LostObject}
          options={{
            tabBarLabel: 'Lost Objects',
            tabBarIcon: ({focused, tintColor}) => (
              <Ionicons
                name={`${focused ? 'checkbox-sharp' : 'checkbox-outline'}`}
                size={25}
                color={`${focused ? '#000000' : '#111111'}`}
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
         <Stack.Screen
           name="ForgotPassword"
           component={ForgotPassword}></Stack.Screen>
         <Stack.Screen
           name="NewPassword"
           component={NewPassword}></Stack.Screen>
         <Stack.Screen
           name="OnBoarding"
           component={OnBoarding}></Stack.Screen>
       </Stack.Navigator>
     </NavigationContainer>
    );
  }
}


