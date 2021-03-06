import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
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
import {connect} from 'react-redux';
import {FetchItems} from '../../redux/actions'

 class ArticlesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      filter: '',
      query: '',
      items: [],
    };
  }
  async componentDidMount() {
   this.props.FetchItems();
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
                  Articles
                </Text>
              </View>
            </View>
            <InputField
              ph="Search..."
              changeHandler={this.setQuery.bind(this)}
            />
            <Filters changeHandler={this.setFilter.bind(this)} />
            {this.props.isFetchingItems? (
              <ActivityIndicator
                style={{marginTop: 20}}
                size="large"
                color="#5AFFFF"
              />
            ) : (
              <ScrollView>
                <FlatGrid
                  style={styles.gridView}
                  itemDimension={170}
                  data={this.props.Items}
                  renderItem={({item}) => (
                    <ArticleCard
                      info={item}
                      detail={() =>
                        this.props.navigation.push('Item', {display: item})
                      }
                    />
                  )}
                  itemContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  spacing={15}
                />
              </ScrollView>
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  gridView: {
    marginTop: 20,
  },
  mainContainer: {
    flex: 1.0,
    backgroundColor: '#070809',
  },
  safeAreaStyle: {
    flex: 1.0,
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
const mapStateToProps = state => {
  return {Items : state.Item.Items , isFetchingItems : state.Item.isFetchingItems};
};

export default connect(mapStateToProps, {FetchItems})(ArticlesView);

