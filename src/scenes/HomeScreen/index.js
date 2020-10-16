import React from 'react';
import {
  ScrollView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchBar, withTheme} from 'react-native-elements';
import Card from './Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputField from '../GoodsList/InputField';
import HomeFilters from './HomeFilters';
import {FetchActions} from '../../redux/actions'
import {connect} from 'react-redux'

const Items = [
  {
    id: '1',
    objectName: 'banniere',
    user: 'John Doe',
    item: 'Banniere',
    status: 'Prise',
    imageSrc: 'https://unsplash.com/photos/nqEJ548Hqjs',
  },
  {
    id: '2',
    objectName: 'banniere',
    user: 'John Doe',
    item: 'Banniere',
    status: 'Booked',

    imageSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    id: '3',
    objectName: 'banniere',
    user: 'John Doe',
    item: 'Banniere',
    status: 'Prise',
    imageSrc: 'https://unsplash.com/photos/nqEJ548Hqjs',
  },
  {
    id: '4',
    objectName: 'banniere',
    user: 'John Doe',
    item: 'Banniere',
    status: 'Prise',
    imageSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    id: '5',
    objectName: 'banniere',
    user: 'John Doe',
    item: 'Banniere',
    status: 'Booked',
    imageSrc: 'https://unsplash.com/photos/nqEJ548Hqjs',
  },
  {
    id: '6',
    objectName: 'banniere',
    user: 'John Doe',
    item: 'Banniere',
    status: 'Prise',
    imageSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    id: '7',
    objectName: 'banniere',
    user: 'John Doe',
    item: 'Banniere',
    status: 'Prise',
    imageSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
];

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  setFilter = (filter) => {
    this.setState({filter: filter});
    console.log(this.props.Actions);

    //Execute filtering request
  };


     async componentDidMount() {
            this.props.FetchActions()

     }

  updateSearch = (search) => {
    this.setState({search});
  };
  _profile = () => {
    this.props.navigation.navigate('Profile');
  };
  _openDrawer = () => this.props.navigation.openDrawer();
  _detail = () => this.props.navigation.push('ActionDetail');

  render() {
    return (
      <View style={styles.MainView}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#070809',
            marginBottom: 20,
            height: 57,
          }}>
          <View style={styles.appBar}>
            <TouchableOpacity
              onPress={this._openDrawer}
              style={{
                flexDirection: 'row',
              }}>
              <Text>
                <Icon name="menu" size={24} color="#5AFFFF" />
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                flexDirection: 'row',
                fontWeight: 'bold',
                fontSize: 16,
                color: '#5AFFFF',
              }}>
              Home
            </Text>
          </View>
        </View>
        <InputField
          ph="Search..."
          changeHandler={this.updateSearch.bind(this)}
        />
        <HomeFilters changeHandler={this.setFilter.bind(this)} />
        {this.props.isFetching ? (
          <ActivityIndicator
            style={{marginTop: 20}}
            size="large"
            color="#5AFFFF"
          />
        ) : (
          <FlatList
            style={styles.FlatList}
            data={this.props.Actions}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.push('ActionDetail', {display: item})
                }>
                <Card
                  objectName={item.reservationTitle}
                  user = {"John Doe"}  /* `${item.reservationBy.userFirstName} ${item.reservationBy.userLastName}` */
                  startsAt={item.startsAt}
                  status={'Booked'}
                  imageSrc={item.objectsNeeded[0].objectImage}></Card>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.reservationTitle}></FlatList>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FlatList: {
    marginTop: 10,
    backgroundColor: '#101010',
   
  },
  MainView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#101010', //#171216
  },
  Header: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  home: {
    fontSize: 20,
    fontWeight: 'bold',
    left: 120,
  },
  hamburger: {
    alignSelf: 'flex-start',
    position: 'relative',
    left: 110,
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

const mapStateToProps = state => {
  return {Actions : state.Action.Actions , isFetching: state.Action.isFetching};
};

export default connect(mapStateToProps, {FetchActions})(HomeScreen);
