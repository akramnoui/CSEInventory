import React, {Component} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class ArticleCard extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.detail}>
        <View>
          <Image
            source={{uri: this.props.info.objectImage}}
            style={{
              height: 126,
              width: 300,
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
              {this.props.info.objectName}
            </Text>
            <Text numberOfLines={2} style={styles.description}>
              {this.props.info.objectState}
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
    width: 300,
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
