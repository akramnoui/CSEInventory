import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import PushNotification from 'react-native-push-notification';
import {pushNotificationConfig} from '../../NotificationSystem';
import {screenWidth, screenHeight} from '../ReserveScreen/Dimensions.js';
// Notifications will be in another file
PushNotification.configure(pushNotificationConfig);
const PushNotificationFunc = () => {
  // Perform a request to backend every 24 hours with setInterval
  // if there is any reminders, push them
  PushNotification.localNotification({
    message: 'You have an item to return',
    title: 'Reminder',
  });
};

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
    this.props.navigation.navigate('OnBoarding');
  };
  _forgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  };
  render() {
    return (
      <KeyboardAwareScrollView
        style={{backgroundColor: '#000'}}
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={{height: screenHeight}}
        scrollEnabled={false}>
        <TopView />
        <View style={styles.Form}>
          <View style={styles.formText}>
            <Text style={styles.login}> Login </Text>
            <Text style={styles.loginP}> Please sing in to continue </Text>
          </View>
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
          <TouchableOpacity onPress={this._forgotPassword}>
            <Text style={styles.forgotPassword}> Forgot Password? </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.LoginButton} onPress={this._login}>
            <Text style={styles.loginText}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const TopView = () => {
  return (
    <View style={styles.MainView}>
      <Image source={require('../../assets/login/bgTopView.png')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  formText: {
    padding: 20,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  login: {
    fontFamily: 'Gotham',
    padding: 5,
    color: '#FFFFFF',
    fontSize: 27,
  },
  loginP: {
    padding: 5,
    color: '#FFFFFF',
    fontSize: 14,
  },
  forgotPassword: {
    color: '#5AFFFF',
    alignSelf: 'flex-end',
  },

  MainView: {
    marginTop:20,
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },

  Form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1.2,
    marginVertical: 30,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#5AFFFF',
    width: '85%',
    height: 50,
    marginBottom: 20,
    borderRadius: 5,
    padding: 16,
    color: '#5AFFFF',
    backgroundColor: '#000',
  },

  LoginButton: {
    height: 48,
    width: '85%',
    backgroundColor: '#5AFFFF',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
    borderRadius: 50,
  },
  loginText: {
    color: '#000000',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
