import { View, Platform, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';

const SafeAreaViewAndroid = ({Component, ...rest}) => {
  return (
    <View style={{paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0, 
    backgroundColor:"white",
    flex:1}}>
        <SafeAreaView>
        <Component {...rest}/>
        </SafeAreaView>
      
    </View>
  )
}

export default SafeAreaViewAndroid