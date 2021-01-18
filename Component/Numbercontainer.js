import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Color from '../Constant/Color';
export default function Numbercontainer(props){
    return (
        <View style={styles.container}>
            <Text style={styles.text}> {props.children}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
container:{
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    padding:10,
    marginVertical:10,
    color:Color.accent
},
text:{
    color:Color.accent,
    fontSize:15
}
});