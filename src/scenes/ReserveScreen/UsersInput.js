import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from './Dimensions';
import {Chip} from 'react-native-paper';
import ReservationInput from './ReservationInput';

export class UsersInput extends Component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
  }
  state = {
    list: [
      {
        userFirstName: '7med',
        profileImage:
          'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
        id: 0,
      },
      {
        userFirstName: 'Benbakhtat',
        profileImage:
          'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
        id: 1,
      },
      {
        userFirstName: 'Benbakhta',
        profileImage:
          'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
        id: 2,
      },
    ],
    listedUsers: this.props.toList,
  };

  deleteUser = (index) => {
    let array = this.state.listedUsers;
    array.splice(array[index], 1);
    this.setState({listedUsers : array});
    this.props.listHandler(array);
  };

  addUser = (index) => {
    let array = this.state.listedUsers;
    array.push(this.state.list[index]);
    this.setState({listedUsers : array});
    this.props.listHandler(array);
  };

  changeQuery = (text) => {
    this.setState({query: text});
    this.updateResults();
  };

  render() {
    return (
        <View
          style={{
            alignSelf: 'center',
            width: screenWidth - 2*this.props.marginH,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}>
          {this.state.listedUsers.map((user, index) => {
            let alternate = Math.pow(-1, Math.round(index / 2)) == -1; //(index+3) % 3 == 0 ? alternate : !alternate;
            const length = (screenWidth - 40) / 2 - 40;
            return (
              <Chip
                key={index}
                avatar={
                  <Image
                    source={{uri: user.profileImage}}
                    style={{height: 35, width: 35, borderRadius: 40}}
                  />
                }
                onPress={() => this.deleteUser(index)}
                mode="outlined"
                accessibilityLabel="test"
                style={{
                  height: 45,
                  borderRadius: 45,
                  justifyContent: 'center',
                  width: alternate ? length : length + 40,
                  margin: 5,
                }}>
                {user.userFirstName}
              </Chip>
            );
          })}
          <ReservationInput
            list={this.state.list}
            listedUsers={this.state.listedUsers}
            addHandler={(id) => {
              this.addUser(id);
            }}
          />
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
  visible: {},
});

export default UsersInput;
