import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Chip} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ActionDetail extends React.Component {
  state = {}; constructor(props) {
    super(props);
    this.state = {
      item: '',
    };
  }
  componentWillMount(){
    console.log( this.props.route.params.display)
     this.setState({
       item: this.props.route.params.display , 
       itemImage:  this.props.route.params.display.objectsNeeded[0].objectImage 
       ,  ActionBy:  this.props.route.params.display.reservationBy
     })
  }

  _openDrawer = () => this.props.navigation.openDrawer();


  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.appBar}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack('null');
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                flex: 0.5,
              }}>
              <Text>
                <Icon name="keyboard-backspace" size={24} color="#3498DB" />
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                flexDirection: 'row',
                fontWeight: 'bold',
                fontSize: 16,
                color: '#3498DB',
              }}>
              Anomalies
            </Text>
          </View>
        </View>

        <View style={styles.image}>
          <Image
            style={{height: '100%', width: '100%', borderRadius: 10,
            resizeMode: 'cover'}}
            
            source={{uri:this.state.itemImage}}
          />
        </View>
        <View style={styles.ActionType}>
          <Chip
            icon="information"
            onPress={() => console.log('Pressed')}
            mode="outlined"
            style={{height: 34}}>
             Broken Item
          </Chip>
          <Text style={{fontSize: 12}}> {this.state.item.startsAt} -  {this.state.item.endsAt}</Text>
        </View>

        <Actioner Action={this.state.ActionBy} />
        <View style={styles.description}>
          <Text style={{fontSize: 25}}>{this.state.item.reservationTitle} </Text>
          <Text>{this.state.item.reservationBody}  </Text>
        </View>
      </SafeAreaView>
    );
  }
}
const Actioner = (props) => (
  <SafeAreaView style={styles.container}>
    <Avatar
      size="medium"
      containerStyle={styles.Avatar}
      rounded
      source={{
        uri:
          'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      }}
    />
    <View style={styles.infos}>
      <Text style={styles.NameText}>{`${props.Action.userFirstName} ${props.Action.userLastName}` }</Text>
      <Text style={styles.itemText}>23/04/2020</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  description: {
    width : '100%' , 
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent:'flex-start' , 
     margin: 20,
    paddingLeft: 50 , 
  },
  ActionType: {
    height: 55,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#E8F1F5',
  },
  Header: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 10,
    width: '80%',
    height: 180,
    backgroundColor: 'grey',
    borderRadius: 100 ,
  },
  container: {
    height: 60,
    width: 320,
    marginBottom: 10,
    backgroundColor: '#E8F1F5',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  infos: {
    display: 'flex',
  },
  Avatar: {
    marginLeft: 15,
    marginRight: 20,
  },
  NameText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  itemText: {
    marginLeft: 3,
  },
  status: {
    position: 'relative',
    right: 0,
    fontSize: 20,
    marginLeft: 50,
    color: 'grey',
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
});

export default ActionDetail;
