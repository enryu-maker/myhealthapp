import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../header'
export default class Calout extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "white", height: "100%" }}>
                <View style={{ flex: 1 }}>
                    <Header></Header>
                    <View style={{ marginTop: '15%', alignSelf: 'center' }}>
                        <Image
                            style={{ height: 53, width: 250, justifyContent: 'center' }}
                            source={require('../../Assets/calorie.png')}
                            resizeMode='contain'
                        />
                    </View>
                    <ScrollView style={styles.container}>
                        <View style={[styles.output, { width: 250, marginTop: '8%' }]}>
                            <Text style={styles.text}>
                                Output
                            </Text>

                        </View>
                        <View style={styles.output}>
                            <Text style={styles.text}>
                                maintain weight:<Text style={styles.text2}>{global.maintain} </Text>calories/day
                            </Text>

                        </View>
                        <View style={styles.output}>
                            <Text style={styles.text}>
                                weight loss 0.5 lb/week:<Text style={styles.text2}>{global.losshalf}</Text> calories/day
                            </Text>

                        </View>
                        <View style={styles.output}>
                            <Text style={styles.text}>
                                weight gain 0.5 lb/week:<Text style={styles.text2}>{global.gainhalf}</Text> calories/day
                            </Text>

                        </View>
                        <View style={styles.output}>
                            <Text style={styles.text}>
                                weight loss 1 lb/week:<Text style={styles.text2}>{global.lossone}</Text> calories/day
                            </Text>

                        </View>
                        <View style={styles.output}>
                            <Text style={styles.text}>
                                weight gain 1 lb/week:<Text style={styles.text2}>{global.gainone}</Text> calories/day
                            </Text>

                        </View>
                        <View style={styles.output}>
                            <Text style={styles.text}>
                                weight loss 2 lb/week:<Text style={styles.text2}>{global.losstwo}</Text> calories/day
                            </Text>

                        </View>
                        <View style={styles.output}>
                            <Text style={styles.text}>
                                weight gain 2 lb/week:<Text style={styles.text2}>{global.gaintwo}</Text> calories/day
                            </Text>

                        </View>

                    </ScrollView >

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6ddb90',
        height: '100%',
        margin: 10,
        marginTop: '10%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignSelf: 'auto',
        flexDirection: 'column',
    },
    output: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        height: 50,
        width: '98%',
        margin: 10,
        justifyContent: 'space-evenly',
        borderRadius: 10,
        marginTop: '2%',
        borderColor: 'black',
        borderWidth: 1
    },
    text: {
        color: 'black',
        fontSize: 18,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        fontWeight: '500'
    },
    text2: {
        color: 'green',
        fontSize: 18,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        fontWeight: '500'
    }
})