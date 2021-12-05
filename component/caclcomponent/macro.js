import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Switch, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import CheckBox from 'react-native-check-box'
import SwitchSelector from 'react-native-switch-selector'

import Header from '../header'
const options = [
    { label: "Female", value: 'f' },
    { label: "Male", value: 'm' }
];

export default class Macro extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            age: '',
            weight: '',
            feet: '',
            inch: '',
            gender: false,
            maintain: false,
            losshalf: false,
            gainhalf: false,
            lossone: false,
            gainone: false,
            losstwo: false,
            gaintwo: false
        })

    }
    create = (cal) => {
        let prot = parseInt((cal * 0.25) / 4)
        let carb = parseInt((cal * 0.5) / 4)
        let fat = parseInt((cal * 0.25) / 9)
        let sug = parseInt((cal / 4) - 10)
        let satfat = parseInt((cal / 4) - 5)
        return { prot, carb, fat, sug, satfat };

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
        return parseInt(cal)
    }
    goal = () => {
        let additional = 0
        if (this.state.losshalf) {
            additional = -50
        }
        else if (this.state.gainhalf) {
            additional = 50
        }
        else if (this.state.lossone) {
            additional = -100
        }
        else if (this.state.gainone) {
            additional = 100
        }
        else if (this.state.losstwo) {
            additional = -200
        }
        else if (this.state.gaintwo) {
            additional = 200
        }
        else {
            additional = 0
        }
        return additional
    }
    finder = () => {
        if (this.state.age != '' && this.state.feet != '' && this.state.weight != '') {
            global.age = parseInt(this.state.age)
            global.feet = parseFloat(this.state.feet);
            global.weight = parseInt(this.state.weight);
            global.value = parseInt(this.state.inch);
            global.inch1 = parseFloat(0 + '.' + global.value);
            global.height = global.feet + global.inch1;
            //for female
            if (this.state.gender === false) {

                let newweight = global.weight + this.goal()
                global.calorie = this.femaleCalorie(newweight, global.feet, global.value, global.age)
                let values = this.create(global.calorie)

                global.prot = values.prot
                global.carb = values.carb
                global.fat = values.fat
                global.sug = values.sug
                global.satfat = values.satfat
            }//male
            else {
                let newweight = global.weight + this.goal()
                global.calorie = this.maleCalorie(newweight, global.feet, global.value, global.age)
                let values = this.create(global.calorie)
                global.prot = values.prot
                global.carb = values.carb
                global.fat = values.fat
                global.sug = values.sug
                global.satfat = values.satfat
            }
            this.props.navigation.navigate('Macout')
        }
        else {
            alert('Invalid inputs')
        }
    }
    Next = () => {
        this.finder()
    }
    render() {

        return (
            <View style={{ backgroundColor: "#white", height: "100%" }}>
                <View style={{ flex: 1 }}>
                    <Header></Header>
                    <ScrollView>
                        <View style={{ marginTop: '10%', alignSelf: 'center' }}>
                            <Image
                                style={{ height: 53, width: 200, justifyContent: 'center' }}
                                source={require('../../Assets/macro.png')}
                                resizeMode='contain'
                            />
                        </View>
                        <KeyboardAvoidingView behavior='position'>
                            <View style={styles.body}>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                    <Text style={styles.heder_text}>Age:</Text>
                                    <TextInput keyboardType='numeric'
                                        onChangeText={(age) => this.setState({ age })}
                                        style={styles.input}
                                        placeholderTextColor={'black'}
                                        autoCapitalize='none'
                                        autoFocus={true}
                                        placeholder='Age' />
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
                                    <TextInput keyboardType='numeric'
                                        placeholder='Feet'
                                        onChangeText={(feet) => this.setState({ feet })}
                                        placeholderTextColor={'black'}
                                        autoCapitalize='none'
                                        style={styles.input} />
                                    <TextInput keyboardType='numeric'
                                        placeholder='Inches'
                                        onChangeText={(inch) => this.setState({ inch })}
                                        placeholderTextColor={'black'}
                                        autoCapitalize='none'
                                        style={styles.input2} />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                    <Text style={styles.heder_text}>Weight:</Text>
                                    <TextInput keyboardType='numeric'
                                        onChangeText={(weight) => this.setState({ weight })}
                                        placeholderTextColor={'black'}
                                        autoCapitalize='none'
                                        placeholder='Pounds'
                                        style={styles.input} />
                                </View>
                                <View style={{ flexDirection: 'column', alignItems: 'flex-start', padding: 10, justifyContent: 'flex-start' }}>
                                    <Text style={styles.heder_text}>Your Goal:</Text>
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <Switch
                                                value={this.state.maintain}
                                                onValueChange={(maintain) => this.setState({ maintain })}
                                            />
                                            <Text style={[
                                                styles.check,
                                                this.state.maintain ? { color: '#fff' } : {}
                                            ]}
                                            >Maintain weight</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <Switch
                                                value={this.state.losshalf}
                                                onValueChange={(losshalf) => this.setState({ losshalf })}
                                            />
                                            <Text style={[
                                                styles.check,
                                                this.state.losshalf ? { color: '#fff' } : {}
                                            ]}>Mid weight loss of 0.5 lb/week</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <Switch
                                                value={this.state.gainhalf}
                                                onValueChange={(gainhalf) => this.setState({ gainhalf })}
                                            />
                                            <Text style={[
                                                styles.check,
                                                this.state.gainhalf ? { color: '#fff' } : {}
                                            ]}>Mid weight gain of 0.5 lb/week</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <Switch
                                                value={this.state.lossone}
                                                onValueChange={(lossone) => this.setState({ lossone })}
                                            />

                                            <Text style={[
                                                styles.check,
                                                this.state.lossone ? { color: '#fff' } : {}
                                            ]}>weight loss of 1 lb/week</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <Switch
                                                value={this.state.gainone}
                                                onValueChange={(gainone) => this.setState({ gainone })}
                                            />
                                            <Text style={[
                                                styles.check,
                                                this.state.gainone ? { color: '#fff' } : {}
                                            ]}>weight gain of 1 lb/week</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <Switch
                                                value={this.state.losstwo}
                                                onValueChange={(losstwo) => this.setState({ losstwo })}
                                            />

                                            <Text style={[
                                                styles.check,
                                                this.state.losstwo ? { color: '#fff' } : {}
                                            ]}>Extreme weight loss of 2 lb/week</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <Switch
                                                value={this.state.gaintwo}
                                                onValueChange={(gaintwo) => this.setState({ gaintwo })}
                                            />
                                            <Text style={[
                                                styles.check,
                                                this.state.gaintwo ? { color: '#fff' } : {}
                                            ]}>Extreme weight gain of 2 lb/week</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>



                        </KeyboardAvoidingView>
                        <TouchableOpacity
                            onPress={() => { this.Next() }}>
                            <View style={styles.btn}>
                                <Text style={styles.btn_text}>Calculate</Text>
                            </View>
                        </TouchableOpacity>
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
        height: 'auto',
        backgroundColor: '#6ddb90',
        flexDirection: "column",
        alignSelf: "center",
        position: "relative",
        borderRadius: 20,

    },
    input: {
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#fff",
        width: 90,

    },
    input2: {
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#fff",
        width: 90,
        marginLeft: 10
    },
    heder_text: {
        marginTop: 10,
        padding: 10,
        fontSize: 18,
        fontWeight: '500',
        color:'black'
    },
    check: {
        marginLeft: 5,
        color: 'black',
        alignSelf: 'center'
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
    input3: {
        height: 40,
        marginTop: 12,
        width: 150,
        marginLeft: 10
    }
})
