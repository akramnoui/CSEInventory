
import React from 'react';
import { View , SafeAreaView  , StyleSheet , Text , TouchableOpacity, Image} from 'react-native';
import { Button } from 'react-native-elements'
import Disponible from './Disponible'





class ItemPage extends React.Component {
    state = {  }
    render() {
        return (
            
            <SafeAreaView  style={styles.container}>
               <TopView></TopView>
                <View   style={styles.bottomView}>
                    <Disponible disponible="true" ></Disponible>
                     <View style={{ height:55 , width:"100%" , flexDirection: "row" ,justifyContent:"space-evenly", marginTop: 30 }} >
                            <TouchableOpacity
                                style={styles.Button}
                            
                            >
                                <Text style={{color: '#FFF'}}> Add Anomaly </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.Button1}
                            
                            >
                                <Text style={{color: '#FFF'}}> Book Item </Text>
                            </TouchableOpacity>
                    </View> 
                </View>
            </SafeAreaView>
            
            
        );
    }
}




const TopView = () => {
    return (
        <View   style={styles.topView}>
        <View style={styles.ItemImage} >
                
        <Image
            
            style={{height: "100%", width: "100%", resizeMode: 'cover'}}
            source={{
                uri:
                'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                
            }}
        />
        </View>
    
       
            <Text style={styles.articles}>
                Baniére Hack it 3
            </Text>
      

    </View>
        
    );
}



const styles = StyleSheet.create({
    Button1:{
        borderRadius: 5,
        height: 50,
        width: 150 ,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3F3F3F',
        fontWeight: 'bold',
      

    } , 
    Button: {
        borderRadius: 5,
        height: 50,
        width: 150 ,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        fontWeight: 'bold',
      
      },
    bottomBtn:{
        
        
    } , 
    textbtn:{
       fontSize: 18 ,
       color: "white" ,
       fontWeight: "bold" 
       

    } , 
    container:{
        flex: 1

    } ,

    topView: {
        height : 270 , 
        width: "100%" , 
     

    
    } , 
    bottomView:{
        flexDirection: "column" , 
        justifyContent: "flex-start" , 
        alignItems: "center" , 
        paddingTop: 36.5 , 
      
          height: 400 , backgroundColor: "white"
    }

    
})

export default ItemPage;

