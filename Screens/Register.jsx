import { View, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react';
import SafeAreaViewAndroid from '../Components/SafeAreaViewAndroid';
import {TextInput, Checkbox, Button, Headline} from "react-native-paper";

const Main = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  return (
    <View>
      <Headline style={styles.heading}>Register</Headline>
      <TextInput placeholder='Full Name'
      style={styles.inputs} />
      <TextInput placeholder='Email' style={styles.inputs} />
      <TextInput placeholder='Password' secureTextEntry={true} style={styles.inputs} />
      <View style={{marginLeft:40, display:'flex', flexDirection:"row", alignItems:'center', marginVertical:20}}>
        <Checkbox status={checked?"checked":"unchecked"} onPress={()=> setChecked(!checked)}/>
        <Text>Accept the terms and conditions.</Text>
      </View>
      <Button textColor='white' style={styles.btn} disabled={checked?false:true} onPress={()=> console.log("Registered")}>Register</Button>
    </View>
  )
};

const styles = StyleSheet.create({
  inputs:{
    backgroundColor:"white", 
    marginHorizontal:50, 
    marginVertical:10
  },
  heading:{
    textAlign:'center',
    marginVertical:20,
    color:"crimson",
    fontWeight: "bold"
  },
  btn:{
    backgroundColor:"crimson",
    borderRadius:50,
    paddingVertical:4,
    width:"60%",
    alignSelf:"center"
  }
})

const Register = ({navigation}) => {
  return(
    <SafeAreaViewAndroid Component={Main} navigation={navigation} />
  )
}

export default Register