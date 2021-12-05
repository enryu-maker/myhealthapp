import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image,ScrollView} from 'react-native'
import Header from './header'
export default class About extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "white", height: "100%" }}>
                <View style={{ flex: 1 }}>
                    <Header></Header>
                    <View style={{ marginTop: '15%' ,alignSelf:'center'}}>
                        <Image
                            style={{ height: 60, width: 270, justifyContent: 'center' }}
                            source={require('../Assets/about.png')}
                            resizeMode='contain'
                        />

                    </View>
                    <View style={styles.output}>
                    <Text style={styles.title}>
                        CSE2410
                    </Text>
                    <Text style={styles.outext}>
                            To, {'\n'}
                            Siddharth Bhattacharyya
                        </Text>
                        <Text style={styles.outext}>
                            From, {'\n'}
                            My Healthy Team
                        </Text>
                    </View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    output: {
        backgroundColor: '#6ddb90',
        height: 'auto',
        marginTop: '20%',
        borderRadius:20,
        width: '95%',
        alignSelf: 'center',
        padding:10
        //flexDirection: 'column',
    },
    outext: {
        marginTop: 25,
        borderWidth: 1,
        padding: 10,
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        //justifyContent: 'space-evenly',
        width: '98%',
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        //height: '',
        //justifyContent:'center'
    },
    title:{
        letterSpacing:0.5,
        fontSize:35,
        color:'black',
        alignSelf:'center',
        justifyContent:'center',
        fontFamily: 'Roboto-Regular',
        fontWeight:'500'
    }
})
