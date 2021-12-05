import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, StyleSheet, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import Header from './header'
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
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: ''
    })

  }

  signup = async (email, password) => {
    try {
      if (this.state.password < 6) {
        alert('Enter atleast 6 chracter password');
        return;
      }
      await app.auth().createUserWithEmailAndPassword(email, password)
      alert('User created')

    }
    catch (error) {
      console.log(error.toString());
      alert('User already Exists')
    }
  }
  render() {
    return (
      <View style={{ backgroundColor: "#white", height: "100%" }}>
        <View style={{ flex: 1 }}>
          <Header></Header>
          <View>
            <ScrollView>
              <KeyboardAvoidingView behavior='position'>

                <View style={{ marginTop: '15%', alignSelf: 'center' }}>
                  <Image
                    style={{ height: 100, width: 280 ,justifyContent:'center'}}
                    resizeMode='contain'
                    source={require('../Assets/signup.png')}
                  />
                </View>
                <View
                  style={{ marginTop: '10%', alignSelf: 'center' }}>
                  <Text style={styles.heading_text}>Email</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    returnKeyType={"next"}
                    onChangeText={(email) => this.setState({ email })}
                    keyboardType='ascii-capable'
                    placeholderTextColor={'black'}
                    autoCapitalize='none'
                  />
                  <Text style={styles.heading_text}>Password</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    returnKeyType="next"
                    onChangeText={(password) => this.setState({ password })}
                    keyboardType='ascii-capable'
                    placeholderTextColor={'black'}
                    autoCapitalize='none'
                  />
                  <TouchableOpacity
                    onPress={() => this.signup(this.state.email, this.state.password)}>
                    <View style={styles.btn}>
                      <Text style={styles.btn_text}>Signup</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={{ alignSelf: 'center', fontSize: 15, color: 'blue', textDecorationStyle: 'solid', textDecorationLine: 'underline', padding: -10 }}>
                      Already registered? Login
                    </Text>
                  </TouchableOpacity>
                </View>

              </KeyboardAvoidingView>
            </ScrollView>
          </View>
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
    width: 300
  },
  heading_text: {
    padding: 10,
    fontSize: 18,
    alignSelf: 'flex-start',
    fontWeight: '500',
    color: 'black'
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
    fontSize: 17,
  },
})
