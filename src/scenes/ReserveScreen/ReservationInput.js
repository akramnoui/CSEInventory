import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default class ReservationInput extends Component {
  
  state = {
    list: ['7med', 'ali', 'benbakhta', 'benali', 'benbakhtat', 'salima'],
    query: '',
    toShow: [''],
    listedUsers: [''],
  };

  changeQuery = (text) => {
    this.setState({query: text});
  };
  
  componentDidUpdate(){
    this.updateResults();
  }
  

  updateResults = () => {
    let toShow_inter = [''];
    if (this.state.query.length > 1) {
      this.state.list.map((user) => {
        if (user.indexOf(this.state.query.toLowerCase()) > -1) {
          toShow_inter.push(user);
        }
      });
      if (JSON.stringify(toShow_inter) != JSON.stringify(this.state.toShow)) {
        this.setState({toShow: toShow_inter});
        console.log('Update');
      }else if(this.state.query.length < 1){
        this.setState({toShow: ''});
      }
    }
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Write name ..."
          style={{marginHorizontal: 5, width:200}}
          value={this.state.query}
          onChangeText={(text) => {
            this.changeQuery(text);
          }}/>
          <View style={styles.list}>
            {this.state.toShow.map((toshow => {
              return(<Text>{toshow}</Text>)
            }))}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list:{
    width:'100%',
    backgroundColor:'#ccc',
    color:'#000',
    position: 'absolute',
    top:45,
  }
})
