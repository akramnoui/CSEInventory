/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      
      <SafeAreaView style={styles.mainView}>
       <Text style={styles.maintext} > Hello World!</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
  mainView: {
   flex: 1 , 
    justifyContent: "center" , 
    alignItems: "center"
  } , 
  maintext:{
    fontSize: 40
  }
});

export default App;
