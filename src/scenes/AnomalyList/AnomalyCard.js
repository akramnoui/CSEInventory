import React, {Component} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {screenHeight, screenWidth} from '../ReserveScreen/Dimensions';

export default class AnomalyCard extends Component {
  componentDidMount(){
    console.log(this.props.info.reportImage)
  }
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.detail}>
        <View>
          <Image
            source={{uri: this.props.info.reportImage}}
            style={{
              height: 126,
              resizeMode: 'cover',
              borderTopRightRadius: 4,
              borderTopLeftRadius: 4,
            }}
          />
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 3,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Text numberOfLines={1} style={styles.title}>
              {this.props.info.reportTitle}
            </Text>
            <Text numberOfLines={2} style={styles.description}>
             
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 206,
    width: screenWidth -60,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginBottom: 3,
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    fontWeight: 'normal',
    flexWrap: 'wrap',
  },
});
