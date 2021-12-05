import React, { Component} from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Switch, ScrollView } from 'react-native'
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

export default class Home extends Component {
    logout = () => {
        app.auth().signOut();
        this.props.navigation.navigate('Login')
      };
    
    render() {
        return (
            <View style={{ backgroundColor: "#white", height: "100%" }}>
                <View style={{ flex: 1 }}>
                    <Header></Header>
                <View style={styles.welcome}>
                <TouchableOpacity style={[styles.logout,{alignSelf:'flex-end'}]}
                    onPress={()=>{this.logout()}}>
                        <Text style={styles.logouttext}>Logout</Text>
                    </TouchableOpacity>
                    <Text style={styles.welcometext}>Welcome, {[app.auth().currentUser.email]}</Text>
                    
                </View>

                <ScrollView style={{ flexDirection: 'column',marginTop:'0%'}}>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <View style={{flexDirection:'column',justifyContent:'space-around'}}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Step')}>
                            <View style={styles.btn2}>
                                <Text style={styles.btn_text}>My steps</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Calc')}>
                            <View style={styles.btn1}>
                                <Text style={styles.btn_text}>My calculator</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        <View>
                        <Image
                            style={{ height: 250, width:97, justifyContent: 'center' , margin:10 }}
                            resizeMode='contain'
                            source={require('../Assets/right.png')}
                        />
                        </View>
                        
                        </View>
                        <View style={{flexDirection:'row-reverse',justifyContent:'space-around'}}>
                        <View style={{flexDirection:'column',justifyContent:'space-around'}}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Chart')}>
                            <View style={styles.btn2}>
                                <Text style={styles.btn_text}>My Charts</Text>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Accomplishment')}>
                            <View style={styles.btn2}>
                                <Text style={styles.btn_text}>Accomplishment</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('About')}>
                            <View style={styles.btn2}>
                                <Text style={styles.btn_text}>About</Text>
                            </View>
                        </TouchableOpacity>

                        
                        </View>
                    
                        <Image
                            style={{ height: 250, width:100, justifyContent: 'center' , margin:10 }}
                            source={require('../Assets/left.png')}
                            resizeMode='contain'
                        />
                        </View>
                        
                        </ScrollView>
                    </View>

                    
                </View>
            

        )
    }
}

const styles = StyleSheet.create({
    header: {
        //marginTop:'5%',
        width: "100%",
        height: 100,
        backgroundColor: '#6ddb90',
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: 'center',
        //marginTop:20,
        position: "relative",
        //borderRadius:20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    header_text: {
        fontSize: 28,
        color: "white",
        margin: 40,
    },
    heading_text: {
        marginTop: 10,
        //padding:8,
        marginLeft: 15,
        fontSize: 16,
    },
    btn1: {
        backgroundColor: '#6ddb90',
        height: 50,
        width: 200,
        borderRadius: 15,
        margin: 20,
        alignSelf: "flex-start",
        justifyContent:'center',
        borderColor:'black',
        borderWidth:1
    
    },
    btn2: {
        backgroundColor: '#6ddb90',
        height: 50,
        width: 200,
        borderRadius: 15,
        margin: 20,
        alignSelf: "flex-end",
        justifyContent:'center',
        borderColor:'black',
        borderWidth:1
    },
    btn_text: {
        color: "#fff",
        fontSize: 17,
        alignSelf:'center',
        fontWeight:'400'
    },
    title: {
        fontSize: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: '400',
        color: 'white'
    },
    welcome:{
        margin:20,
        alignSelf:'auto',
        color:'black',
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    welcometext:{
        fontSize:22,
        fontWeight:'500',
        color:'black'
    },
    logout:{
        backgroundColor:'#6ddb90',
        height:30,
        width:60,
        margin:1,
        borderRadius:10,
        justifyContent:'center',
        borderColor:'black',
        borderWidth:1
    },
    logouttext:{
        alignSelf:'center',
        color:'black',
        fontWeight:'500'

    }
})
