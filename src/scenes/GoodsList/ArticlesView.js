import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import ArticleCard from './ArticleCard';
import InputField from './InputField';
import Filters from './Filters';
import AppBar from './AppBar';
import ArticlesList from './ArticlesList';
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FlatGrid} from 'react-native-super-grid';


export default class ArticlesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      query: '',
      items: [] , 
    };
  }
  async  componentDidMount(){
    const response = await fetch('https://cse-inventory-api.herokuapp.com/items/all')
  const results = await response.json()
  console.log(results)
  this.setState({
    items: results 
  })
  }

  setQuery = (query) => {
    this.setState({query: query});

    //Execute search request
  };

  setFilter = (filter) => {
    this.setState({filter: filter});

    //Execute filtering request
  };
  _openDrawer = () => this.props.navigation.openDrawer();
  _detail = () => this.props.navigation.push('Item');

  render() {
    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.mainContainer}>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.appBar}>
                <TouchableOpacity
                  onPress={this._openDrawer}
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text>
                    <Icon name="menu" size={24} color="#3498DB" />
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    flexDirection: 'row',
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#3498DB',
                  }}>
                  Articles
                </Text>
              </View>
            </View>
            <InputField
              ph="Search..."
              changeHandler={this.setQuery.bind(this)}
            />
            <Filters changeHandler={this.setFilter.bind(this)} />
            <ScrollView>
                    <FlatGrid
                style={styles.gridView}
                itemDimension={160}
                data={this.state.items}
                renderItem={({item}) => (
                  <ArticleCard info={item} detail={() => this.props.navigation.push('Item' , {display: item })} />
                )}
                itemContainerStyle={{alignItems: 'center'}}
                spacing={30}
              />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  gridView: {
    marginHorizontal: 20,
    marginTop:-20
  }, 
  mainContainer: {
    flex: 1.0,
    backgroundColor: '#E8F1F5',
  },
  safeAreaStyle: {
    flex: 1.0,
    backgroundColor: '#E8F1F5',
  },
  headerContainer: {
    height: 44,
    flexDirection: 'row',
    justifyContect: 'center',
    backgroundColor: '#3B5998',
  },
  headerTitle: {
    flex: 1.0,
    textAlign: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  menuButton: {
    marginLeft: 8,
    marginRight: 8,
    alignSelf: 'center',
    tintColor: 'white',
  },
  menuContainer: {
    flex: 1.0,
    backgroundColor: '#B7B7B7',
  },
  menuTitleContainer: {
    alignItem: 'center',
    height: 60,
    width: '100%',
    flexDirection: 'row',
  },
  menuTitle: {
    width: '100%',
    color: 'white',
    textAlign: 'left',
    fontSize: 17,
    alignSelf: 'center',
    marginLeft: 25,
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
};
