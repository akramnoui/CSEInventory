import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import DateRangePicker from './DateRangePicker';
import ReserveView from './ReserveView';
import UsersInput from './UsersInput';
import Modal from 'react-native-modal';
import {screenHeight} from './Dimensions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class ReserveScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      elementPic:
        'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    };
  }

  onSubmit = () => {
    if (
      this.state.title == '' ||
      this.state.description == '' ||
      this.state.startDate == '' ||
      this.state.endDate == ''
    ) {
      const alertMsg =
        ' You have forgot to fill in the : \n' +
        (this.state.title == '' ? '- The title' : '') +
        (this.state.description == '' ? '\n- The description' : '') +
        (this.state.startDate == '' || this.state.endDate == ''
          ? '\n- The dates'
          : '');
      alert(alertMsg);
      return;
    }
    const data = {
      reservationTitle: this.state.title,
      reservationBody: this.state.description,
      startsAt: this.state.startDate,
      endsAt: this.state.endDate,
    };

    fetch('https://cse-inventory-api.herokuapp.com/reservations/add', {
      method: 'post',
      body: data,
    })
      .then((res) => {
        console.log(res);
        alert('Added succesfully !');
        this.props.navigation.navigate('Articles');
      })
      .catch((error) => {
        console.log('zerba3i');
      });
  };

  render() {
    return (
      <ReserveView>
        <Text style={styles.Title}>Title</Text>
        <TextInput
          style={styles.input}
          value={this.state.title}
          placeholder="Title..."
          onChangeText={(text) => {
            this.setState({title: text});
          }}
        />
        <TextInput
          multiline
          numberOfLines={4}
          style={styles.inputMulti}
          placeholder="Description"
          editable
          onChangeText={(text) => {
            this.setState({description: text});
          }}
          value={this.state.description}
        />
        <UsersInputModal />
        <DateRangePicker
          initialRange={['2018-04-01', '2018-04-10']}
          onSuccess={(s, e) => {
            this.setState({startDate: s, endDate: e});
          }}
          theme={{markColor: '#3498DB', markTextColor: 'white'}}
        />
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            this.onSubmit();
          }}>
          <Text style={{color: '#FFF'}}> Borrow ! </Text>
        </TouchableOpacity>
      </ReserveView>
    );
  }
}

const UsersInputModal = () => {
  const [visible, setVisible] = useState(false);
  const [ToList, setToList] = useState([]);

  dismiss = () => {
    setVisible(false);
  };

  setSelectedList = (list) => {
    setToList(list);
  };

  const short = ToList;

  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: '#5AFFFF',
          height: 50,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
        onPress={() => {
          setVisible(!visible);
        }}>
        <Text style={{marginRight: 15}}>Allowed Users</Text>
        {short.map((list) => (
          <Image
            source={{uri: list.profileImage}}
            style={{
              height: 35,
              width: 35,
              marginRight: -15,
              borderRadius: 35,
            }}
          />
        ))}
      </TouchableOpacity>
      <Modal
        avoidKeyboard={true}
        useNativeDriver={false}
        isVisible={visible}
        onSwipeComplete={dismiss}
        swipeDirection="right"
        onBackdropPress={dismiss}>
        <View
          style={{
            backgroundColor: '#fff',
            height: screenHeight / 2,
            borderRadius: 30,
          }}>
          <Text
            style={{
              fontFamily: 'gotham',
              fontSize: 28,
              fontWeight: 'normal',
              marginLeft: 30,
              marginTop: 30,
            }}>
            Allowed Users
          </Text>

          <KeyboardAwareScrollView
            resetScrollToCoords={{x: 0, y: 0}}
            contentContainerStyle={{height: '100%'}}
            keyboardShouldPersistTaps={'always'}
            scrollEnabled={true}>
            <UsersInput
              marginH={40}
              listHandler={(array) => {
                setSelectedList(array);
              }}
              toList={ToList}
            />
          </KeyboardAwareScrollView>
          <TouchableOpacity
            onPress={dismiss}
            style={{
              margin: 30,
              width: 100,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              height: 40,
              alignSelf: 'flex-end',
              backgroundColor: '#5aafff',
            }}>
            <Text style={{color: '#fff'}}>Validate</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  imageTitle: {
    position: 'absolute',
    bottom: 30,
    left: 25,
    color: 'white',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderRadius: 5,
    padding: 10,
    color: '#000',
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: '#FFF',
  },
  inputMulti: {
    textAlignVertical: 'top',
    borderRadius: 5,
    padding: 10,
    color: '#000',
    marginVertical: 5,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  Button: {
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498DB',
    fontWeight: 'bold',
    marginTop: 20,
  },
  appBar: {
    flexDirection: 'row',
    height: 20,
    marginTop: 15,
    marginHorizontal: 30,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Title: {
    fontSize: 30,
    marginBottom: 10,
  },
});
