import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {TouchableHighlight} from 'react-native-gesture-handler';

// const {width, height} = Dimensions.get('window');
class OnBoarding extends Component {
  _GoToHome = () => {
    this.props.navigation.navigate('Main');
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          loop={false}
          activeDotColor={'#5AFFFF'}>
          <View style={styles.slide}>
            <Text style={styles.OnBoardingTitle}> Title One </Text>
            <Text style={styles.OnBoardingP}> Slide 1</Text>
            <SkipBtn goToHome={this._GoToHome} />
          </View>
          <View style={styles.slide}>
            <Text style={styles.OnBoardingTitle}> Title Two </Text>
            <Text style={styles.OnBoardingP}> Slide 2</Text>
            <SkipBtn goToHome={this._GoToHome} />
          </View>
          <View style={styles.slide}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text style={styles.OnBoardingTitle}> Title Three </Text>
              <Text style={styles.OnBoardingP}> Slide 3</Text>
            </View>
            <View style={{flex: 1}}>
              <TouchableHighlight
                style={styles.homeBtn}
                onPress={this._GoToHome}
                underlayColor={'#5AFFFF80'}>
                <Text style={styles.homeBtnText}>Start</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Swiper>
      </View>
    );
  }
}
const SkipBtn = (props) => {
  return (
    <View style={styles.positionSkip}>
      <TouchableHighlight
        underlayColor={'#00000010'}
        style={styles.skipBtn}
        onPress={() => props.goToHome()}>
        <Text style={styles.skipBtnText}>Skip</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  OnBoardingTitle: {
    color: '#FFFFFF',
    fontSize: 23,
  },
  OnBoardingP: {
    color: '#FFFFFF',
    fontSize: 17,
  },
  positionSkip: {
    position: 'absolute',
    top: 30,
    right: 10,
  },
  wrapper: {},
  slide: {
    padding: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#111111',
  },
  homeBtnText: {
      color:'#111111',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Gotham',
  },
  homeBtn: {
    height: 45,
    width: 140,
    backgroundColor: '#5AFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 90,
    shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4.65,
      elevation: 2,
  },
  skipBtn: {
    height: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  skipBtnText: {
    color: '#FFFFFF',
    opacity: 0.6,
  },
});

export default OnBoarding;
