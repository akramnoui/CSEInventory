import React, { Component } from "react";
import { Group, View, Text } from "react-native";
import { ToggleButton } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  componentDidMount() {
    this.setState({ value: "mobile" });
  }

  state = {
    value: "",
  };

  changeValue = (value) => {
    this.setState({ value: value });
  };

  render() {
    return (
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 10, justifyContent:"center", marginBottom: 5 }}
      >
        <Text style={{ flex: 0.5, textTransform: "capitalize" }}>
          {this.state.value}
        </Text>
        <ToggleButton.Group
          onValueChange={(value) => {
            this.changeValue(value);
          }}
          value={this.state.value}
        >
          <ToggleButton
            icon={() => <Icon name="search" size={24} color="black" />}
            value="mobile"
          />
          <ToggleButton
            icon={() => <Icon name="search" size={24} color="black" />}
            value="immobile"
          />
          <ToggleButton
            icon={() => <Icon name="search" size={24} color="black" />}
            value="abimé"
          />
        </ToggleButton.Group>
      </View>
    );
  }
}
