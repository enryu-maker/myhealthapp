import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from './header'
export default class Accomplishment extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "white", height: "100%" }}>
                <View style={{ flex: 1 }}>
                    <Header></Header>
                    <View style={{ marginTop: '15%' ,alignSelf:'center'}}>
                        <Image
                            style={{ height: 60, width: 270, justifyContent: 'center' }}
                            source={require('../Assets/accom.png')}
                            resizeMode='contain'
                        />
                    </View>
                    <View style={styles.headdata}>
                        <Text style={styles.head}>Trophies:</Text>
                    </View>
                    <ScrollView>

                    <View style={styles.box}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View style={styles.boxstyle}>
                                <Text style={styles.text}>
                                    Slow day
                                </Text>
                                <Image
                                    style={{ height: 60, width: 100,justifyContent:'center' ,alignSelf:'center'}}
                                    source={require('../Assets/tort.png')}
                                    resizeMode='contain'
                                />
                                <Text style={styles.text}>
                                    6
                                </Text>
                            </View>
                            <View style={styles.boxstyle}>
                                <Text style={styles.text}>
                                    Working hard
                                </Text>
                                <Image
                                    style={{ height: 80, width: 45,justifyContent:'center',alignSelf:'center' }}
                                    source={require('../Assets/run.png')}
                                    resizeMode='contain'
                                />
                                <Text style={styles.text}>
                                    2
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%' }}>

                            <View style={styles.boxstyle}>
                                <Text style={styles.text}>
                                    Couch potato
                                </Text>
                                <Image
                                    style={{ height: 55, width: 60,justifyContent:'center',alignSelf:'center' }}
                                    source={require('../Assets/usuck.png')}
                                    resizeMode='contain'
                                />
                                <Text style={styles.text}>
                                    1
                                </Text>
                            </View>
                            <View style={styles.boxstyle}>
                                <Text style={styles.text}>
                                    Superman
                                </Text>
                                <Image
                                    style={{ height: 80, width: 60 ,justifyContent:'center',alignSelf:'center' }}
                                    source={require('../Assets/super.png')}
                                    resizeMode='contain'
                                />
                                <Text style={styles.text}>
                                    3
                                </Text>
                            </View>
                        </View>
                    </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    head: {
        height: 50,
        width: 150,
        backgroundColor: '#6ddb90',
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: '500',
        color: '#fff'
    },
    headdata: {
        margin: '8%',
        justifyContent: 'center',
        color:'#fff'
    },
    box: {
        flexDirection: 'column',
    },
    boxstyle: {
        borderColor: '#6ddb90',
        height: 160,
        width: 120,
        borderWidth: 2,
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignSelf:'center'
    },
    text: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 15
    }
})
