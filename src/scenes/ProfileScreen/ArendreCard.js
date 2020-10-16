import React, {Component} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import {screenHeight, screenWidth} from '../ReserveScreen/Dimensions';

export default class ArendreCard extends Component {
  render() {
    return (
      <View style={styles.main} >
      <View style={styles.container}>
        <Image
          source={{uri: this.props.info.uri}}
          style={{
            height: 90,
            width: 90 , 
            margin: 15 ,  
            resizeMode: 'cover',
            borderRadius: 10
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              marginLeft: 10 , 
              marginTop: 20 , 
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Text numberOfLines={1} style={styles.title}>
              {this.props.info.title}
            </Text>
            <Text numberOfLines={2} style={styles.description}>
              {this.props.info.description}
            </Text>
            <Text numberOfLines={1} style={styles.date}>
              When: 23/06/2020
            </Text>

          </View>
         

          
        </View>

      </View>
      <Button onPress={()=>{alert("rendu")}} color='#3498DB' style={{marginTop:13 , alignSelf: "center" }}>Rendre</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#FFF', width: screenWidth-70   , height: 90 , paddingTop: 2, flexDirection: "row" ,
  } , 
  main : {
    width: screenWidth-60  ,
    height : 150 , 
    backgroundColor: '#FFF' , 
    justifyContent: 'space-around' , 
    alignItems: 'center' , 
   flexDirection : 'column', 
    borderRadius: 15 , 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    
    elevation: 8,
     
      } , 


  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginBottom: 3,
    marginTop: 5,
  },
  description: {
    fontSize: 15,
    color: "#828179" ,
    fontWeight: 'normal',
    flexWrap: 'wrap',
  },
  date : {
    fontSize: 14 , 
    fontWeight: "bold" , 
    marginTop: 5

  }
});
