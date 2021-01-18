import React,{useState} from 'react'
import {View,Text, StyleSheet, TextInput, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Addtodo({submithander}){
    const [text,setText] = useState('');
    const changtext = (val) =>{
        setText(val);
    }
    return(
        <View style={{flexDirection:'row'}}>
              <TextInput style={styles.input2} 
                  
                  blurOnSubmit
                   autoCapitalize="none"
                 autoCorrect={false}
                 onChangeText={changtext}
                 placeholder='Enter to do'
             />
             <TouchableOpacity>
                 <Text style={styles.buttonad} onPress={()=>submithander(text)}>Done</Text>
             </TouchableOpacity>
             
        </View>
        
    );
};
const styles = StyleSheet.create({
    // input:{
    //     borderBottomWidth:1,
    //     borderBottomColor:'#ddd',
    //     marginTop:15,
    //     paddingBottom:2,
    //     marginBottom:8
    // },
    // button: {
    //     marginHorizontal:5,
    //     marginTop:10
    // },
    input2:{
        height: 40, borderColor: 'gray', borderWidth: 1 ,
        width:270,
        marginLeft:16,
        marginRight:20,backgroundColor:'#FFFFFF'
      },
      buttonad:{
        width:74,height:42,color:'#fff',backgroundColor:'#BD2B26',textAlign:'center',paddingTop:8,
        fontWeight:'400'
      }
});