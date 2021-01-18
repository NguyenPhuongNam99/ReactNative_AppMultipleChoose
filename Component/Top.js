import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default function Top(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}> Test ToDo App </Text>
        </View>
    );
};

const styles = StyleSheet.create({

    header:{
        backgroundColor:'red',
        height:20,
        flex:1,
        alignItems:'center',
      
    },
    title:{
       
        fontWeight:'bold',
        fontSize:18,
        color:'blue',
        backgroundColor:'green',
        padding:15,
        width:'100%',
        color:'black',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
    }
})
