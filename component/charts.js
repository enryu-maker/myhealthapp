import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import Header from './header'
import { Dimensions } from "react-native";
import { LineChart } from 'react-native-chart-kit';
export default class Charts extends React.PureComponent {

    render() {
        return (
            <View style={{ backgroundColor: "white", height: "100%" }}>
                <View style={{ flex: 1 }}>
                    <Header></Header>
                    <View style={{ marginTop: '15%', alignSelf: 'center' }}>
                        <Image
                            style={{ height: 60, width: 270 ,justifyContent:'center'}}
                            source={require('../Assets/chart.png')}
                            resizeMode='contain'
                        />
                    </View>
                    <ScrollView style={{ marginTop: '25%', flexDirection: 'column' }}>
                        {/*<Text style={styles.text}>
                            Weight Loss
                        </Text>
                        <LineChart data={{
                            labels: ['Day1',
                                'Day3',
                                'Day5',
                                'Day7',
                                'Day9',
                                'Day11',
                            ],
                            datasets: [
                                {
                                    data: [0.1, 0.2, 0.4, 0.6, 0.3, 1.6],
                                    strokeWidth: 2,
                                },
                            ],
                        }}
                            width={Dimensions.get('window').width - 16}
                            height={220}
                            chartConfig={{
                                backgroundColor: '#c92ac7',
                                backgroundGradientFrom: '#7bede2',
                                backgroundGradientTo: '#6ddb90',
                                decimalPlaces: 2,
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                                alignSelf: 'center'
                            }}
                        />*/}
                        <Text style={styles.text}>
                            Steps Chart
                        </Text>
                        <LineChart data={{
                            labels: ['Day1',
                                'Day3',
                                'Day5',
                                'Day7',
                                'Day9',
                                'Day11',
                            ],
                            datasets: [
                                {
                                    data: [150, 180, 160, 150, 600, 150],
                                    strokeWidth: 2,
                                },
                            ],
                        }}
                            width={Dimensions.get('window').width - 16}
                            height={220}
                            chartConfig={{
                                backgroundColor: '#c92ac7',
                                backgroundGradientFrom: '#7bede2',
                                backgroundGradientTo: '#6ddb90',
                                decimalPlaces: 2,
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                                alignSelf: 'center',
                                borderColor: 'black',
                                borderWidth: 1
                            }}
                        />
                    </ScrollView>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: '400',
        color: '#fff',
        backgroundColor: '#6ddb90',
        height: 40,
        width: 120,
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderColor: 'black',
        borderWidth: 1
    }
})
