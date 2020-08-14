import React from 'react';
import {View, Text, Animated, StyleSheet, Dimensions} from 'react-native';
import {screenWidth, screenHeight} from './Dimensions';

const FormContainer = ({scrollY, imageHeight, ...props}) => {
  const animateBorderRadius = scrollY.interpolate({
    inputeRange: [0, 450],
    ourputRange: [40, 20],
  });
  return (
    <Animated.ScrollView
      contentContainerStyle={{
        paddingBottom: 200,
        backgroundColor: 'transparent',
        marginTop: -100,
      }}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
      style={{paddingTop: imageHeight}}>
      <Animated.View
        style={
          (styles.block,
          {
            borderTopRightRadius: animateBorderRadius,
            borderTopLeftRadius: animateBorderRadius,
          })
        }>
        {props.form}
      </Animated.View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#fff',
    width: deviceWidth,
    height: deviceHeight,
  },
});

export default FormContainer;
