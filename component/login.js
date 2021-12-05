import React, { Component } from 'react'
import { Alert,KeyboardAvoidingView, Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Switch, Image } from 'react-native'
import Header from './header';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDNyZPdxfHEFU_AiJf-0RLaouzJtPjisxA",
  authDomain: "myhealthyapp-495fa.firebaseapp.com",
  projectId: "myhealthyapp-495fa",
  storageBucket: "myhealthyapp-495fa.appspot.com",
  messagingSenderId: "526787424668",
  appId: "1:526787424668:web:8ded7c735273fb96f35859",
  measurementId: "G-79WY2J9ZGB"
};
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: '',
      switchValue: false
    })

  }
  forgotPassword = (email) => {
    if (this.state.email != '') {
      app.auth().sendPasswordResetEmail(email)
        .then(function (user) {
          Alert.alert('Please check your email...')
        }).catch(function (e) {
          Alert.alert('Wrong email plz check')
          console.log(e)
        })
    }
    else {
      Alert.alert('Please enter the email')
    }
  }

  login = async (email, password) => {
    try {
      await app.auth().signInWithEmailAndPassword(email, password)
      if (app.auth().currentUser != null) {
        this.props.navigation.navigate('Home')
      };
    }
    catch (error) {
      console.log(error.toString());
      await Alert.alert('Incorrect username or password')
    }
  }
  render() {

    return (
      <View style={{ backgroundColor: "#white", height: "100%" }}>
        <View style={{ flex: 1 }}>
          <Header></Header>

          <ScrollView>
            <KeyboardAvoidingView behavior='position'>
              <View style={{ marginTop: '10%', alignSelf: 'center' }}>
                <Image
                  style={{ height: 100, width: 242, justifyContent: 'center', alignSelf: 'center' }}
                  resizeMode='contain'
                  source={require('../Assets/login.png')}
                />
                <Text style={styles.heading_text}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  returnKeyType={"next"}
                  onChangeText={(email) => this.setState({ email })}
                  keyboardType='email-address'
                  placeholderTextColor={'black'}
                  autoCapitalize='none'
                />
                <Text style={styles.heading_text}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  returnKeyType="go"
                  onChangeText={(password) => this.setState({ password })}
                  keyboardType='ascii-capable'
                  secureTextEntry={true}
                  placeholderTextColor={'black'}
                  autoCapitalize='none'
                />

                <TouchableOpacity
                  onPress={() => this.login(this.state.email, this.state.password)}>
                  <View style={styles.btn}>
                    <Text style={styles.btn_text}>Login</Text>
                  </View>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
                  <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Switch
                      value={this.state.switchValue}
                      onValueChange={(switchValue) => this.setState({ switchValue })}
                    />
                    <Text style={{ color: 'blue',textDecorationStyle: 'solid', textDecorationLine: 'underline' }}>Remember me</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => this.forgotPassword(this.state.email)}>
                    <Text style={{ color: 'blue' ,textDecorationStyle: 'solid', textDecorationLine: 'underline'}}>Forgot Password?</Text>
                  </TouchableOpacity>

                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Signup')}>
                  <View style={styles.btn}>
                    <Text style={styles.btn_text}>Signup</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 300,
    color: 'black'

  },
  heading_text: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 18,
    color: 'black',
    alignSelf:'flex-start'
  },
  btn: {
    backgroundColor: '#6ddb90',
    height: 50,
    width: 200,
    justifyContent: "center",
    borderRadius: 15,
    alignItems: "center",
    margin: 20,
    alignSelf: "center",
    borderColor: 'black',
    borderWidth: 1
  },
  btn_text: {
    color: "#fff",
    fontSize: 18,
  },
})