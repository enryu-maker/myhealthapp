import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import Header from '../header'
export default class Bmiout extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "white", height: "100%" }}>
                <View style={{ flex: 1 }}>
                    <Header></Header>
                    <View style={{ marginTop: '10%', alignSelf: 'center' }}>
                        <Image
                            style={{ height: 66, width: 310, justifyContent: 'center' }}
                            source={require('../../Assets/bmiout.png')}
                            resizeMode='contain'
                        />
                    </View>
                    <ScrollView style={styles.output}>
                        <Text style={styles.outext}>
                            For the information you entered:{"\n"}
                            Height: {global.feet} feet, {global.inch} inches
                        </Text>
                        <Text style={styles.outext}>
                            Your BMI is <Text style={[styles.highlight, { color: global.cond != 'Healthy' ? 'red' : 'green' }]}>{global.bmi}</Text>,
                            indicating your weight is in the <Text style={[styles.highlight, { color: global.cond != 'Healthy' ? 'red' : 'green' }]}>{global.cond}</Text> category for adults of your height.{'\n'}
                        </Text>
                        <View style={styles.outext1}>
                            <Text style={styles.outstyle}>
                                BMI
                            </Text>
                            <Text style={styles.outstyle}>
                                Weight status
                            </Text>
                        </View>
                        <View style={styles.outext1}>
                            <Text style={styles.outstyle}>
                                Below 18.5
                            </Text>
                            <Text style={[styles.outstyle, { color: 'red' }]}>
                                UnderWeight
                            </Text>
                        </View>
                        <View style={styles.outext1}>
                            <Text style={styles.outstyle1}>
                                18.5 - 24.9
                            </Text>
                            <Text style={[styles.outstyle, { color: 'green' }]}>
                                Healthy
                            </Text>
                        </View>
                        <View style={styles.outext1}>
                            <Text style={styles.outstyle}>
                                25.0 - 29.9
                            </Text>
                            <Text style={[styles.outstyle, { color: 'red' }]}>
                                OverWeight
                            </Text>
                        </View>
                        <View style={styles.outext1}>
                            <Text style={styles.outstyle}>
                                Above 30
                            </Text>
                            <Text style={[styles.outstyle, { color: 'red' }]}>
                                Obese
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    output: {
        backgroundColor: '#6ddb90',
        height: '120%',
        marginTop: '5%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '97%',
        alignSelf: 'center',
        flexDirection: 'column',

    },
    outext: {
        margin: 5,
        borderWidth: 1,
        padding: 10,
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        justifyContent: 'space-evenly',
        width: '98%',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        height: 'auto'
    },
    highlight: {
        color: 'green',
        fontWeight: '500'
    },
    outext1: {
        margin: 5,
        borderWidth: 1,
        height: 50,
        padding: 10,
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        justifyContent: 'space-evenly',
        width: '98%',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignContent: 'center'
    },
    outstyle: {
        fontSize: 16,
        alignSelf: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        fontWeight: '500',
        color: 'black'
    },
    outstyle1: {
        fontSize: 16,
        alignSelf: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        fontWeight: '500',
        color: 'black',
    }
})
