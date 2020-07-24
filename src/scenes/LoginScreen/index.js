import React from 'react';
import { View , StyleSheet ,Text , TextInput } from 'react-native';
import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator
  } from "react-navigation"; 
class LoginScreen extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.MainView}>
              <TopView></TopView>
              <Form></Form>

            </View>
        );
    }
}

const TopView = () => (
    <View style={styles.topView}>
    <Text>
        HEEEEY
    </Text>

     </View>     

    
);


const Form = () => (
    <View style={styles.Form}>
            <TextInput></TextInput>
            <TextInput></TextInput>
    </View>

    
);

const styles = StyleSheet.create({

    MainView: {
        flex: 1 , 
        backgroundColor: "#ffff"
    } ,
    topView:{
        height: 244 , 
        backgroundColor: "black" , 

    } , 
    Form:{
        height: 492
    }



})

export default LoginScreen;