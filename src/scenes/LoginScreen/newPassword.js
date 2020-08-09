import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Alert} from 'react-native';

const NewPassword = (props) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleNewPassword = () => {
    if (password !== confirmPassword) {
      Alert.alert(`Passwords doesn't match`, 'Try Again');
    } else {
      console.log('password changed');
      // Perform request to backend
      // alert that password has successfully changed
      Alert.alert(`Password Changed Successfuly`, 'You can newPasswordTitle with your new password');
      // redirect to newPasswordTitle page
      props.navigation.navigate('Login')
    }
  };
  return (
    <>
      <ScrollView behavior="height" style={{backgroundColor: '#000'}}>
        <TopView />
        <View style={styles.Form}>
          <View style={styles.formText}>
            <Text style={styles.newPasswordTitle}>New Password </Text>
            <Text style={styles.newPasswordTitleP}>
              You can enter a new password to your account
            </Text>
          </View>
          <TextInput
            placeholderTextColor="#5AFFFF"
            textContentType="password"
            onChangeText={(newValue) => setPassword(newValue)}
            style={styles.TextInput}
            value={password}
            placeholder="New Password"
          />
          <TextInput
            placeholderTextColor="#5AFFFF"
            textContentType="password"
            onChangeText={(newValue) => setConfirmPassword(newValue)}
            style={styles.TextInput}
            value={confirmPassword}
            placeholder="Confirm Password"
          />
        </View>
      </ScrollView>

      <View style={styles.bottomBtn}>
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={() => handleNewPassword()}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const TopView = () => {
  return (
    <View style={styles.MainView}>
      <Image
        source={require('../../assets/login/forgottenPaasword.png')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBtn: {
    backgroundColor: '#000000',
  },
  continueBtn: {
    height: 48,
    width: '85%',
    backgroundColor: '#5AFFFF',
    margin: 10,
    alignSelf: 'center',
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
  continueText: {
    color: '#000000',
    fontSize: 17,
    fontWeight: 'bold',
  },
  formText: {
    padding: 20,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  newPasswordTitle: {
    fontFamily: 'Gotham',
    padding: 5,
    color: '#FFFFFF',
    fontSize: 27,
  },
  newPasswordTitleP: {
    padding: 5,
    color: '#FFFFFF',
    fontSize: 14,
  },
  forgotPassword: {
    color: '#5AFFFF',
    alignSelf: 'flex-end',
  },
  MainView: {
    marginTop: 70,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  Form: {
    paddingTop: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    marginVertical: 30,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#5AFFFF',
    width: '85%',
    height: 50,
    marginBottom: 15,
    marginTop: 15,
    borderRadius: 5,
    padding: 16,
    color: '#5AFFFF',
  },
  sendButton: {
    height: 48,
    width: '85%',
    backgroundColor: '#5AFFFF',
    marginTop: 50,
    alignSelf: 'center',
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
  sendText: {
    color: '#000000',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default NewPassword;
