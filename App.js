import React, {useEffect}from 'react';
import { SafeAreaView, StyleSheet, Text, View,StatusBar} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './component/login';
import Signup from './component/signup';
import Home from './component/home';
import Calc from './component/calc';
import Charts from './component/charts';
import Steps from './component/steps';
import Accomplishment from './component/accomp';
import Bmi from './component/caclcomponent/bmi';
import Macro from './component/caclcomponent/macro';
import Calorie from './component/caclcomponent/calorie';
import Bmiout from './component/caclcomponent/bmiout';
import Macout from './component/caclcomponent/macout';
import Calout from './component/caclcomponent/calout';
import About from './component/About';
import SplashScreen from 'react-native-splash-screen';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
let cond;
if (!firebase.app.length){
  cond='Home'
}
else{
  cond='Login'
}
const Stack = createStackNavigator();
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName={cond}
        screenOptions={{headerShown:false}}
         >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Calc" component={Calc}/>
          <Stack.Screen name="Chart" component={Charts}/>
          <Stack.Screen name="Step" component={Steps}/>
          <Stack.Screen name="Accomplishment" component={Accomplishment}/>
          <Stack.Screen name="Bmi" component={Bmi}/>
          <Stack.Screen name="Macro" component={Macro}/>
          <Stack.Screen name="Calorie" component={Calorie}/>
          <Stack.Screen name="Bmiout" component={Bmiout}/>
          <Stack.Screen name="Macout" component={Macout}/>
          <Stack.Screen name="Calout" component={Calout}/>
          <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });