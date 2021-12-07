# myhealth
<h2>Initial Pages</h2>
<p><b>Authentication:</b>
For the purpose of authentication we came up with the firebase so what is firebase? It is a google based platform that provides backend as a service. 
How does authentication work?
After we created our project in firebase we used the authentication part of firebase and selected the email and password authentication. Firebase gives various important things to call such as 
apiKey: "##############",
authDomain: "##############",
projectId: "##############",
storageBucket: "##############",
messagingSenderId: "526787424668",
appId: "##############",
measurementId: "##############"

Then we initialize the app suing the firebase function called initializeApp
if (!firebase.apps.length) {
 app = firebase.initializeApp(firebaseConfig)
} else {
 app = firebase.app();
}

Here we check if the app is already connected or not if it is connected then run the already present app else clear the new app.
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
