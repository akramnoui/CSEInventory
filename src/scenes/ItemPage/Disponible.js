
import React from 'react';
import { View , SafeAreaView  , StyleSheet , Text , TouchableOpacity, Image} from 'react-native';
import { Button } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';






class ItemPage extends React.Component {
    state = {  }
    render() {
         if (this.props.disponible ) {return (
            
          
                <View   style={styles.container}>
                    <Text style={{fontSize: 20 , fontWeight: "200"}}> Disponible </Text>
                     <Ionicons name="checkmark-circle" color="green" size={35}></Ionicons>
                </View>
            
            
        );} return (
           
             <View   style={styles.container}>
                 <Text>Indisponible</Text>
                 <Ionicons name="close-circle" color="red" size={25}  ></Ionicons>
             </View>
        );
    }
}





const styles = StyleSheet.create({
  
    container: {
        height: 64 ,
        width: 310 , 
        backgroundColor: "#EBECED" , 
        flexDirection: "row" , 
        justifyContent: "space-between" , 
        alignItems: 'center'
        , paddingLeft: 15 , paddingRight: 15


    }
    
})

export default ItemPage;

