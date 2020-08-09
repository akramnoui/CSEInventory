import {View, SafeAreaView, StyleSheet, Text , Image} from 'react-native';
import {Avatar, ThemeConsumer} from 'react-native-elements';

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


class Card extends React.Component {
  state = {};
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'column'  , justifyContent: 'flex-start'   }}>

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
          <View style={styles.date}> 
          <Icon   name="arrow-forward" size={26} color="#FFFF" />
          <Text style={{color:'white' ,marginLeft: 3 , }}> {this.props.startsAt}</Text>
          </View>
          <View style={styles.date2}> 
          <Icon   name="arrow-back" size={26} color="#FFFF" />
          <Text style={{color:'white' ,marginLeft: 3 , }}> {this.props.startsAt}</Text>
          </View>
         

          

        </View>
        <View style={styles.objectImage}>
        <Image
            source={{uri: this.props.imageSrc}}
            style={{
              height: '100%',
              width: '100%',
              marginLeft: 9 , 
              resizeMode: 'cover',
              
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  date:{
    marginTop: 10 , 
    paddingLeft: 10 , 
    flexDirection: "row" , 
    justifyContent: "flex-start" ,
    alignItems:"center" ,
    } , 
    date2:{
      marginTop: 5 , 
      paddingLeft: 10 , 
      flexDirection: "row" , 
      justifyContent: "flex-start" ,
      alignItems:"center" ,
      } , 
  

  objectImage: {
    height: '100%',
    width: 168,
    borderRadius: 20 , 
  } , 

  container: {
    borderWidth: 1 , 
    borderColor: '#E8F3FF' , 
    height: 172,
    overflow: 'hidden' , 
    width: 330,
    backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor:'black' , 
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
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
    color: 'white' , 
    fontWeight: 'bold',
    fontSize: 11.5,
  },
  itemText: {
    color: 'white' , 

  },
  status: {
    marginTop: 5 ,
    marginLeft: 25 , 
    fontSize: 20,
    color: '#FFFFFF',

  },
});
export default Card;
