import React, { Component } from 'react';
import { View , StyleSheet ,Text , TextInput  , TouchableOpacity ,  KeyboardAvoidingView} from 'react-native';
import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator
  } from "react-navigation"; 
class LoginScreen extends React.Component {
    state = {
        name: '',
        password: '',
        isFormValid: false,
      }

      getHandler = key => val => {
        this.setState({[key]: val})
      }
    
      handleNameChange = this.getHandler('name') // val => { this.setState({name: val}) }
      handlePhoneChange = this.getHandler('password')
    
        
      handleNameChange = name => {
        this.setState({name})
      }
    
    
      handlePhoneChange = password => {
        
          this.setState({password})
      
      }
      _login = () => {
        this.props.navigation.navigate("Home");
      };
    render() {
        return (
            <KeyboardAvoidingView   behavior="padding" style={styles.MainView}>
              <TopView></TopView>
              <View  style={styles.Form}>
                    <TextInput
                     onChangeText={this.getHandler('name')}
                    style={styles.TextInput}
                    value={this.state.name}
                
                
                placeholder="Name"
                />
                <TextInput
                  onChangeText={this.getHandler('password')}
                style={styles.TextInput}
                value={this.state.password}
                secureTextEntry={true} 

                
                placeholder="Password"
                /> 
                    <TouchableOpacity
                            style={styles.LoginButton}
                            onPress={this._login }
                        >
                            <Text style={{color: "white" }}>Press Here</Text>
                        </TouchableOpacity>

                        
            </View>
                    

            </KeyboardAvoidingView    >
        );
    }
}

const TopView = () => (
    <View style={styles.topView}>
    <Text style={styles.mainTitle} >
        Main Title
    </Text>
    <Text style={styles.description} >
      Lorem dolor sit amet consectetur adipisicing elit, sed do.
    </Text>
        
     </View>     

    
);



const styles = StyleSheet.create({

    MainView: {
        height: 10,
        flex: 1 , 
        backgroundColor: "#ffff"
    } ,
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      }, 
    
    topView:{
        display: "flex" , 
        justifyContent:"center" , 
        alignItems: "center" , 
        height: 244 , 
        backgroundColor: "black" , 

    } , 
    Form:{
        paddingTop: 48 , 
        display: "flex" , 
        alignItems: "center" , 

        height: 492
    } , 
    TextInput: {
        borderWidth: 1 , 
        borderColor: "#D0D0D0" ,
        width: "85%" , 
        height: 50 , 
        marginBottom: 32, 
        
    } , 
    mainTitle:{
        
        color: "white" , 
        fontSize: 25 , 
        padding: 10
         

    } , 
    description:{
        color: "white"
        ,fontSize: 10

    } , 
    LoginButton: {
        height: 48 , 
        width: "85%" , 
        backgroundColor: "#000000" , 
        marginTop: 100 ,
        justifyContent: "center" , 
        alignItems: "center"

        

    }



})

export default LoginScreen;