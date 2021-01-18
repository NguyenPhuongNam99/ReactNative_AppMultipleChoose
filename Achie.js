
//em viết chung vào 1 file//mấy cái file kia là em dùng từ project cũ..vì đợt đó máy em lag nên em do quicly
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React,{useState} from 'react';
import {

  StyleSheet,
  View,
  Text,
  FlatList,
  Button,ScrollView,
  TextInput,TouchableOpacity,CheckBox
} from 'react-native';
import Header from './Component/Header';
import Success from './Component/Success';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
// import Homestack from './Routes/Homestack';
// import { TextInput } from 'react-native-gesture-handler';
// import Top from './Component/Top'
// import Item from'./Component/Item';
import Addtodo from './Component/Addtodo';
import { event } from 'react-native-reanimated';
// import CheckBox from '@react-native-community/checkbox';

// const [text,setText] = useState('');
// const changtext = (val) =>{
//     setText(val);
// }

export default function App({navigation}) {
  const [isSelected, setSelection] = useState(false);
  const [text, setText] = useState('');
 const [todo,SetTodo] = useState([
  {text:'Learning Reactnative',key:'1'},
  {text:'Building a ToDo App with Core Data',key:'2'},
  {text:'Meet friend for lunch ',key:'3'},
])
const [count,setCount] = useState(10);
const [activeObject, setActiveObject] = useState({ id: 3, color: '#001AFF' })
const [color, setColor] = useState('#000');
const [size, setSize] = useState(0);
// const CheckColor =(preveColor)=>{
//   setColor(preveColor);
// }
// const MauSac = [{id : '1', color: '#FF0000'}, {id: '2', color: '#05FF00'},{id : '3', color: '#001AFF'}, {id: '4', color: '#00FFF0'}];
const Increment = ()=>{
  setCount(count +1 );
}
const Decrement =()=>{
  setCount(count -1);
}
const submithander = (text) =>{
  
    SetTodo((prevtext)=>{
      return [
        {text:text,key:Math.random().toString()},
        ...prevtext
      ]
    })
  }
  const pressHander =()=>{
    navigation.navigate('Success');
  }
  
  const handleChooseColor = (colorChoose) => {
    ///setActiveObject(colorChoose)
    setColor(colorChoose.color);
}
const handleChooseSize = (sizeChoose) => {
  setSize(sizeChoose);
}
const handleTodosChange = (item) => {
  let cloneTodos = todos;
  let cloneItem = cloneTodos.find((todoItem) => todoItem.key == item.key)
  if (cloneItem) {
      cloneItem.isChecked = !cloneItem.isChecked;
  }
  setTodos([...cloneTodos])
}
    
//  const handleInputchange =(event)=> {
//     const target = event.target;
//     const value = target.type==='checkbox' ? target.checked : target.value;
//   }
  // const [checked,setChecked] = useState(true);
  // const handleChange = (index) => {
  //   let checked = [...checked];
  //   checked[index] = !checked[index];
  //   setChecked({ checked });
  // }
  // isChecked = (itemId) =>{
  //   const isThere = 
  // }

  const dataColor = [
    { id: 1, color: '#FF0000' },
    { id: 2, color: '#05FF00' },
    { id: 3, color: '#001AFF' },
    { id: 4, color: '#00FFF0' },
]
  const [checked,setChecked] = useState(false);
  const handleChange = (index) => {
    let checked = [...checked];
    checked[index] = !checked[index];
    setChecked({ checked });
  }
  
  let confrim; 
  if(checked){
    confrim=(
      <View>
            <FlatList
              data={todo}
              keyExtractor={item => item.id}
              renderItem={({item}) =>(
                  <View style={styles.listtd}>
                       <CheckBox
                     // value={checked}
                      //onValueChange={handleChange(index)}
                      style={styles.checkbox}
                     onPress={() => handleChange(index)}
                         checked={checked[index]} 
                        />
                 
                    {/* <Input type="checkbox"
                    onChange={handleChange} checked={checked}/> */}
                      <Text style={styles.tittle}>{item.text}</Text>
                  </View>
              )
              }
              />
        
      </View>
     
    )
  }



  return (
    
 <ScrollView>
    <View style={styles.Top}>

    
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.text}>Color Picker</Text>
                <View style={styles.wrap}>
                  {/* <TouchableOpacity>
                    <View style={{width:20,height:20,backgroundColor:'#FF0000',marginLeft:13}}></View>
                  </TouchableOpacity>
                    <TouchableOpacity>
                       <View style={{width:20,height:20,backgroundColor:'#05FF00',marginLeft:13}}></View>
                    </TouchableOpacity>
                   <TouchableOpacity> 
                     <View style={{width:20,height:20,backgroundColor:'#001AFF',marginLeft:13}}></View>
                   </TouchableOpacity>
                   <TouchableOpacity>
                      <View style={{width:20,height:20,backgroundColor:'#00FFF0',marginLeft:13}}></View>
                   </TouchableOpacity> */}
                    {dataColor.map((item) => {
                    return (
                        <TouchableOpacity style={styles.buttonTest} onPress={() => handleChooseColor(item)} />
                    )
                })}
                   
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.text}>Font Size </Text>
                <View style={styles.adjust}>
                    <Text>Size</Text>
                   
                        <Text style={{backgroundColor:'gray',width:130,height:20,marginLeft:5,paddingLeft:50}}>{count}</Text>
                    
                    {/* <TextInput style={styles.input} value={count} onChangeText={count => setCount(count)}
         keyboardType="number-pad" placeholderTextColor="red" /> */}
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:13}}>
                  <TouchableOpacity >
                    <Text onPress={Increment} style={{width:72,height:28,backgroundColor:"#BD2B26",color:'#fff',textAlign:'center',paddingTop:2,marginTop:10}}>Up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity >
                    <Text onPress={Decrement} style={{width:72,height:28,backgroundColor:"#BD2B26",color:'#fff',textAlign:'center',paddingTop:2,marginTop:10}}>Down</Text>
                  </TouchableOpacity>
                   
                </View>
            </View>


        </View>
        <View style={styles.todo}>
            <View style={styles.content}>

                <Addtodo  submithander={submithander}/>
                {/* <TextInput style={styles.input2} 
                  
                     blurOnSubmit
                      autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={changtext}
                />
                <Button  title='Done' style={{width:10,height:10,color:'#BD2B26'}} onPress={()=>submithander(text)}/> */}
            </View>
            <View style={styles.list}>   
           
            <Text style={styles.text1}>Todo List</Text> 
         
              <FlatList
              data={todo}
              renderItem={({item,index}) =>(
                // <Item item={item } />
               
                
                  <View style={styles.listtd}>

                              <TouchableOpacity
                                style={{flexDirection:'row'}}
                                onPress={() => {
                                    handleTodosChange(item);
                                }}
                            >
                                {
                                    !item.isChecked && (
                                        <FontAwesome name={"square-o"} size={20} style={styles.check} />
                                    ) || (
                                        <FontAwesome name={"check-square"} size={20} />
                                    )
                                }
                               <Text style={styles.tittle}>{item.text}</Text>
                            </TouchableOpacity>


                      {/* <CheckBox
                     // value={checked}
                      //onValueChange={handleChange(index)}
                      style={styles.checkbox}
                     onPress={() => handleChange(index)}
                         checked={checked[index]} 
                        />
                  */}
                  {/* <View>
                    </View> */}
                 
                    {/* <Input type="checkbox"
                    onChange={handleChange} checked={checked}/> */}

{/* <FontAwesome name={"square-o"} size={30} style={styles.check} /> */}
{/* <FontAwesome name={"check-square"} size={20} />
                      */}
              
               </View>
              )
              }
              />
                
             </View>

             <View style={styles.list}>   
           
            <Text style={styles.text1}>Result</Text> 
                    {confrim}
             </View>
             {/* <Button title='Submit' /> */}
             <TouchableOpacity onPress={()=>navigation.navigate('Success')} style={{marginLeft:10,backgroundColor:'#BD2B26',width:389,height:48,marginTop:20,borderRadius:24,textAlign:'center',justifyContent:'center',alignItems:'center'}} >
                  <Text  style={{color:'#FFFFFF'}}>Submit</Text>
              </TouchableOpacity>
        </View>
        {/* onPress={pressHander} */}
