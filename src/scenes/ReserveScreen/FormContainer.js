import React from 'react';
import {View, Text, Animated, StyleSheet, Dimensions} from 'react-native';
import {screenWidth, screenHeight} from './Dimensions';

const FormContainer = ({scrollY, imageHeight, ...props}) => {
  const animateBorderRadius = scrollY.interpolate({
    inputRange: [0, 450],
    outputRange: [40, 20],
  });
  return (
    <Animated.ScrollView
      contentContainerStyle={{
        paddingBottom: 200,
        backgroundColor: 'transparent',
        marginTop: -100,
      }}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: scrollY}}}],
        {
          useNativeDriver: true,
        },
        () => {},
      )}
      style={{paddingTop: imageHeight}}>
      <Animated.View
        style={
          (styles.block,
          {
            borderTopRightRadius: animateBorderRadius,
            borderTopLeftRadius: animateBorderRadius,
          })
        }>
        {props.children}
      </Animated.View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#fff',
    width: screenWidth,
    height: screenHeight,
  },
});

export default FormContainer;
