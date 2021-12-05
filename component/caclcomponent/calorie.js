import React, { Component } from 'react';
import { Text, StyleSheet, View,Button, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SwitchSelector from 'react-native-switch-selector';
import Header from '../header';

const options = [
    { label: "Female", value: 'f' },
    { label: "Male", value: 'm' }
];
export default class Calorie extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            age: '',
            weight: '',
            feet: '',
            inch: '',
            gender: false,
        })

    }
    femaleCalorie = (weight, feet, inch, age) => {
        let w1 = weight * 10;
        let t = 6.25 * ((feet * 12) + inch);
        let a = 5 * age;
        let cal = w1 + t - a - 161;
        return parseInt(cal)
    }
    maleCalorie = (weight, feet, inch, age) => {
        let w1 = weight * 10;
        let t = 6.25 * ((feet * 12) + inch);
        let a = 5 * age;
        let cal = w1 + t - a - 5;
        return cal
    }
    Calorie = () => {
        if (this.state.age != '' && this.state.feet != '' && this.state.weight != '') {
            global.age = parseInt(this.state.age)
            global.feet = parseFloat(this.state.feet);
            global.weight = parseInt(this.state.weight);
            global.value = parseInt(this.state.inch);
            global.inch1 = parseFloat(0 + '.' + global.value);
            global.height = global.feet + global.inch1;
            //for female
            if (this.state.gender === false) {
                global.maintain = this.femaleCalorie(global.weight, global.feet, global.value, global.age)
                global.losshalf = this.femaleCalorie((global.weight - 50), global.feet, global.value, global.age)
                global.gainhalf = this.femaleCalorie((global.weight + 50), global.feet, global.value, global.age)
                global.lossone = this.femaleCalorie((global.weight - 100), global.feet, global.value, global.age)
                global.gainone = this.femaleCalorie((global.weight + 100), global.feet, global.value, global.age)
                global.losstwo = this.femaleCalorie((global.weight - 200), global.feet, global.value, global.age)
                global.gaintwo = this.femaleCalorie((global.weight + 200), global.feet, global.value, global.age)
            }//male
            else {
                global.maintain = this.maleCalorie(global.weight, global.feet, global.value, global.age)
                global.losshalf = this.maleCalorie((global.weight - 50), global.feet, global.value, global.age)
                global.gainhalf = this.maleCalorie((global.weight + 50), global.feet, global.value, global.age)
                global.lossone = this.maleCalorie((global.weight - 100), global.feet, global.value, global.age)
                global.gainone = this.maleCalorie((global.weight + 100), global.feet, global.value, global.age)
                global.losstwo = this.maleCalorie((global.weight - 200), global.feet, global.value, global.age)
                global.gaintwo = this.maleCalorie((global.weight + 200), global.feet, global.value, global.age)
            } this.props.navigation.navigate('Calout')
        }
        else {
            alert('Invalid inputs')
        }
    }
    Next = () => {
        this.Calorie()
    }
    render() {
        return (
            <View style={{ backgroundColor: "#white", height: "100%" }}>
                <View style={{ flex: 1 }}>
                    <Header></Header>
                    <ScrollView>
                        <KeyboardAvoidingView behavior='position'>
                            <View style={{ marginTop: '15%', alignSelf: 'center' }}>
                                <Image
                                    style={{ height: 53, width: 250, justifyContent: 'center' }}
                                    source={require('../../Assets/calorie.png')}
                                    resizeMode='contain'
                                />
                            </View>



                            <View style={styles.body}>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                    <Text style={styles.heder_text}>Age:</Text>
                                    <TextInput keyboardType='number-pad'
                                        placeholderTextColor={'black'}
                                        onChangeText={(age) => this.setState({ age })}
                                        placeholder='Age'
                                        autoFocus={true}
                                        style={styles.input} />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                    <Text style={styles.heder_text}>
                                        Gender:
                                    </Text>
                                    <SwitchSelector
                                        initial={0}
                                        onPress={value => this.setState({ gender: true })}
                                        textColor='black'
                                        selectedColor='black'
                                        buttonColor='#6ddb90'
                                        borderColor='#fff'
                                        hasPadding
                                        options={options}
                                        style={styles.input3}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                    <Text style={styles.heder_text}>Height:</Text>
                                    <TextInput keyboardType='number-pad'
                                        onChangeText={(feet) => this.setState({ feet })}
                                        placeholder='Feet'
                                        placeholderTextColor={'black'}
                                        style={styles.input} />
                                    <TextInput keyboardType='number-pad'
                                        onChangeText={(inch) => this.setState({ inch })}
                                        placeholder='Inches'
                                        placeholderTextColor={'black'}
                                        style={styles.input2} />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                    <Text style={styles.heder_text}>Weight:</Text>
                                    <TextInput keyboardType='number-pad'
                                        onChangeText={(weight) => this.setState({ weight })}
                                        placeholder='Pounds'
                                        placeholderTextColor={'black'}
                                        style={styles.input} />
                                </View>


                            </View>


                            <TouchableOpacity
                                onPress={() => this.Next()}>
                                <View style={styles.btn}>
                                    <Text style={styles.btn_text}>Calculate</Text>
                                </View>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        margin: '10%',
        width: "95%",
        backgroundColor: '#6ddb90',
        flexDirection: "column",
        alignSelf: "center",
        borderRadius: 20,
        padding: 15


    },
    input: {
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#fff",
        width: 90,

    },
    heder_text: {
        marginTop: 10,
        padding: 10,
        fontSize: 18,
        fontWeight: '500',
        color:'black'
    },
    input2: {
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#fff",
        width: 120,
        marginLeft: 10
    },
    input3: {
        height: 40,
        marginTop: 12,
        width: 150,
        marginLeft: 10
    },
    btn: {
        backgroundColor: '#6ddb90',
        height: 50,
        width: 200,
        justifyContent: "center",
        borderRadius: 15,
        alignItems: "center",
        marginBottom: '10%',
        alignSelf: "center",
        margin: '1%',
        borderColor: 'black',
        borderWidth: 1
    },
    btn_text: {
        color: "#fff",
        fontSize: 17,
    },
})
