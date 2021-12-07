# myhealth
<h2>Initial Pages</h2>
<p><b>Authentication:</b><br>
For the purpose of authentication we came up with the firebase so what is firebase? It is a google based platform that provides backend as a service.</br>
How does authentication work?</br>
After we created our project in firebase we used the authentication part of firebase and selected the email and password authentication. Firebase gives various important things to call such as </br>
apiKey: "##############",</br>
authDomain: "##############",</br>
projectId: "##############",</br>
storageBucket: "##############",</br>
messagingSenderId: "526787424668",</br>
appId: "##############",</br>
measurementId: "##############"</br>

Then we initialize the app suing the firebase function called initializeApp</br>
if (!firebase.apps.length) {</br>
 app = firebase.initializeApp(firebaseConfig)</br>
} else {</br>
 app = firebase.app();</br>
}</br>

Here we check if the app is already connected or not if it is connected then run the already present app else clear the new app.</br>
Basic pages consist of Login page and signup page and we added the splash screen using https://www.npmjs.com/package/react-native-splash-screen </br>
</p>
<p align='center'>
   <img src="splash.png" width="250" title="Splash page">
  <img src="Login.png" width="250" title="Login page">
  <img src="signup.png" width="250" title="Signup page">
  
 
</p>
<p align='center'>
  <img src="home.png" width="250" title="Home page">
  <img src="steps.png" width="250" title="Step page">
  <img src="macro.png" width="250" title="Macro page">
 
</p>
