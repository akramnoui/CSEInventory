import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {useState} from 'react';

const VerifyCode = (props) => {
  const [code, setCode] = useState('');

  const handleCode = () => {
    props.navigation.navigate('NewPassword');

    // if (codeCorrect){
    // navigate to newPassword
    // }
    // else{
    //   Alert.alert(
    //     ' Incorrect Code',
    //     'The code you have provided is not correct, check again',
    //     [
    //       {
    //         text: 'Ok',
    //         onPress: () => console.log('Ok pressed')
    //       },
    //       {
    //         text: 'Go to Login',
    //         onPress: () => console.log('Go to login'), // navigate to login
    //         style: 'cancel'
    //       }
    //     ]
    //   );
    // }
  };

  return (
    <View style={{...styles.container, opacity: props.isVisible ? 1 : 0}}>
      <Text style={styles.checkText}>
        {`Please check your e-mail,\n and enter the code received !`}
      </Text>
      <TextInput
        placeholderTextColor="#5AFFFF"
        onChangeText={(newCode) => setCode(newCode)}
        style={styles.TextInput}
        value={code}
        placeholder="Code"
      />
      <TouchableOpacity
        style={styles.contniueButton}
        onPress={() => handleCode()}>
        <Text style={styles.continueText}>Send Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
    padding: 15,
    fontFamily: 'Gotham',
  },
  container: {
    bottom: 0,
    zIndex: 20,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#5AFFFF',
    width: '90%',
    padding: 20,
    backgroundColor: '#070809',
    borderRadius: 20,
  },
  contniueButton: {
    height: 48,
    width: '85%',
    backgroundColor: '#5AFFFF',
    marginTop: 30,
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
  TextInput: {
    borderWidth: 1,
    borderColor: '#5AFFFF',
    width: '85%',
    height: 50,
    marginBottom: 25,
    borderRadius: 5,
    padding: 16,
    color: '#5AFFFF',
    margin: 10,
  },

  continueText: {
    color: '#000000',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default VerifyCode;
