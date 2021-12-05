# myhealth
Authentication:
For the purpose of authentication  we came up with the firebase so what is firebase?It is a google based platform which provides backend as service. 
How does authentication work?
After we created our project in firebase we used the authentication part of firebase and selected the email and password authentication. Firebase gives various important things to call such as 
apiKey: "AIzaSyDNyZPdxfHEFU_AiJf-0RLaouzJtPjisxA",
authDomain: "myhealthyapp-495fa.firebaseapp.com",
projectId: "myhealthyapp-495fa",
storageBucket: "myhealthyapp-495fa.appspot.com",
messagingSenderId: "526787424668",
appId: "1:526787424668:web:8ded7c735273fb96f35859",
measurementId: "G-79WY2J9ZGB"

Then we initialize the app suing the firebase function called initializeApp
if (!firebase.apps.length) {
 app = firebase.initializeApp(firebaseConfig)
} else {
 app = firebase.app();
}

Here we check if the app is already connected or not if it is connected then run the already present app else cleat the new app.

Signup:
signup=(email,password)=>{
   try{
     if(this.state.password<6){
       alert('Enter at least 6 character password');
       return;
     }
     app.auth().createUserWithEmailAndPassword(email,password)
     alert('User created')
          
   }
   catch(error){
     console.log(error.toString());
     alert('User already Exists')
   }
 }

After taking input from user we move toward the the auth function from the firebase and provided with if the type of authentication in this case createUserWithEmailAndPassword then we pass the inputted email and password to the given function and this will creat the new user
Login:
login=(email,password)=>{
   try{
     if(this.state.email===''){
       alert('Please enter the valid email and password')
     }
     else{
     app.auth().signInWithEmailAndPassword(email,password)
     if (app.auth().currentUser!=null){
       this.props.navigation.navigate('Home')
     }
     }
    
   }
   catch(error){
     console.log(error.toString());
     alert('Incorrect username or password')
   }
 }

After creation of user we move towards login in the login function we use the same auth function but here we use the signInWithEmailAndPassword and now we are authenticated and forwarded towards to home screen 

Forget-password:
As we used firebase for login and signup we also implemented the forgot password method from firebase 
forgotPassword = (email) => {
   if(this.state.email!=''){
   app.auth().sendPasswordResetEmail(email)
     .then(function (user) {
       alert('Please check your email...')
     }).catch(function (e) {
       alert('Wrong email plz check')
       console.log(e)
     })
   }
   else{
     alert('Please enter the email')
   }}
We created the function named forgotPassword  and again called the auth function and used the sendPasswordResetEmail. In this forgetPassword function we used it take parameter as email and send the password reset link on the email address you entered .

Navigation:
For the purpose of Navigation we used stackNavigator and navigation container both of them are react native module 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

For the purpose of navigation we call all the component i.e all the screens using the function NavigationContainer we created stacks of all the screen 
<NavigationContainer>
       <Stack.Navigator initialRouteName="Login"
       screenOptions={{headerShown:false}}
        >
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

Now we can use this name in the format of this.props.navigation.navigate(‘name of page') and we can do navigation to all the pages available in Stack.Navigator.
 
Step Counter:
For this problem we used the module named 
import { startCounter, stopCounter } from 'react-native-accurate-step-counter';

After learning about the module we came to know that it uses a sensor named the pedometer present inside the phone which calculates the movement based on that movements we get the value of steps that we moved.
const [steps, setSteps] = useState(0);
 
 useEffect(() => {
   const config = {
     default_threshold: 15.0,
     default_delay: 150000000,
     cheatInterval: 3000,
     onStepCountChange: (stepCount) => { setSteps(stepCount) },
     onCheat: () => { console.log("User is Cheating") }
   }
   startCounter(config);
   return () => { stopCounter() }
 }, []);
 

Here we can see that that we made an variable named config which consist of all the default parameters this default parameters are feed to the the function named startCounter from the module and as the phone move we will see the change i the steps
