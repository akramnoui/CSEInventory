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
  ScrollView
} from 'react-native';
import AppBar from '../GoodsList/AppBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-picker';
import {IconButton} from 'react-native-paper';
import {Dropdown} from 'react-native-material-dropdown';


export default class AddAnomaly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anomalyPic: null,
      title: '',
      description: '',
      objectState: '',
    };
  }

  onPickImage = async () => {
    const options = {
      noData: true,
      title: 'Take the anomaly picture',
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
          anomalyPic: source,
        });
      }
    });
  };

  onSubmit = (photo) => {
    if (this.state.title == '' || this.state.description == '') {
      const alertMsg =
        ' You have forgot to fill in the : \n' +
        (this.state.title == '' ? '- The title' : '') +
        (this.state.description == '' ? '\n- The description' : '');
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

    if (this.state.objectState != null) {
      data.append('objectState', this.state.objectState);
    }
    data.append('reportBody', this.state.description);
    data.append('reportTitle', this.state.title);

    fetch('https://cse-inventory-api.herokuapp.com/reports/add', {
      method: 'post',
      body: data,
    })
      .then((res) => {
        console.log(res);
        alert('Added succesfully !');
        this.props.navigation.navigate('AnomaliesView');
      })
      .catch((error) => {
        console.log('zerba3i');
      });
  };

  render() {
    let states = [
      {
        value: 'Broken',
      },
      {
        value: 'Lost',
      },
    ];

    return (
      <KeyboardAvoidingView
        behavior="height"
        style={{backgroundColor: '#000000', flex: 1, flexDirection:'column'}}>
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: '#000000',
            paddingTop: 5,
            padding: 30,
            flexDirection:'column'
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
                Add damaged item
              </Text>
            </View>
          </View>
          <View style={{flex:1}}>
            <Image
              source={
                this.state.anomalyPic != null
                  ? {uri: this.state.anomalyPic.uri}
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
            value={this.state.title}
            placeholderTextColor='#5AFFFF'
            placeholder="Title..."
            onChangeText={(text) => {
              this.setState({title: text});
            }}
          />
          <TextInput
            multiline
            numberOfLines={5}
            style={styles.inputMulti}
            placeholderTextColor='#5AFFFF'
            placeholder="Description..."
            editable
            onChangeText={(text) => {
              this.setState({description: text});
            }}
            value={this.state.description}
          />
          <Dropdown
            containerStyle={styles.dropDown}
            placeholder="State"
            style={{color:'#5AFFFF'}}
            data={states}
            labelTextStyle={{color:'#5AFFFF'}}
            itemTextStyle={{color:'#5AFFFF'}}
            baseColor='#5AFFFF'
            placeholderTextColor='#5AFFFF'
            overlayStyle={{padding: 10}}
            dropdownMargins={{ min: 30, max: 30 }}
            onChangeText={(value) => {
              this.setState({objectState: value});
            }}
          />
          <View style={{flex: 0.25}}></View>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              this.onSubmit(this.state.anomalyPic);
            }}>
            <Text style={{color: '#000000'}}> Add Anomaly </Text>
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
  dropDown: {
    height: 60,
    borderRadius: 5,
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#5AFFFF',
    color: '#5AFFFF',
    marginTop: 10,
    marginBottom: 5,
    justifyContent:'flex-end',
    paddingHorizontal: 10, 
    paddingBottom:3   
  },
  appBar: {
    flexDirection: 'row',
    height: 50,
    marginTop: 15,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
