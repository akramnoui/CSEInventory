import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class ReservationInput extends Component {
  state = {
    list: [
      {
        userFirstName: '7med',
        profileImage:
          'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
        id: 1,
      },
      {
        userFirstName: 'Amir',
        profileImage:
          'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
        id: 2,
      },
      {
        userFirstName: 'Majid',
        profileImage:
          'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
        id: 3,
      },
    ],
    query: '',
    toShow: [],
    listedUsers: [],
  };

  changeQuery = (text) => {
    this.setState({query: text});
  };

  componentDidUpdate() {
    this.updateResults();
  }

  updateResults = () => {
    let toShow_inter = [];
    console.log(this.state.query);
    if (this.state.query.length > 1) {
      this.state.list.map((user) => {
        if (user.userFirstName.indexOf(this.state.query.toLowerCase()) > -1) {
          toShow_inter.push({user});
        }
      });
      console.log(
        JSON.stringify(toShow_inter) + '\n' + JSON.stringify(this.state.toShow),
      );
      if (JSON.stringify(toShow_inter) != JSON.stringify(this.state.toShow)) {
        this.setState({toShow: toShow_inter});
        console.log('Update');
      } else if (this.state.query.length < 1) {
        this.setState({toShow: []});
      }
    }
  };

  UserComponent = (user) => {
    const name = user.userFirstName;
    const pic = user.profileImage;
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          height: 50,
          width: '100%',
        }}>
        <Image source={{uri: pic}} />
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Write name ..."
          style={{marginHorizontal: 5, width: 120}}
          value={this.state.query}
          onChangeText={(text) => {
            this.changeQuery(text);
          }}
        />
        <View
          style={[
            styles.list,
            {
              opacity:
                this.state.query.length >= 3 && this.state.toShow.length >= 1
                  ? 1
                  : 0,
            },
          ]}>
          {this.state.toShow.map((toshow) => (
            <TouchableOpacity
              key={toshow.id}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: 60,
                width: '100%',
              }}>
              <Image
                source={{uri: toshow.profileImage}}
                style={{
                  height: 35,
                  width: 35,
                  marginRight: 10,
                  borderRadius: 35,
                }}
              />
              <Text>{toshow.userFirstName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    backgroundColor: '#ccc',
    color: '#000',
    position: 'absolute',
    top: 45,
  },
});
