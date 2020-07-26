import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FAB} from 'react-native-paper';
import {Button} from 'react-native-elements';
import Disponible from './Disponible';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconButton} from 'react-native-paper';

class ItemPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
    };
  }
  componentDidMount(){
    console.log(this.props.route.params.display)
     this.setState({
       item: this.props.route.params.display
     })
     console.log(this.state.item)
  }


  _goBack = () => this.props.navigation.navigate('Home');
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <IconButton
          color="#FFFF"
          size={35}
          icon="keyboard-backspace"
          style={{
            alignSelf: 'flex-start',
            position: 'absolute',
            zIndex: 10,
          }}
          onPress={() => {
            this.props.navigation.goBack(null);
          }}
        />
         <View style={styles.topView}>
        <View style={styles.ItemImage}>
          <Image
            style={{height: "100%", width: "100%", resizeMode: 'cover'}}
            source={{uri: this.state.item.objectImage}}
          />
        </View>

      <Text style={styles.articles}>Baniére Hack it 3</Text>
    </View>
        <View style={styles.bottomView}>
          <Text
            style={{
              fontSize: 27,
              fontWeight: 'bold',
              position: 'absolute',
              marginTop: -40,
              alignSelf: 'flex-start',
              marginLeft: 20,
              color: 'white',
            }}>
            {this.state.item.objectName}
          </Text>
          <Disponible disponible="false"></Disponible>

          <View
            style={{
              height: 55,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 50,
            }}>
            <TouchableOpacity style={styles.Button}>
              <Text style={{color: '#FFF'}}> Add Anomaly </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button1}
              onPress={() => {
                this.props.navigation.push('Book');
              }}>
              <Text style={{color: '#FFF'}}> Book Item </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const TopView = () => {
  return (
    <View style={styles.topView}>
      <View style={styles.ItemImage}>
        <Image
          style={{height: '100%', width: '100%', resizeMode: 'cover'}}
          source={{uri: this.props.image}}
        />
      </View>

      <Text style={styles.articles}>Baniére Hack it 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    alignSelf: 'flex-start',
    margin: 10,
  },
  Button1: {
    borderRadius: 5,
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F3F3F',
    fontWeight: 'bold',
  },
  Button: {
    borderRadius: 5,
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    fontWeight: 'bold',
  },
  bottomBtn: {},
  textbtn: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },

  topView: {
    height: 270,
    width: '100%',
  },
  bottomView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 36.5,

    height: 400,
    backgroundColor: 'white',
  },
});

export default ItemPage;
