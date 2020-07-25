
import HomeScreen from '../scenes/HomeScreen/index'
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen  from '../scenes/ProfileScreen/index';

const Drawer = createDrawerNavigator({
    Home: HomeScreen , 
    Profile: ProfileScreen 
  
  } , {
    initialRouteName: 'Home', 
  
  } , 
  );



  export default Drawer;