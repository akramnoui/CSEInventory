import React, {Component} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class ArticleCard extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View>
          <Image
            source={{uri: this.props.info.uri}}
            style={{height: 120, width: 163, resizeMode: 'cover'}}
          />
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 3,
              flexDirection: 'column',
            }}>
            <Text numberOfLines={1} style={styles.title}>
              {this.props.info.title}
            </Text>
            <Text numberOfLines={2} style={styles.description}>
              {this.props.info.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 196,
    width: 163,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginBottom: 3,
  },
  description: {
    fontSize: 14,
    fontWeight: 'normal',
    flexWrap: 'wrap',
  },
});
