import React from 'react'
import { View, Text } from 'react-native';
import { Button, Appbar, Avatar, Headline } from "react-native-paper";
import SafeAreaViewAndroid from '../Components/SafeAreaViewAndroid';


const Main = ({navigation}) => {
  return(
    <View style={{backgroundColor:"white"}}>
      <Appbar style={{backgroundColor:"crimson"}}>
        <Appbar.Action icon={"heart"} 
        iconColor="pink"
        onPress={()=>console.log("Heart")} />
        <Appbar.Content title="Home" titleStyle={{color:"white"}} />
        <Appbar.Action 
        icon={"account-circle-outline"}
         iconColor="pink"
         onPress={()=>console.log("Account")} />
        <Appbar.Action icon={"camera"}
         iconColor="pink"
         onPress={()=>console.log("camera")} />
      </Appbar>
      
      <Avatar.Icon To style={{backgroundColor:"crimson", alignSelf:"center", margin:30}} icon={"account-circle"} 
        color={"white"}
        
        size={160} />
      
        <Button textColor='white' 
        onPress={()=>navigation.navigate("Register")}
        style={{backgroundColor:"blue", marginHorizontal:60}} >Register</Button>

        <Headline style={{textAlign:"center", marginTop:20}}>About Me</Headline>

        <Text style={{textAlign:"center", width:"50%", alignSelf:"center", marginTop:30}}>
          Hey,
          I am Jaydeep Deshpande. I am student of B. Tech in computer science and Engineering. 
          Learning and Exploring things in computer Science field.
        </Text>
        <Button textColor='white'
        style={{backgroundColor:"crimson",
        width:20,
        alignSelf:"center",
        margin:10}}
        onPress={()=>navigation.navigate("About")} >more</Button>
    </View>
  );
};

const Home = ({navigation})=>{
  return( <SafeAreaViewAndroid 
    Component={Main} 
    navigation={navigation} 
    />);
};

export default Home;