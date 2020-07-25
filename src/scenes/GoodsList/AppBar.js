import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class AppBar extends Component {
  render() {
    return (
        <View style={styles.appBar}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              flex: 0.5,
            }}>
            <Text>
              <Icon name="menu" size={24} color="black" />
            </Text>
          </TouchableOpacity>
          <Text style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            {this.props.title}
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
