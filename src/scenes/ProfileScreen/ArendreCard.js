import React, {Component} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import {screenHeight, screenWidth} from '../ReserveScreen/Dimensions';

export default class ArendreCard extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', borderRadius: 4, width: screenWidth-60}}>
        <Image
          source={{uri: this.props.info.uri}}
          style={{
            height: 126,
            resizeMode: 'cover',
            borderTopRightRadius: 4,
            borderTopLeftRadius: 4,
          }}
        />
        <View style={{flexDirectionn: 'row'}}>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 3,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Text numberOfLines={1} style={styles.title}>
              {this.props.info.title}
            </Text>
            <Text numberOfLines={2} style={styles.description}>
              {this.props.info.description}
            </Text>
          </View>
          
          <Button onPress={()=>{alert("rendu")}} color='#3498DB' style={{marginVertical:10}}>Rendre</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginBottom: 3,
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    fontWeight: 'normal',
    flexWrap: 'wrap',
  },
});
