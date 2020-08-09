import React, {Component} from 'react';
import {Group, View, Text} from 'react-native';
import {ToggleButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HomeFilters extends Component {
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
          marginTop: 10,
          alignItems: 'center' ,  
          justifyContent: 'center',
          marginBottom: 5,
          paddingRight: - 20 , 
        }}>
        <Text style={{flex: 0.5, textTransform: 'capitalize', color:'white'}}>
          {this.state.value}
        </Text>
        <ToggleButton.Group
          onValueChange={(value) => {
            this.changeValue(value);
          }}
          value={this.state.value}>
          <ToggleButton
            icon={() => <Icon name="check-circle" size={24} color='"#FFFFFF" '/>}
            value="available"
          />
          <ToggleButton
            icon={() => <Icon name="bookmark" size={24} color="#FFFFFF" />}
            value="booked"
          />
          <ToggleButton
            icon={() => <Icon name="build" size={24} color="#FFFFFF" />}
            value="damaged"
          />
        </ToggleButton.Group>
      </View>
    );
  }
}
