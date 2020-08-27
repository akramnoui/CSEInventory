import React, {Component} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class LostCard extends Component {
  componentDidMount(){
    console.log(  'heey ' + this.props.info.reportTitle)
  }
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.detail}>
        <View>
          <Image
            source={{uri: this.props.info.objectImage}}
            style={{
              height: 126,
              resizeMode: 'cover',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
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
               10 am in the spot
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 217,
    width: 158 , 
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
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
