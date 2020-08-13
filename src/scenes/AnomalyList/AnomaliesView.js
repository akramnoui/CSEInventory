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
import InputField from '../GoodsList/InputField';
import Filters from './Filters';
import AppBar from './AppBar';
import AnomaliesList from './AnomaliesList';
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FAB} from 'react-native-paper';

export default class AnomaliesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      query: '',
      items: []
    };
  }
  async  componentDidMount(){
    const response = await fetch('https://cse-inventory-api.herokuapp.com/reports/all')
  const results = await response.json()
  console.log(results)
  this.setState({
    items: results.allReports
  })
  }

  setQuery = (query) => {
    this.setState({query: query});

    //Execute search request
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
                    justifyContent: 'flex-start',
                    flex: 0.5,
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
                  Anomalies
                </Text>
              </View>
            </View>
            {/* <InputField
              ph="Search..."
              changeHandler={this.setQuery.bind(this)}
            /> */}
            <ScrollView style={{marginTop: 30}}>
              <AnomaliesList items={this.state.items} detail={this._detail} />
            </ScrollView>
          </View>
        </View>

        <FAB
          style={styles.fab}
          color="#102236"
          icon="plus"
          theme={{colors: {accent: '#5AFFFF'}}}
          onPress={() => {
            this.props.navigation.push('AddAnomaly');
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = {
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
  mainContainer: {
    flex: 1.0,
    backgroundColor: '#070809',
  },
  safeAreaStyle: {
    flex: 1.0,
    backgroundColor: '#3B5998',
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
