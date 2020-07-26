import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import AnomalyCard from './AnomalyCard';
import {FlatGrid} from 'react-native-super-grid';

export default class AnomaliesList extends Component {
  
  render() {
    return (
      <FlatGrid
        style={styles.gridView}
        itemDimension={160}
        data={this.props.items}
        renderItem={({item}) => (
          <AnomalyCard info={item} detail={this.props.detail} />
        )}
        itemContainerStyle={{alignItems: 'center'}}
        spacing={20}
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginHorizontal: 20,
    marginTop: -20,
  },
});
