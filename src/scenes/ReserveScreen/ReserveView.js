import React, { useState } from 'react';
import { Animated, SafeAreaView, StatusBar, StyleSheet, View, Text } from 'react-native';
import { screenHeight } from './Dimensions';
import FormContainer from './FormContainer';
import ArticleContainer from './ArticleContainer';

const ReserveView = (props) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const imageSource = 'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ArticleContainer 
        scrollY = {scrollY}
        imageSource={imageSource}
        imageHeight={500}
        />
        <FormContainer
        scrollY={scrollY}
        imageHeight={500}
        >
          <View style={{
            marginTop: 40,
            marginLeft: 20,
            marginRight: 20,
            display: 'flex',
            flexDirection: 'column',
          }}>
            {props.children}
          </View>
        </FormContainer>
      </SafeAreaView>
    </View>
  )
}

export default ReserveView


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: screenHeight,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor:"#fff"
  },
})