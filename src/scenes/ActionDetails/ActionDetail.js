import React from 'react';
import { View , SafeAreaView  , StyleSheet , Text , TouchableOpacity, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';





class ActionDetail extends React.Component {
    state = {  }
    _openDrawer = () => this.props.navigation.openDrawer();

    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                 <View style={styles.Header}>
                    <Text style={{fontSize: 18}}>Action Detail</Text>
                   <TouchableOpacity
                    onPress={this._openDrawer}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      flex: 0.8,
                    }}>
                    <Text>
                      <Icon name="menu" size={24} color="black" />
                    </Text>
                  </TouchableOpacity>

                </View>
               
                <View style={styles.image}>

                </View>
                <View style={styles.ActionType}>

                <Chip icon="information" onPress={() => console.log('Pressed')} style={{height: 34}}>Example Chip</Chip>
                <Text style={{fontSize: 12}}> 21/10/2019 to 20/05/2019</Text>

                </View>
                    
                <Actioner/>
                <View style={styles.description}>
                    <Text style={{fontSize: 25 , }}   >
                        Object Title
                    </Text>
                    <Text>
                        lorem Ipsum doloeq maor festi dzq qsrgfvs
                        
                    </Text>
                </View>



            </SafeAreaView>
        );
    }
}
const Actioner = () => (
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
        <View style={styles.infos}  >
                <Text style={styles.NameText}>John Doe</Text>
                <Text style={styles.itemText}>DD/MM/YYYY</Text>
        </View>

    

</SafeAreaView>
    
);

const styles = StyleSheet.create({
    description:{
    flexDirection: "column" , 
    alignItems:"flex-start" , 
    marginTop: 15
        
    } , 
    ActionType:{
        height:55 , width:"100%" , flexDirection: "row" ,justifyContent:"space-evenly",alignItems: "center" ,  marginTop: 20 , marginBottom: 10

    } , 
     mainContainer:{
        flexDirection: "column"
        , justifyContent: "flex-start" ,
        paddingTop: 20 ,  
          alignItems:"center" , 
          flex: 1 , 
          backgroundColor: "white"

     } , 
    Header:{
        display: "flex" , 
        flexDirection: "row-reverse" ,
        justifyContent: "center" , 
        alignItems: "center", 

    }  , 
    image: {
        marginTop: 10 , 
        width: "80%" , 
        height: 180 , backgroundColor: "grey"
        
    } , 
    container : {
        height: 60 , 
        width: 300  , 
        marginBottom: 10 , 
        backgroundColor:  "#F8F8F8" , 
        display: "flex" , 
        flexDirection: "row" ,
        justifyContent: "flex-start" , 
        alignItems: "center" , 
       
      } , 
      infos:{
          display: "flex" , 
  
     } , 
     Avatar :{
         marginLeft: 15 , 
         marginRight: 20
     } 
      , NameText:{
          fontWeight: "bold" , 
          fontSize: 20
      }
       , 
       itemText:{
           marginLeft: 3
       } , 
       status:{
           position: "relative" , 
           right: 0 ,  
           fontSize: 20 , 
           marginLeft: 50 , 
           color:"grey"
           
       }
  
    
})

export default ActionDetail;