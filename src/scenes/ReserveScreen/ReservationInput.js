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
    list: this.props.list,
    query: '',
    toShow: [],
    listedUsers: this.props.listedUsers,
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
    //To optimize soon
    let toShow_inter = [];
    let listUsers = [];
    this.state.list.map((item1) => {
      if (
        this.state.listedUsers.find((item2) => {
          return JSON.stringify(item1) == JSON.stringify(item2);
        }) == undefined
      ) {
        listUsers.push(item1);
      }
    });
    if (this.state.query.length > 1) {
      listUsers.map((user, index) => {
        if (
          user.userFirstName
            .toLowerCase()
            .indexOf(this.state.query.toLowerCase()) > -1
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
          keyboardShouldPersistTaps={'always'}
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
                onPress={() => {
                  this.props.addHandler(toshow.id);
                  this.setState({query: ''});
                }}
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
