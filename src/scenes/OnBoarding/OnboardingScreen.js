import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default class OnboardingScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Onboarding
          onDone={() => this.props.navigation.navigate('Main')}
          onSkip={() => this.props.navigation.navigate('Main')}
          pages={[
            {
              backgroundColor: '#fff',
              image: (
                <Image source={require('../../assets/login/bgTopView.png')} />
              ),
              title: 'Onboarding',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
              backgroundColor: '#fff',
              image: (
                <Image source={require('../../assets/login/bgTopView.png')} />
              ),
              title: 'Onboarding',
              subtitle: 'Done with React Native Onboarding Swiper',
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    height: '100%',
    backgroundColor: '#fff',
  },
});
