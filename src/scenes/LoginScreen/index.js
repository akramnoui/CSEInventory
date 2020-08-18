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
import {screenWidth, screenHeight} from '../ReserveScreen/Dimensions.js';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
//import qs from 'querystring';
//import AsyncStorage from '@react-native-community/async-storage';

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },
  // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification) {
    console.log('REMOTE NOTIFICATION ==>', notification);
    PushNotification.localNotification({
      title: notification.title,
      message: notification.message,
    });
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  senderID: '256218572662',
  popInitialNotification: true,
  requestPermissions: true,
});

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      isFormValid: false,
      //token: null,
    };
    //    this.storeToken = this.storeToken.bind(this);
    //    this.getToken = this.getToken.bind(this);
  }

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
    //Add logic of sending notifications token to db
    this.props.navigation.navigate('OnBoarding');
  };
  _forgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  };

  //storeToken = async (value) => {
  //  try {
  //    await AsyncStorage.setItem('token', value);
  //  } catch (e) {
  //    console.log(e);
  //  }
  //};

  //getToken = async () => {
  //  try {
  //    const response = await AsyncStorage.getItem('token');
  //    this.setState({token: response});
  //  } catch (e) {
  //    console.log(e);
  //  }
  //};

  //_login = () => {
  //  if (this.state.name == '' || this.state.name == '') {
  //    alert('Fill in the form !');
  //    return;
  //  }

  //  const user = {
  //    email: this.state.name,
  //    password: this.state.password,
  //  };

  //  fetch('https://cse-inventory-api.herokuapp.com/users/login', {
  //    method: 'POST',
  //    headers: {
  //      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  //    },
  //    body: qs.stringify(user),
  //  })
  //    .then((response) => response.json()) // returns promise
  //    .then((responseJson) => {
  //      if (responseJson.token == undefined) {
  //        alert('Wrong credentials');
  //        return;
  //      }
  //      this.storeToken(responseJson.token);
  //      this.getToken();
  //      console.log(this.state.token);
  //    })
  //    .catch((e) => {
  //      console.log(e);
  //    });

  //  if (this.state.token != null) {
  //    this.props.navigation.navigate('Main');
  //  }
  //};

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
    marginTop: 20,
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
