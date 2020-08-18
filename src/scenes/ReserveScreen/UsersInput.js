import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from './Dimensions';
import {Chip} from 'react-native-paper';
import ReservationInput from './ReservationInput';

export class UsersInput extends Component {
  state = {
    list: ['7med', 'ali', 'benbakhta', 'benbakhtat', 'salima'],
    query: '',
    toShow: [''],
    listedUsers: [''],
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
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <View
          style={{
            alignSelf: 'center',
            width: screenWidth - 60,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}>
          <Chip
            avatar={<Image source={require('../../assets/Articles/1.png')} />}
            onPress={() => console.log('Pressed')}
            mode="outlined"
            style={{
              height: 45,
              borderRadius: 45,
              justifyContent: 'center',
              padding: 6,
              width: 190,
              margin: 5,
            }}>
            Broken Item
          </Chip>
          <Chip
            avatar={<Image source={require('../../assets/Articles/1.png')} />}
            onPress={() => console.log('Pressed')}
            mode="outlined"
            style={{
              height: 45,
              borderRadius: 45,
              justifyContent: 'center',
              padding: 6,
              width: 140,
              margin: 5,
            }}>
            Broken Item
          </Chip>
          <ReservationInput />
        </View>
      </View>
    );
  }
}

const User = (user) => {
  return (
    <Chip
      avatar={<Image source={require('../../assets/Articles/1.png')} />}
      onPress={() => console.log('Pressed')}
      mode="outlined"
      style={{
        height: 45,
        borderRadius: 45,
        justifyContent: 'center',
        padding: 6,
        width: 190,
      }}>
      Broken Item
    </Chip>
  );
};

const styles = StyleSheet.create({
  visible:{
    
  }
})

export default UsersInput;
