import React from 'react';
import {View,Text,StyleSheet, TextInput} from 'react-native';

const Input = props =>{
    return  <TextInput {...props} style={{...styles.input ,...props.style}} />
};

const styles = StyleSheet.create({

    input:{
        height:40,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:15,
        // justifyContent:'center',
        // alignItems:'center',
        // flex:1,
        marginHorizontal:70,
        // color:"red"
    }
});
export default Input;