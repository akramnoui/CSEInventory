import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import ArticleCard from './ArticleCard';
import {FlatGrid} from 'react-native-super-grid';

export default class ArticlesList extends Component {
  render() {
    return (
      <FlatGrid
        style={styles.gridView}
        itemDimension={120}
        data={this.props.items}
        renderItem={({item}) => (
          <ArticleCard info={item} detail={this.props.detail} />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10,
    marginLeft: 20,
  },
  gridView: {
    marginTop: 20,
  },
});
