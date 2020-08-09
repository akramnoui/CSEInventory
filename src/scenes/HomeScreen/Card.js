import {View, SafeAreaView, StyleSheet, Text , Image} from 'react-native';
import {Avatar, ThemeConsumer} from 'react-native-elements';

import React from 'react';
import {color} from 'react-native-reanimated';

class Card extends React.Component {
  state = {};
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1, flexDirection: 'column'  , justifyContent: 'flex-start'  ,  backgroundColor:'grey'}}>

        <View style={{flexDirection: 'row' , margin: 13}}>
          <Avatar
            size="small"
            containerStyle={styles.Avatar}
            rounded
            source={{uri: this.props.imageSrc}}
          />
          <View style={styles.infos}>
            <Text style={styles.NameText}>{this.props.user}</Text>
            <Text style={styles.itemText}>{this.props.objectName}</Text>
          </View>
          </View>
          <Text style={styles.status}>{this.props.status}</Text>
          

        </View>
        <View style={styles.objectImage}>
        <Image
            source={{uri: this.props.imageSrc}}
            style={{
              height: 167,
              width: 167,
              resizeMode: 'cover',
              
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  objectImage: {
    height: 167,
    width: 167,
  } , 

  container: {
    height: 172,
    width: 330,
    backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    elevation: 0.5,
  },
  infos: {
    display: 'flex',
  },
  Avatar: {
    marginLeft: 3,
    marginRight: 15,
  },
  NameText: {
    fontWeight: 'bold',
    fontSize: 11,
  },
  itemText: {
  },
  status: {
    marginTop: 5 ,
    marginLeft: 25 , 
    fontSize: 20,
    color: '#FFFFFF',
    flex: 1,
  },
});
export default Card;
