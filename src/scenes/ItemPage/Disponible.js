import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {screenHeight, screenWidth} from '../ReserveScreen/Dimensions';

class ItemPage extends React.Component {
  state = {};
  render() {
    if (this.props.disponible == true) {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, fontWeight: '200', color: 'white'}}>
            {' '}
            Available{' '}
          </Text>
          <Ionicons name="checkmark-circle" color="white" size={35}></Ionicons>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, fontWeight: '200', color: 'white'}}>
            Not Available
          </Text>
          <Ionicons name="close-circle" color="white" size={35}></Ionicons>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: screenWidth-60,
    flexDirection:'row',
    marginHorizontal: 30,
    backgroundColor: '#111111',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
  },
});

export default ItemPage;
