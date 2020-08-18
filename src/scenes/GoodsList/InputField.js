import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  executeSearch = () => {
    this.props.changeHandler(this.state.query);
  };


  changeQuery = (text) => {
    this.setState({query: text});
    this.updateResults();
  };

  updateResults = () => {
    let toShow_inter = [''];
    if (this.state.query.length > 1) {
      this.state.list.map((user) => {
        if (user.indexOf(this.state.query.toLowerCase()) > -1) {
          toShow_inter.push(user);
        }
      });
      if (JSON.stringify(toShow_inter) != JSON.stringify(this.state.toShow)) {
        this.setState({toShow: toShow_inter});
        console.log('Update');
      }
    }
  };
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            this.setState({query: text});
          }}
          placeholder={this.props.ph}
          placeholderTextColor="grey"
        />
        <TouchableOpacity onPress={this.executeSearch.bind(this)}>
          <Text>
            <Icon name="search" size={24} color="black" />
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
    color: '#3498DB',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 4,
    marginVertical: 0,
  },
});
