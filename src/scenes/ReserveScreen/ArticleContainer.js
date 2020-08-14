import React from 'react';
import {View, Text, Animated, StyleSheet, Dimensions} from 'react-native';
import {screenWidth, screenHeight} from './Dimensions';

const ArticleContainer = ({scrollY, imageSource, imageHeight}) => {
  return (
    <Animated.View
      source={{uri: imageSource}}
      style={
        (styles.topImage,
        {
          transform: {
            scale: scrollY.interpolate({
              inputRange: [0, imageHeight],
              outputRange: [1.2, 1],
              extrapolate: 'clamp',
            }),
          },
        })
      }
    />
  );
};

const styles = StyleSheet.create({
  topImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    height: 450,
    backgroundColor: '#f6f6f6',
  },
});

export default ArticleContainer;
