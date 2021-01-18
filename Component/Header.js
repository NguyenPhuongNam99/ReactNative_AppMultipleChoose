import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Color from '../Constant/Color';
const Header = props =>{
    return(
        <View style={styles.header}>
            <Text style={styles.headertitle}>{props.title}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    header:{
        backgroundColor: Color.primary,
        justifyContent:'center',
        padding:20,
        alignItems:'center',
        
    },
    headertitle:{
        fontSize:15,
        alignItems:'center',
    }

})

export default Header;