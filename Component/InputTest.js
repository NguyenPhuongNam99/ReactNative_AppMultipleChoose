import React from 'react';
import {View,Text,StyleSheet, TextInput} from 'react-native';

const Input = props =>{
    return  <TextInput {...props} style={{...styles.input ,...props.style}} />
};

const style=StyleSheet.create({
    input:{
        height: 40, borderColor: 'gray', borderWidth: 1 ,
    width:270,
    marginLeft:16,
    marginRight:20
    }
})