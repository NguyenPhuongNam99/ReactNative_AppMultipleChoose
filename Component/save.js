import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React,{useState} from 'react';
import {

  StyleSheet,
  View,
  Text,
  FlatList,
  Button,

} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Header from './Component/Header';
import StartGameScreen from './Screen/StartGameScreen'
// import Top from './Component/Top'
// import Item from'./Component/Item';
// import Addtodo from './Component/Addtodo';

 
export default function App() {
  // const [todo,Settodo] = useState([
  //   {text:'Manchester United',key:'1'},
  //   {text:'Manchester City',key:'2'},
  //   {text:'Football Club2020',key:'3'},
  //   {text:'BlackFriday MAN',key:'4'},
  //   {text:'Football Club2020',key:'5'},
  //   {text:'Football Club2020',key:'6'},
  //   {text:'Football Club2020',key:'7'},
  //   {text:'Football Club2020',key:'8'},
  //   {text:'Football Club2020',key:'9'}
  // ]);

  // const handlerremove = (key) =>{
  //   Settodo((prevtext) => {
  //    return prevtext.filter(todo =>todo.key !== key);
  //   })
  // }
  // const submithander = (text) =>{
  //   Settodo((prevtext)=>{
  //     return [
  //       {text:text,key:Math.random().toString()},
  //       ...prevtext
  //     ]
  //   })
  // }
  //  const Stack = createStackNavigator();
  // const Home = ({navigation}) =>{
  //   return(
  //     <View>
  //         <Button  title='Go To Detail'
  //         onPress ={()=>{
  //           navigation.navigate('Detail');
  //         }}
  //         />
  //     </View>
  //   )
  // }
  // const Detail = ({navigation}) =>{
  //   return(
  //     <View>
  //         <Button  title='Go To Detail'
  //         onPress ={()=>{
  //           navigation.navigate('Detail');
  //         }}
  //         />
  //          <Button  title='Go To back'
  //         onPress ={()=>{
  //           navigation.goBack();
  //         }}
  //         />
  //     </View>
  //   )
  // }
  return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text>Color Picker</Text>
            </View>
            <View style={styles.right}>
            
            </View>

        </View>

    );
  };

    // <NavigationContainer>
    //     <Stack.Navigator>
    //         <Stack.Screen name ='Home' component={Home}></Stack.Screen>
    //         <Stack.Screen name ='Detail' component={Detail}></Stack.Screen>
    //     </Stack.Navigator>
    //   </NavigationContainer>


   // luyentap video
    // <View style={styles.screen}>
    //   <Header title="Guess A Number" />
    //   <StartGameScreen />
    // </View>

    <View style={styles.container}>
      <View style={styles.header}>
        <Top />
        <View style={styles.content}>
          <Addtodo submithander={submithander}/>
            <View style={styles.list}>
              <FlatList
              data={todo}
              renderItem={({item}) =>(
                <Item item={item } handlerremove= {handlerremove}/>
              // <Text style={styles.tittle}>{item.text}</Text>
              )
              }
              />
            </View>
        </View>

      </View>

    // </View>

      
      
 

const styles = StyleSheet.create({
  
//   screen:{
//     flex:1
//   }
// ,
//   container:{
//     flex:1,
//     backgroundColor:'#fff'
//   },
//   content:{
//     padding:50
//   },
//   list:{
//     marginTop:30,
//     color:'red'
//   },tittle:{
//     color:'green',
//     fontWeight:'bold'
//   }
});

