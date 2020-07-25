import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class InputField extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder={this.props.ph} />
        <TouchableOpacity>
          <Text>
            <Icon name="search" size={24} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    marginRight: 15,
    color: "white",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    backgroundColor: "#222",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    padding: 10,
    borderRadius: 5,
    marginVertical: 0,
  },
});
