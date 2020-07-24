
import React from 'react';
import { View , SafeAreaView  , StyleSheet , Text} from 'react-native';
import { Avatar } from 'react-native-elements';




class ProfileScreen extends React.Component {
    state = {  }
    render() {
        return (
            <SafeAreaView  style={styles.container}>
                <View   style={styles.topView}>
                    <View >
                    <Avatar
                        
                        size="large"
                        rounded
                        source={{
                            uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                    <Text>
                        John Doe     
                    </Text>
                    </View>
                </View>
                <View   style={styles.bottomView}>

                </View>
            </SafeAreaView>
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    } ,

    topView: {
        backgroundColor: "black" , 
        height : 301 , 
        width: "100%" , 
        display: "flex" , 

    
    } , 
    
})

export default ProfileScreen;

