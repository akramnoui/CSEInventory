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
  componentDidMount() {
    console.log(this.props.route.params.display);
    this.setState({
      item: this.props.route.params.display,
    });
    console.log(this.state.item);
  }
  _goBack = () => this.props.navigation.navigate('Home');
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <IconButton
          color="#5AFFFF"
          size={35}
          icon="keyboard-backspace"
          style={{
            backgroundColor: '#00000040',
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
              style={{height: '100%', width: '100%', resizeMode: 'cover'}}
              source={{uri: this.state.item.objectImage}}
            />
          </View>
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
              textShadowColor: 'rgba(0, 0, 0, 1)',
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 15,
            }}>
            {this.state.item.objectName}
          </Text>
          <Disponible disponible={true}></Disponible>
          <View
            style={{
              height: 55,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 50,
            }}>
            <TouchableOpacity style={styles.Button}>
              <Text style={{color: '#000000', fontSize: 18}}> Take Now </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button1}
              onPress={() => {
                this.props.navigation.push('Book');
              }}>
              <Text style={{color: '#5AFFFF', fontSize: 18}}>
                {' '}
                Book for later{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    alignSelf: 'flex-start',
    margin: 10,
  },
  Button1: {
    borderRadius: 15,
    height: 50,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#5AFFFF',
    backgroundColor: '#000000',
    fontWeight: 'bold',
  },
  Button: {
    borderRadius: 15,
    height: 50,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5AFFFF',
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
    height: 320,
    width: '100%',
  },
  bottomView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 36.5,

    height: 400,
    backgroundColor: '#000000',
  },
});

export default ItemPage;
