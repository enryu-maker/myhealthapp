# myhealth
<h2>Initial Pages</h2>
<p><b>Authentication:</b><br>
 
For the purpose of authentication we came up with the firebase so what is firebase? It is a google based platform that provides backend as a service.</br>
How does authentication work?</br>
After we created our project in firebase we used the authentication part of firebase and selected the email and password authentication. Firebase gives various important things to call such as </br>
``` JavaScript
config={
        apiKey: "##############",
        authDomain: "##############",
        projectId: "##############",
        storageBucket: "##############",
        messagingSenderId: "526787424668",
        appId: "##############",
        measurementId: "##############"
        }
```


Then we initialize the app suing the firebase function called initializeApp</br>
``` JavaScript
    if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
    } else {
    app = firebase.app();
    }
```


Here we check if the app is already connected or not if it is connected then run the already present app else clear the new app.</br>
Basic pages consist of Login page and signup page and we added the splash screen using https://www.npmjs.com/package/react-native-splash-screen </br>
</p>
<p align='center'>
   <img src="splash.png" width="250" title="Splash page">
  <img src="Login.png" width="250" title="Login page">
  <img src="signup.png" width="250" title="Signup page">
  
 
</p>
<h2>Addition feature Pages</h2></br>
<p>
<b>Navigation:</b><br>
For the purpose of Navigation we used stackNavigator and navigation container both of them are react native module <br>

``` JavaScript
    import { createStackNavigator } from "@react-navigation/stack"
    import { NavigationContainer } from "@react-navigation/native"

```

For the purpose of navigation we call all the component i.e all the screens using the function NavigationContainer we created stacks of all the screen  and able to navigate between this pages<br>
``` JavaScript
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Signup" component={Signup} />
         <Stack.Screen name="Home" component={Home}/>
         <Stack.Screen name="Clan" component={Clan}/>
         <Stack.Screen name="Calc" component={Calc}/>
         <Stack.Screen name="Friend" component={Friend}/>
         <Stack.Screen name="Chart" component={Charts}/>
         <Stack.Screen name="Step" component={Steps}/>
         <Stack.Screen name="Accomplishment" component={Accomplishment}/>
         <Stack.Screen name="Bmi" component={Bmi}/>
         <Stack.Screen name="Macro" component={Macro}/>
         <Stack.Screen name="Calorie" component={Calorie}/>
         <Stack.Screen name="Bmiout" component={Bmiout}/>
         <Stack.Screen name="Macout" component={Macout}/>
         <Stack.Screen name="Calout" component={Calout}/>
       </Stack.Navigator>
       </NavigationContainer>
```

Now we can use this name in the format of this.props.navigation.navigate(???name of page') and we can do navigation to all the pages available in Stack.Navigator.<br>
<b>Step Counter:</b><br>
For this problem we used the module named <br>
import { startCounter, stopCounter } from 'react-native-accurate-step-counter';<br>

After learning about the module we came to know that it uses a sensor named the pedometer present inside the phone which calculates the movement based on that <br>movements we get the value of steps that we moved.<br>
<h3>Calculator</h3></br>
<b>BMI Calculator:</b><br>

In the BMI calculator, we took 3 inputs i.e Height (Feet and inches) and weight. Then we created the function named sum that calculates the BMI and gives the</br> condition if the user is underweight, overweight, Healthy or obese.</br>
Formula used = 703*(weight/height2 )</br>
``` JavaScript
    let bmi=703*(weight/height2 )
```

<b>Macro Calculator:</b><br>

In the macro calculator, we took 5 different inputs like age, gender, height(Feet & inchs) and  weight. In order to find the different parameters such as fat,</br> carbohydrates etc we need to find calories first by using the formula</br>
``` JavaScript
   let protien = (calorie * 0.25) / 4 
   let carbohydtae = (calorie * 0.5) / 4 
   let fat = (calorie * 0.25) / 9 
   let sugar = (calorie / 4) - 10 
   let saturatedfat = (calorie / 4) - 5 
```
<b>Calorie Calculator:</b><br>

For the calorie calculator, we used only require 4 parameters age, gender, height(feet, inches) and weight.</br>
Formula</br>
``` JavaScript
    let maleColorie=weight + height - age - 161
    let femaleColorie=weight + height - age - 5
```

</p>
<p align='center'>
  <img src="home.png" width="250" title="Home page">
  <img src="steps.png" width="250" title="Step page">
  <img src="macro.png" width="250" title="Macro page">
 
</p>
