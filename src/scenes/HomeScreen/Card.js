import { View  , SafeAreaView, StyleSheet, Text } from "react-native";
import { Avatar, ThemeConsumer } from 'react-native-elements';

import React from 'react';
import { color } from "react-native-reanimated";



class Card extends React.Component {
    state = {  }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Avatar
                size="medium"
                containerStyle={styles.Avatar}
                rounded
                source={{uri: this.props.imageSrc}}
            />
            <View style={styles.infos}  >
                    <Text style={styles.NameText}>{this.props.user}</Text>
                    <Text style={styles.itemText}>{this.props.objectName}</Text>
            </View>

                <Text style={styles.status}>
                    {(this.props.status)}
                </Text>


            </SafeAreaView>
        );
    }
}



const styles = StyleSheet.create({
    container : {
      height: 73 , 
      width: 300  , 
      backgroundColor:  "#F8F8F8" , 
      display: "flex" , 
      flexDirection: "row" ,
      justifyContent: "flex-start" , 
      alignItems: "center" , 
      shadowColor: '#000',
      shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
      margin: 15

    } , 
    infos:{
        display: "flex" , 

   } , 
   Avatar :{
       marginLeft: 15 , 
       marginRight: 20
   } 
    , NameText:{
        fontWeight: "bold" , 
        fontSize: 20
    }
     , 
     itemText:{
         marginLeft: 3
     } , 
     status:{
         position: "relative" , 
         right: 0 ,  
         fontSize: 20 , 
         marginLeft: 50 , 
         color:"grey"
         
     }


})
export default Card;