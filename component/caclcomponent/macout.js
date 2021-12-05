import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../header'

export default class Macout extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "white", height: "100%" }}>
                <View style={{ flex: 1 }}>
                    <Header></Header>
                    <View style={{ marginTop: '15%', alignSelf: 'center' }}>
                        <Image
                            style={{ height: 53, width: 200, justifyContent: 'center' }}
                            source={require('../../Assets/macro.png')}
                            resizeMode='contain'
                        />
                    </View>
                    <ScrollView style={styles.container}>
                        <View style={[styles.output, { width: 250, marginTop: '13%' }]}>
                            <Text style={styles.text}>
                                Output
                            </Text>

                        </View>
                        <View style={styles.output}>
                            <Text style={styles.text}>
                                Protein:{global.prot} grams/day
                            </Text>

                        </View>
                        <View style={styles.output}>
                            <Text style={styles.text}>
                                Carbohydrates:{global.carb} grams/day
                            </Text>

                        </View>
                        <View style={styles.output}>
                            <Text style={styles.text}>
                                Fat:{global.fat} grams/day
                            </Text>

                        </View>
                        <View style={styles.output}>
                            <Text style={styles.text}>
                                Sugar:{global.sug} grams/day
                            </Text>

                        </View>
                        <View style={styles.output}>
                            <Text style={styles.text}>
                                Saturated Fat:{global.satfat} grams/day
                            </Text>

                        </View>
                        <View style={styles.output}>
                            <Text style={styles.text}>
                                Food Energy:{global.calorie} calories/day
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
    }
})
