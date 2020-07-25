
import React from 'react';
import { View , SafeAreaView  , StyleSheet , Text , TouchableOpacity, Image} from 'react-native';
import { Button } from 'react-native-elements'





class ItemPage extends React.Component {
    state = {  }
    render() {
        return (
            
            <SafeAreaView  style={styles.container}>
               <TopView></TopView>
                <View   style={styles.bottomView}>
                    
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
    userName:{
        color:"white" , 
        padding: 20 , 
        fontSize: 25 , 
        fontWeight: "bold"
    } , 
    avatarView:{
        paddingTop: 40 , 
        alignItems:"center" ,
    }
    , articles:{
        color: "white" , 
        fontWeight: "bold" , 
        fontSize: 25 , zIndex: 10 , 
        marginTop: -50 , 
        marginLeft : 20
    } , button:{
        backgroundColor: "black" , alignSelf: "flex-start"
        , marginLeft : 40, marginTop: 20
       
         , height: 45, 
         width: 300
    
    } , 
    number:{
        height: 35 , width: 35 , 
        borderRadius: 50 , 
        backgroundColor: "white" , 
        alignSelf: "flex-end", 
        marginTop: - 50 , 
        marginRight: 25  ,
        alignItems: "center" , 
        justifyContent: "center" , 
    } , 
    nb:{
        color:"black" , 
        fontSize: 17 , 
        fontWeight: "bold"
        
    } , bottomView:{
        justifyContent: "center" , 
        alignItems: "flex-start" , 
         paddingLeft : 50 , 
         paddingBottom: 80 , 
          height: 400 , backgroundColor: "white"
    }

    
})

export default ItemPage;

