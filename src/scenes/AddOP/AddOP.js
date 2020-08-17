import React, {Component} from 'react';
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native';
import AppBar from '../GoodsList/AppBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-picker';
import {IconButton} from 'react-native-paper';
import {Dropdown} from 'react-native-material-dropdown';

export default class AddOP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objectImage: null,
      reportTitle: '',
      reportBody: '',
    };
  }

  onPickImage = async () => {
    const options = {
      noData: true,
      title: 'Take the object picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = response;

        this.setState({
          objectImage: source,
        });
      }
    });
  };

  onSubmit = (photo) => {
    if (this.state.reportTitle == '' || this.state.reportBody == '') {
      const alertMsg =
        ' You have forgot to fill in the : \n' +
        (this.state.reportTitle == '' ? '- The title' : '') +
        (this.state.reportBody == '' ? '\n- The description' : '');
      alert(alertMsg);
      return;
    }

    const data = new FormData(photo);
    if (photo != null) {
      data.append('reportImage', {
        name: photo.fileName,
        type: photo.type,
        uri:
          Platform.OS === 'android'
            ? photo.uri
            : photo.uri.replace('file://', ''),
      });
    }

    data.append('reportBody', this.state.reportBody);
    data.append('reportTitle', this.state.reportTitle);

    fetch('https://cse-inventory-api.herokuapp.com/lostobjects/add', {
      method: 'post',
      body: data,
    })
      .then((res) => {
        console.log(res);
        alert('Added succesfully !');
      })
      .catch((error) => {
        console.log('zerba3i');
      });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: '#000',
            paddingTop: 5,
            padding: 30,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.appBar}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.goBack(null);
                }}
                style={{
                  flexDirection: 'row',
                }}>
                <Text>
                  <Icon name="keyboard-backspace" size={24} color="#5AFFFF" />
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  flexDirection: 'row',
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: '#5AFFFF',
                }}>
                Add Missing Object
              </Text>
            </View>
          </View>
          <View style={{flex:1}}>
            <Image
              source={
                this.state.objectImage != null
                  ? {uri: this.state.objectImage.uri}
                  : {
                      uri:
                        'https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-solid-color-background.jpg',
                    }
              }
              style={{
                height: '100%',
                resizeMode: 'cover',
                alignSelf: 'stretch',
                borderRadius: 10,
              }}
            />
            <IconButton
              color="#5AFFFF"
              size={25}
              icon="camera"
              style={{
                alignSelf: 'center',
                position: 'absolute',
                bottom: 10,
              }}
              onPress={this.onPickImage}
            />
          </View>
          <TextInput
            style={styles.input}
            value={this.state.reportTitle}
            placeholderTextColor='#5AFFFF'
            placeholder="Title..."
            onChangeText={(text) => {
              this.setState({reportTitle: text});
            }}
          />
          <TextInput
            multiline
            placeholderTextColor='#5AFFFF'
            numberOfLines={6}
            style={styles.inputMulti}
            placeholder="Description..."
            editable
            onChangeText={(text) => {
              this.setState({reportBody: text});
            }}
            value={this.state.reportBody}
          />
          <View style={{flex: 0.25}}></View>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              this.onSubmit(this.state.objectImage);
            }}>
            <Text style={{color: '#000'}}> Add missing object </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5AFFFF',
    fontWeight: 'bold',
  },
  input: {
    height: 60,
    borderRadius: 5,
    marginTop:15,
    padding: 20,
    color: '#5AFFFF',
    marginBottom: 5,
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#5AFFFF',
  },
  inputMulti: {
    textAlignVertical: 'top',
    marginTop:10,
    borderRadius: 5,
    padding: 20,
    color: '#5AFFFF',
    marginVertical: 5,
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#5AFFFF',
  },
  appBar: {
    flexDirection: 'row',
    height: 40,
    marginTop: 15,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
