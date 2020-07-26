import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import ArticleCard from './ArticleCard';
import {FlatGrid} from 'react-native-super-grid';

export default class ArticlesList extends Component {
  render() {
    return (
      <FlatGrid
        style={styles.gridView}
        itemDimension={160}
        data={this.props.items}
        renderItem={({item}) => (
          <ArticleCard info={item} detail={this.props.detail} />
        )}
        itemContainerStyle={{alignItems: 'center'}}
        spacing={30}
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginHorizontal: 20,
    marginTop:-20
  },
});
