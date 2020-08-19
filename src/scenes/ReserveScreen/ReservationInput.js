import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
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
        userFirstName: 'Benbakhta',
        profileImage:
          'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
        id: 2,
      },
      {
        userFirstName: 'Benbakhta',
        profileImage:
          'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png',
        id: 3,
      }],
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

  handleChange = (index) => {
    this.props.updateListed(index);
  };

  updateResults = () => {
    let toShow_inter = [];
    let exists = false;
    if (this.state.query.length > 1) {
      this.state.list.map((user, index) => {
      this.state.listedUsers.map((listed) => {
        if(JSON.stringify(listed) == JSON.stringify(user)){
          exists = true;
        }
      })
        if (
          user.userFirstName
            .toLowerCase()
            .indexOf(this.state.query.toLowerCase()) > -1 && !exists
        ) {
          toShow_inter.push(user);
        }
      });
      if (JSON.stringify(toShow_inter) != JSON.stringify(this.state.toShow)) {
        this.setState({toShow: toShow_inter});
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
        <ScrollView
          style={[
            styles.list,
            {
              opacity:
                this.state.query.length >= 3 && this.state.toShow.length >= 1
                  ? 1
                  : 0,
            },
          ]}>
          {this.state.toShow.map((toshow, index) => (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: 40,
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    color: '#000',
    position: 'absolute',
    top: 45,
    maxHeight: 200,
  },
});
