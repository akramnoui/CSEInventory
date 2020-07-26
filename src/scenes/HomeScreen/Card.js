import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Avatar, ThemeConsumer} from 'react-native-elements';

import React from 'react';
import {color} from 'react-native-reanimated';

class Card extends React.Component {
  state = {};
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <Avatar
            size="medium"
            containerStyle={styles.Avatar}
            rounded
            source={{uri: this.props.imageSrc}}
          />
          <View style={styles.infos}>
            <Text style={styles.NameText}>{this.props.user}</Text>
            <Text style={styles.itemText}>{this.props.objectName}</Text>
          </View>
        </View>

        <Text style={styles.status}>{this.props.status}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 73,
    width: 300,
    backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    elevation: 0.5,
  },
  infos: {
    display: 'flex',
  },
  Avatar: {
    marginLeft: 15,
    marginRight: 20,
  },
  NameText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  itemText: {
    marginLeft: 3,
  },
  status: {
    position: 'relative',
    right: 0,
    fontSize: 16,
    marginRight: 15,
    color: '#0009',
    textAlign: 'right',
    flex: 1,
  },
});
export default Card;
