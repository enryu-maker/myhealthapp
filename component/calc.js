import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from './header'
export default class Calc extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#white", height: "100%" }}>
                <View style={{ flex: 1 }}>
                    <Header></Header>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ marginTop: '15%', alignSelf: 'center' }}>
                            <Image
                                style={{ height: 55, width: 300, justifyContent: 'center' }}
                                source={require('../Assets/calculators.png')}
                                resizeMode='contain'
                            />
                        </View>
                        <ScrollView>
                            <View style={{ marginTop: '15%', flexDirection: 'column', justifyContent: 'space-around' }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Bmi')}>
                                    <View style={styles.btn1}>
                                        <Text style={styles.btn_text}>Adult BMI</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Macro')}>
                                    <View style={styles.btn1}>
                                        <Text style={styles.btn_text}>Macro calculator</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Calorie')}>
                                    <View style={styles.btn1}>
                                        <Text style={styles.btn_text}>Calorie calculator</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    btn1: {

        backgroundColor: '#6ddb90',
        height: 50,
        width: 200,
        borderRadius: 15,
        margin: 20,
        alignSelf: "center",
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1

    },
    btn_text: {
        color: "#fff",
        fontSize: 17,
        alignSelf: 'center',
        fontWeight: '400'
    },


})