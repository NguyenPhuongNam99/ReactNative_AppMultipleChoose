import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default function Item({item,handlerremove}){
    return (
        <TouchableOpacity onPress={()=>handlerremove(item.key)} >
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    )
}
const styles  = StyleSheet.create({
    text:{
        borderColor:'#bbb',
        borderWidth:2,
        borderStyle:'dashed',
        borderRadius:10,
        padding:10,
        marginTop:20,
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        
    }

})