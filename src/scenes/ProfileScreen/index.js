import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconButton} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';
import ArendreCard from './ArendreCard';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          uri:
            'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          title: 'Object Name 1',
          description:
            'a banner for the HACKIT event',
          occurence: 2,
          state: 'Broken',
        },
        {
          uri:
            'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          title: 'Object Name 2',
          description: 'loob loob loob',
          occurence: 2,
          state: 'Broken',
        },
      ],
    };
  }
  state = {};
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.topView}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.appBar}>
                <Text
                  style={{
                    flexDirection: 'row',
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: 'black',
                  }}>
                  Welcome to your profile
                </Text>
              </View>
            </View>
            <View style={styles.avatarView}>
              <Avatar
                size={120}
                rounded
                source={require('../../assets/UIFaces/UI.jpg')}
              />
              <Text style={styles.userName}>John Doe</Text>
            </View>
            <View style={{flexDirection: 'row' , justifyContent: 'space-between'  , width: '100%'}}>
              <Text style={{color: '#4D4C47', fontSize: 18  , marginLeft: '8%'}}>
                Article à rendre
              </Text>
              <View style={styles.number}>
              <Text style={{color: 'black', fontSize: 20 , fontWeight: 'bold' }}>
                4
              </Text>
              </View>
            </View>
          </View>
          <ScrollView style={{flex: 1 , backgroundColor:'black'}}>
            <FlatGrid
              style={styles.gridView}
              itemDimension={300}
              data={this.state.items}
              renderItem={({item}) => <ArendreCard info={item} />}
              itemContainerStyle={{alignItems: 'center'}}
              spacing={30}
            />
          </ScrollView>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  number: {
    width: 30 , height: 30 , backgroundColor: 'black' , marginRight: '10%' ,
     borderRadius: 10  , flexDirection: 'row'
  } , 
  gridView:{
backgroundColor: '#e0e1e3' , 
  } , 
  bottomBtn: {
    margin: 10,
    paddingBottom: 10,
  },
  textbtn: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },

  topView: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    marginBottom: 30,
  },
  userName: {
    color: 'black',
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  avatarView: {
    paddingTop: 40,
    alignItems: 'center',
  },
  articles: {
    color: 'black',
    fontSize: 18,
  },
  button: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 20,

    height: 45,
    width: 300,
  },
  number: {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    marginTop: -50,
    marginRight: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nb: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  bottomView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 50,
    paddingBottom: 80,
    height: 400,
  },
  appBar: {
    flexDirection: 'row',
    height: 40,
    marginTop: 15,
    marginHorizontal: 30,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 20
  },
});

export default ProfileScreen;