</View>
</ScrollView>


    );
  };

   

const styles = StyleSheet.create({
  container:{
    flex:1,
  
    flexDirection:'row',
    marginVertical:30,
    justifyContent:'space-between'
    
  },
  left:{
    flex:0.5,
    // width: 168,
    height: 121,
    backgroundColor:'#FFFFFF',
    shadowRadius: 2,
        shadowOpacity: 0.5,
        elevation:6,
       // backgroundColor: '#1DC48F',
        borderRadius: 10,
   
    marginRight:20
  },
  right:{
    flex:0.5,
    // width: 168,
    height: 121,
    //backgroundColor: '#FFFFFF',
    fontFamily:'Roboto',
    fontSize:16,
    fontWeight:'bold',
    color: 'blue',
    shadowRadius: 2,
        shadowOpacity: 0.5,
        elevation:6,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
  },
  text:{
    fontFamily:'Roboto',
    fontSize:'normal',
    fontWeight:'normal',
    fontSize:16,
    lineHeight:19 ,
    backgroundColor: '#BD1313',
    borderRadius: 3,
    height:31,
    color:'#FFFFFF',
    paddingHorizontal:6,
    paddingVertical:3
  },
  text1:{
    fontFamily:'Roboto',
    fontSize:'normal',
    fontWeight:'normal',
    fontSize:16,
    lineHeight:19 ,
    backgroundColor: '#BD1313',
    //borderRadius: 3,
    height:48,
    color:'#FFFFFF',
    paddingHorizontal:6,
    paddingVertical:15,
    marginLeft:11,
    marginRight:11,
    borderTopRightRadius:8,
    borderTopLeftRadius:8
  },
  wrap:{
    flexDirection:'row',
    marginTop:13
  },
  adjust:{
    flexDirection:'row',
    marginVertical:4
  },
  input:{
    height: 35, borderColor: 'gray', borderWidth: 1 ,
    width:150,marginLeft:6,
    marginVertical:2,
     color : "red",
  },
  todo:{
    marginTop:10
  },
  input2:{
    height: 40, borderColor: 'gray', borderWidth: 1 ,
    width:270,
    marginLeft:16,
    marginRight:20
  },
  content:{
    flexDirection:'row'
  },
  list:{
        marginTop:30,
        shadowRadius: 2,
        shadowOpacity: 0.5,
        elevation:8,
      //  backgroundColor: '#FFFFFF',
        borderRadius: 10,
      },
tittle:{
        color:'green',
        fontWeight:'bold',
        //borderColor:'#bbb',
        // borderWidth:2,
        // borderStyle:'dashed',
        // borderRadius:10,
        // padding:3,
        // marginTop:2,
        // fontSize:16,
        // fontWeight:'bold',
        // textAlign:'center',
        // width:80
      },
      listtd:{
        flexDirection:'row',
        marginHorizontal:13
      
      },
      mau:{
        shadowRadius: 2,
              shadowOpacity: 0.5,
              elevation:1,
             // backgroundColor: '#1DC48F',
              borderRadius: 10,
               flex:0.5,
      //   // width: 168,
      //   height: 121,
      //  /// backgroundColor:'#FFFFFF',
     shadowRadius: 2,
      },
      buttonfront:{
        backgroundColor:'black',
         marginTop:70,
        borderRadius:15,
     
      },buttonTest: {
        height: 20,
        width: 20,
        margin: 10,
    },
});
