import React from 'react';
import {View, Text, Animated, StyleSheet, Dimensions} from 'react-native';
import {screenWidth, screenHeight} from './Dimensions';

const FormContainer = ({scrollY, imageHeight, ...props}) => {
  const animateBorderRadius = scrollY.interpolate({
    inputRange: [0, 450],
    outputRange: [40, 0],
  });
  console.log(screenWidth)
  return (
    <Animated.ScrollView
    showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 140,
        backgroundColor: 'transparent',
        marginTop: -200,
        
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
        style={[
          styles.block,
          {
            borderTopRightRadius: animateBorderRadius,
            borderTopLeftRadius: animateBorderRadius,
          }
        ]}>
        {props.children}
      </Animated.View>
      <View style={{height: screenHeight*0.3}}></View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: "#fff",
    width: screenWidth,
  },
});

export default FormContainer;
