
import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground  , Image , FlatList , menu} from 'react-native'
import { white } from 'ansi-colors';

export default class drawerContentComponents extends Component {

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

 
  render() {
    return (
        <View style={{flex: 1.0,
          backgroundColor: 'white',}}>
        <View
          style={{
            flex: 0.4,
            flexDirection: 'column',
            backgroundColor: '#000',
            alignItems: 'stretch',
            justifyContent: 'center',
          }}>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            }}
            style={{
              height: 100,
              width: 100,
              resizeMode: 'cover',
              borderRadius: 50,
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
          <Text
            style={{
              color: '#fff',
              margin: 10,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            John Doe
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#fff',
                margin: 20,
              }}>
              <Text style={{color: '#fff'}}>Article à rendre</Text>
              <Text
                style={{
                  color: '#000',
                  backgroundColor: '#fff',
                  height: 20,
                  width: 20,
                  textAlign: 'center',
                  borderRadius: 10,
                }}>
                2
              </Text>
            </View>
          </View>
        </View>
       
      </View>
       
    )
  }
}

const styles = StyleSheet.create({
    
});
