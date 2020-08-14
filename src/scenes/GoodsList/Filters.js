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
        <Text
          style={{flex: 0.5, textTransform: 'capitalize', color: '#5AFFFF'}}>
          {this.state.value}
        </Text>
        <ToggleButton.Group
          onValueChange={(value) => {
            this.changeValue(value);
          }}
          value={this.state.value}>
          <ToggleButton
            icon={() => (
              <Icon
                name="check-box"
                size={24}
                color={this.state.value == 'Available' ? '#5AFFFF' : '#FFFFFF'}
              />
            )}
            value="Available"
          />
          <ToggleButton
            icon={() => <Icon name="alarm-on" size={24} 
            color={this.state.value == 'Booked' ? '#5AFFFF' : '#FFFFFF'}
            />}
            value="Booked"
          />
          <ToggleButton
            icon={() => <Icon name="broken-image" size={24} 
            color={this.state.value == 'Damaged' ? '#5AFFFF' : '#FFFFFF'} />}
            value="Damaged"
          />
        </ToggleButton.Group>
      </View>
    );
  }
}
