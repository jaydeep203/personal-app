import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SafeAreaViewAndroid from '../Components/SafeAreaViewAndroid';
import {Headline} from "react-native-paper";

const Main = () => {
  return (
    <View>
        <Headline style={styles.head}>About Me</Headline>
        <Text style={styles.para}>
            Hey,
            I am Jaydeep Deshpande. I am student of B. Tech in computer science and Engineering. 
            Learning and Exploring things in computer Science field.
            I am trying to improve my coding skills by exploring a things in this field. I am studying
            currently in second year. 
            I would like to work on the projects which will improve my skills and impact on peoples.
        </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  head:{
    textAlign:'center',
    marginVertical:20,
    marginTop:80,
    fontWeight:"bold",
    color:"white",
    backgroundColor:"crimson",
    marginHorizontal:30,
    borderRadius:20,
  
    
  },
  para:{
    padding:10,
    marginTop:30,
    width:"60%",
    alignSelf:'center',
    backgroundColor:"rgb(244, 241, 241)",
    height:400,
    textAlignVertical:"center",
    borderRadius:10,
    fontSize:17
  }
})

const About = () => {
    return(
        <SafeAreaViewAndroid Component={Main} />
    )
}

export default About