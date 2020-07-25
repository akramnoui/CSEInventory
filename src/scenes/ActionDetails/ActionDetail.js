import React from 'react';
import { View , SafeAreaView  , StyleSheet , Text , TouchableOpacity, Image } from 'react-native';





class ActionDetail extends Component {
    state = {  }
    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                 <View style={styles.Header}>
                    <Text style={styles.home}>Home</Text>
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
                <View style={styles.ActionType}>
                    

                </View>
                <View style={styles.image}>

                </View>
                
                <Actioner/>
                <View style={styles.description}>
                    <Text>
                        Object Title
                    </Text>
                    <Text>
                        lorem Ipsum doloeq maor festi dzq qsrgfvs
                        dzczrz constre adipcting , etlit sed eismud  tzmpo
                    </Text>
                </View>



            </SafeAreaView>
        );
    }
}
const Actioner = () => (
    
);

export default ActionDetail;
const styles = StyleSheet.create({
    ActionType:{
        height:55 , width:"100%" , flexDirection: "row" ,justifyContent:"space-evenly", marginTop: 20

    } , 
     mainContainer:{
        flexDirection: "colmun"
        , justifyContent: "center" , 
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
        width: "80%" , 
        
    }
    
})

export default ActionDetail;