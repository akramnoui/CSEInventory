
import React from 'react';
import { View , SafeAreaView  , StyleSheet , Text , TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements';




class ProfileScreen extends React.Component {
    state = {  }
    render() {
        return (
            
            <SafeAreaView  style={styles.container}>
               <TopView></TopView>
                <View   style={styles.bottomView}>
                    <TouchableOpacity style={styles.bottomBtn}>
                        <Text style={styles.textbtn}>Profile</Text>
                    </TouchableOpacity  >
                    <TouchableOpacity style={styles.bottomBtn}>
                    <Text style={styles.textbtn}>Liste des Articles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomBtn}>
                    <Text style={styles.textbtn}>Signaler un dégat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomBtn}>
                    <Text style={styles.textbtn}>Objet Perdu</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            
        );
    }
}




const TopView = () => {
    return (
        <View   style={styles.topView}>
        <View style={styles.avatarView} >
        <Avatar
            
            size= {120}
            rounded
            source={{
                uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
        />
        <Text style={styles.userName}>
            John Doe     
        </Text>
        </View>
    
        <TouchableOpacity style={styles.button} activeOpacity={0} >
            <Text style={styles.articles}>
                Articles à Rendre
            </Text>
        </TouchableOpacity>
        <View style={styles.number}>
            <Text style={styles.nb}>
                1
            </Text>
        </View>


    </View>
        
    );
}



const styles = StyleSheet.create({
    bottomBtn:{
        margin: 10 , 
        paddingBottom: 10 ,
      
        
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
        backgroundColor: "black" , 
        height : 301 , 
        width: "100%" , 
        display: "flex" , 
        alignItems: "center" , 
        justifyContent: "flex-start" , 

    
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
        fontSize: 18
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
          height: 400 , backgroundColor: "#B7B7B7"
    }

    
})

export default ProfileScreen;

