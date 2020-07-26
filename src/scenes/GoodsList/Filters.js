import React, {Component} from 'react';
import {Group, View, Text} from 'react-native';
import {ToggleButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  componentDidMount() {
    this.setState({value: null});
  }

  state = {
    value: '',
  };

  changeValue = (value) => {
    this.setState({value: value});
    this.props.changeHandler(value);
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          justifyContent: 'center',
          marginBottom: 5,
        }}>
        <Text style={{flex: 0.5, textTransform: 'capitalize', color:"#102236"}}>
          {this.state.value}
        </Text>
        <ToggleButton.Group
          onValueChange={(value) => {
            this.changeValue(value);
          }}
          value={this.state.value}>
          <ToggleButton
            icon={() => <Icon name="move-to-inbox" size={24} color="#102236" />}
            value="mobile"
          />
          <ToggleButton
            icon={() => <Icon name="home" size={24} color="#102236" />}
            value="immobile"
          />
          <ToggleButton
            icon={() => <Icon name="mood-bad" size={24} color="#102236" />}
            value="abimé"
          />
        </ToggleButton.Group>
      </View>
    );
  }
}
