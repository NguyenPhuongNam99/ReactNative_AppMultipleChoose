import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation/stack';
import Success from '../Component/Success';
import App from '../App';

const screens = {
    App:{
        screen:App
    },
    Success :{
        screen:Success
    }
}
const Homestack = createStackNavigator(screens);
export default createAppContainer(Homestack);