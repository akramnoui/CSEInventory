import React from 'react';
import {View, Text, Animated, StyleSheet, Dimensions} from 'react-native';
import {screenWidth, screenHeight} from './Dimensions';

const ArticleContainer = ({scrollY, imageSource, imageHeight}) => {
  return (
    <Animated.Image
      source={{uri: 'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}}
      style={[
        styles.topImage,
        {
          transform: [{
            scale: scrollY.interpolate({
              inputRange: [0, imageHeight],
              outputRange: [1.2, 1],
              extrapolate: 'clamp',
            }),
          },
        ]}
      ]}
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
    height: 330,
    backgroundColor: '#fff',
  },
});

export default ArticleContainer;
