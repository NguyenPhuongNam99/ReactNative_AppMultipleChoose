import React,{ useState } from 'react';
import {View, Text,StyleSheet,Button,TouchableWithoutFeedback,Keyboard, Alert} from 'react-native';
import Card from '../Component/Card';
import Color from '../Constant/Color';
import Input from '../Component/Input';
// import numberInputHander from '../Component/Numbercontainer'
import Numbercontainer from '../Component/Numbercontainer';

const StartGameScreen = props =>{

    const [enterValue, setEntervalue] = useState('');
    const [confirm,setConfirm] = useState(false);
    const [selected,setSelected] = useState();
    const numberInputHander = inputText =>{
        setEntervalue(inputText.replace(/[^0-9]/g, ''));
    };
    const resertnumber = ()=>{
        setEntervalue('');
        setConfirm(false);
    }

    const confirmselected = () =>{
        const choose = parseInt(enterValue);
        if(isNaN(choose ==NaN) || choose <0 || choose >99){
            Alert.alert('Lỗi','Number nằm trong khoảng từ 1--99',[{text:text,style:'destructive',onPress:resertnumber}])
          return;
        }  
        setConfirm(true);
        setSelected(choose);
        setEntervalue('');
        Keyboard.dismiss();

    }
    let confirmout;
    if(confirm){
        confirmout=(
            <View style={styles.cardcontainer}>
                 <Text style={styles.textcard}>Selected Number :</Text>
                 <Numbercontainer> {selected}</Numbercontainer>
                 <Button title='Tiep Tuc'/>
            </View>
           
        ) 
    }
    return (
        <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >  
        <View style={styles.screen}>
            <Text style={styles.title}>Start A New Game  </Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.text}>Select A New Game </Text>
                <Input style={styles.input} 
                   maxLength={2}
                    keyboardType="number-pad"
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText ={numberInputHander}
                    value ={enterValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Resert' color={Color.accent} onPress={resertnumber}/> 
                    </View>
                    <View style={styles.button}>
                        <Button title='Confirm' color={Color.primary} onPress={confirmselected}/> 
                    </View>
                </View>
            </Card>
            {confirmout}
        </View>
    </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
   screen:{
        flex:1,
        padding:20,
        //alignItems:'center'
   },
   text:{
        marginHorizontal:70,
        justifyContent:'center',
        alignItems:'center'
   },
   title:{
        fontSize:20,
        marginVertical:15,
        marginHorizontal:90,
   },
   inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        marginTop:15,
        marginBottom:90,
   },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        width: '100%',

    },
    button:{
        width:100
    },
    input:{
        width:100,
        textAlign:'center',
        
        
    },
    cardcontainer:{
        marginTop:70,
        alignItems:'center',
        shadowColor:'black',
        //shadowOffset:{ width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.5,
        elevation:1,
        backgroundColor: '#1DC48F',
        borderRadius: 10,
        paddingBottom:25,
        
        
    },
    textcard:{
        fontWeight:'bold',
        fontSize:15,
        paddingTop:5
    }

});

export default StartGameScreen;