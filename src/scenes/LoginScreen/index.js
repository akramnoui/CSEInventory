import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
class LoginScreen extends React.Component {
  state = {
    name: '',
    password: '',
    isFormValid: false,
  };

  getHandler = (key) => (val) => {
    this.setState({[key]: val});
  };

  handleNameChange = this.getHandler('name'); // val => { this.setState({name: val}) }
  handlePhoneChange = this.getHandler('password');

  handleNameChange = (name) => {
    this.setState({name});
  };

  handlePhoneChange = (password) => {
    this.setState({password});
  };
  _login = () => {
    this.props.navigation.navigate('Main');
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="height" style={{flex: 1, backgroundColor:"#000"}}>
        <TopView></TopView>
        <View style={styles.Form}>
          <TextInput
            placeholderTextColor="#5AFFFF"
            onChangeText={this.getHandler('name')}
            style={styles.TextInput}
            value={this.state.name}
            placeholder="Name"
          />
          <TextInput
            placeholderTextColor="#5AFFFF"
            onChangeText={this.getHandler('password')}
            style={styles.TextInput}
            value={this.state.password}
            secureTextEntry={true}
            placeholder="Password"
          />
          <TouchableOpacity style={styles.LoginButton} onPress={this._login}>
            <Text style={{color: 'white'}}>log in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const TopView = () => (
  <View style={styles.topView}>
    <ImageBackground
      source={require('../../assets/login/bgTopView.png')}
      style={styles.image}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent:"flex-start"
        }}>
        <Text style={styles.mainTitle}>Main Title</Text>
        <Text style={styles.description}>
          Lorem dolor sit amet consectetur adipisicing elit, sed do.
        </Text>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  image: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: "cover",
  },
  MainView: {
    height: 10,
    flex: 1,
    backgroundColor: '#ffff',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },

  topView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode:"cover",
    height: 244,
  },
  Form: {
    paddingTop: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent:"flex-end",
    flex:1,
    marginVertical:30
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#5AFFFF',
    width: '85%',
    height: 50,
    marginBottom: 32,
    borderRadius:5,
    padding:16,
    color:"#5AFFFF"
  },
  mainTitle: {
    color: 'white',
    fontSize: 25,
    padding: 10,
    flex:1,
    textAlignVertical: 'bottom',
  },
  description: {
    color: 'white',
    fontSize: 10,
    flex:1,
    textAlignVertical: 'bottom',
    marginBottom:10
  },
  LoginButton: {
    height: 48,
    width: '85%',
    backgroundColor: '#3498DB',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
  },
});

export default LoginScreen;
