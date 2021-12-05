import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../header';

export default class Bmi extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: 0, num2: 0, num3: 0 };
  }
  Sum = () => {
    if (this.state.num1 != '' && this.state.num2 != '' && this.state.num3 != '') {
      global.feet = parseFloat(this.state.num1);
      global.weight = parseInt(this.state.num2);
      global.inch = parseInt(this.state.num3);
      global.height = (global.feet * 12) + global.inch;

      global.bmi = parseFloat(703 * (global.weight / (global.height * global.height))).toFixed(2);
      if (global.bmi < 18.5) {
        global.cond = 'Underweight'
      }
      else if (global.bmi > 18.5 && global.bmi < 24.9) {
        global.cond = 'Healthy'
      }
      else if (global.bmi > 25.0 && global.bmi < 29.9) {
        global.cond = 'Overweight'
      }
      else {
        global.cond = 'Obese'
      }
      this.props.navigation.navigate('Bmiout')
    }
    else {
      alert('Please enter the valid value')
    }

  }
  Next = () => {
    this.Sum();

  }
  render() {
    return (

      <View style={{ backgroundColor: "white", height: "100%" }}>
        <View style={{ flex: 1 }}>
          <Header></Header>
          <ScrollView>
          <KeyboardAvoidingView behavior='position'>
          <View style={{ marginTop: '15%', alignSelf: 'center' }}>
            <Image
              style={{ height: 55, width: 310, justifyContent: 'center' }}
              source={require('../../Assets/bmi.png')}
              resizeMode='contain'
            />
          </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.hgttxt}>Height</Text>
              <View style={styles.hght}>

                <View>
                  <Text style={styles.heading_text}>Feet</Text>
                  <TextInput
                    style={styles.input}
                    returnKeyType='next'
                    onChangeText={num1 => this.setState({ num1 })}
                    keyboardType='number-pad'
                    placeholder='Feet'
                    placeholderTextColor={'black'}
                    autoFocus={true}
                  />

                </View>
                <View>
                  <Text style={styles.heading_text}>Inches</Text>
                  <TextInput
                    style={styles.input}
                    returnKeyType='next'
                    onChangeText={num3 => this.setState({ num3 })}
                    keyboardType='number-pad'
                    placeholder='Inch'
                    placeholderTextColor={'black'}
                  />

                </View>

              </View>

              <Text style={styles.hgttxt}>Weight</Text>
              <View style={styles.wght}>

                <View>
                  <Text style={styles.heading_text}>Pounds</Text>
                  <TextInput
                    style={styles.input}
                    returnKeyType="next"
                    onChangeText={num2 => this.setState({ num2 })}
                    keyboardType='number-pad'
                    placeholder='Pound'
                    placeholderTextColor={'black'}
                  />

                </View>
              </View>


            </View>

          </KeyboardAvoidingView>
          
          <TouchableOpacity
            onPress={this.Next}>
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
  heading_text: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 17,
    alignSelf: 'flex-start',
    justifyContent: 'space-evenly',
    color:'black'


  },
  btn_text: {
    color: "#fff",
    fontSize: 17,
    alignSelf: 'center',
    fontWeight: '500'
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 100
  },
  hght: {
    backgroundColor: '#6ddb90',
    width: "90%",
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 20

  },
  wght: {
    backgroundColor: '#6ddb90',
    width: "90%",
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 20

  },
  hgttxt: {
    marginTop: 10,
    fontSize: 18,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    fontWeight: '500',
    color:'black'
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
    borderWidth:1,
    borderColor:'black'
  },
})