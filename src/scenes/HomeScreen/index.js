import React from 'react';
import { ScrollView , View  ,FlatList,  StyleSheet  , Text , TouchableOpacity} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { SearchBar, withTheme , } from 'react-native-elements';
import Card from './Card';



const Items =[
    {
        id: "1" ,
        objectName: 'banniere' , 
        user : 'John Doe' ,
        item : 'Banniere' , 
        status : "Prise" , 
        imageSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'

    }
    ,  {
        id: "2" ,
        objectName: 'banniere' , 
        user : 'John Doe' ,
        item : 'Banniere' , 
        status : "Prise" , 
        
        imageSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'


    } ,  {
        id: "3" ,
        objectName: 'banniere' , 
        user : 'John Doe' ,
        item : 'Banniere' , 
        status : "Prise"
        , 
        imageSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'

    }
    ,  {
        id: "4" ,
        objectName: 'banniere' , 
        user : 'John Doe' ,
        item : 'Banniere' , 
        status : "Prise"
        , 
        imageSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'

    } ,  {
        id: "5" ,
        objectName: 'banniere' , 
        user : 'John Doe' ,
        item : 'Banniere' , 
        status : "Prise"
        , 
        imageSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'

    }
    ,  {
        id: "6" ,
        objectName: 'banniere' , 
        user : 'John Doe' ,
        item : 'Banniere' , 
        status : "Prise"
        , 
        imageSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'

    }
    ,  {
        id: "7" ,
        objectName: 'banniere' , 
        user : 'John Doe' ,
        item : 'Banniere' , 
        status : "Prise"
        , 
        imageSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'

    }


]
const renderItem = ({item}) => (
    <Card objectName={item.objectName} user={item.user} itemName={item.item} status={item.status} imageSrc={item.imageSrc}   ></Card>
    );
class HomeScreen extends React.Component {
    state = {
        search: '',
      };
    
      updateSearch = (search) => {
        this.setState({ search });
      };
     
    render() {
        const { search } = this.state;
        return (
            <View style={styles.MainView}>
                <View style={styles.Header}>
                    <Text style={styles.home}>Home</Text>
                    <TouchableOpacity style={styles.hamburger} onPress={this.props.navigation.navigate("Profile")}  >
                    <Ionicons name = "ios-options"
                    size = {38}
                    color = "black" >

                    </Ionicons>
                    </TouchableOpacity>

                </View>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    round="false"
                    platform="android"
                    
                    containerStyle={styles.SearchBar}
                    
                    
                />
                <FlatList  data={Items} renderItem={renderItem}  keyExtractor={(item) => item.id} >
                    
                </FlatList>


            </View>
        );
    }
}


const styles = StyleSheet.create({

        MainView:{
            flex: 1 , 
            display: "flex" , 
            flexDirection: "column" ,
            justifyContent: "flex-start" ,
            alignItems:"center" ,  
            backgroundColor: "#E8E8E8" , 
            paddingTop: 20

        }
        , Header:{
            display: "flex" , 
            flexDirection: "row-reverse" ,
            justifyContent: "center" , 
            alignItems: "center", 

        } , home: {
            fontSize: 20 , 
            fontWeight: "bold" , 
            left: 20

        } , 
        hamburger:{
            alignSelf: "flex-start"
            , position: "relative"
            , left:  110

            
        } , 
        SearchBar:{
            marginTop: 20 ,  
            width: "85%" ,
            borderRadius: 20 , 
            height : 46 , 
            paddingTop: 0
     
 
            
        }

})

export default HomeScreen;