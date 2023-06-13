import Home from './Screens/Home';
import Register from './Screens/Register';
import About from './Screens/About';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    
      <NavigationContainer>

        <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen
          options={{headerShown:false}}
          name='Home' component={Home} />

          <Stack.Screen
          options={{headerShown:false}}
          name='Register' component={Register} />

          <Stack.Screen
          options={{headerShown:false}}
          name='About' component={About} />

        </Stack.Navigator>  

      </NavigationContainer>
    
    
  );
}

