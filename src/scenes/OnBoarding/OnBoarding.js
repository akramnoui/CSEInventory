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

const {width, height} = Dimensions.get('window');
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
            <View style={{flex: 2, justifyContent: 'flex-end'}}>
              <Image
                source={require('../../assets/onBoarding/1.png')}
                style={{...styles.image}}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.OnBoardingTitle}>Explore CSE Inventory</Text>
              <Text style={styles.OnBoardingP}>
                Check all CSE Belongings and their availability
              </Text>
            </View>
            <SkipBtn goToHome={this._GoToHome} />
          </View>
          <View style={styles.slide}>
            <View style={{flex: 2, justifyContent: 'flex-end'}}>
              <Image
                source={require('../../assets/onBoarding/2.png')}
                style={styles.image}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.OnBoardingTitle}>Book Items </Text>
              <Text style={styles.OnBoardingP}>
                {`Book the things you need for later \n& check other members activity`}
              </Text>
            </View>
            <SkipBtn goToHome={this._GoToHome} />
          </View>
          <View style={styles.slide}>
            <View style={{flex: 2, justifyContent: 'flex-end'}}>
              <Image
                source={require('../../assets/onBoarding/3.png')}
                style={styles.image}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.OnBoardingTitle}>Lost Object & Damages </Text>
              <Text style={styles.OnBoardingP}>
                Post about lost objects and declare demages
              </Text>
              <TouchableHighlight
                style={styles.homeBtn}
                onPress={this._GoToHome}
                underlayColor={'#5AFFFF80'}>
                <Text style={styles.homeBtnText}>Let's Start</Text>
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
  image: {
    marginBottom: 30,
  },
  OnBoardingTitle: {
    color: '#FFFFFF',
    fontSize: 23,
    fontFamily: 'Gotham',
    fontWeight: 'bold',
  },
  OnBoardingP: {
    color: '#FFFFFF',
    fontSize: 17,
    marginVertical: 10,
    lineHeight:25
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
    color: '#111111',
    fontSize: 19,
    fontWeight: 'bold',
    fontFamily: 'Gotham',
  },
  homeBtn: {
    height: 50,
    width: 200,
    backgroundColor: '#5AFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 35,
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
