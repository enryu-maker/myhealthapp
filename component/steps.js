import React, { useEffect, useState } from 'react';
import { startCounter, stopCounter } from 'react-native-accurate-step-counter';
import { SafeAreaView, StyleSheet, Text, View, Image, LogBox } from 'react-native';
import Header from './header';
LogBox.ignoreAllLogs();
const Steps = () => {
    const [steps, setSteps] = useState(0);

    useEffect(() => {
        const config = {
            default_threshold: 12.0,
            default_delay: 100000000,
            cheatInterval: 3000,
            onStepCountChange: (stepCount) => { setSteps(stepCount) },
            onCheat: () => { console.log("User is Cheating") }
        }
        startCounter(config);
        return () => { stopCounter() }
    }, []);

    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <View style={{ flex: 1 }}>
                <Header></Header>
                <View style={{ marginTop: '10%', alignSelf: 'center' }}>
                    <Image
                        style={{ height: 53, width: 250, justifyContent: 'center' ,alignSelf:'center'}}
                        source={require('../Assets/steps.png')}
                    />
                </View>

                <View style={styles.box2}>
                    <Text style={{ fontSize: 27, fontWeight: '500', alignSelf: 'center', color: 'black' }}>
                        Steps counter
                    </Text>
                    <Text style={{ fontSize: 30, fontWeight: '500', alignSelf: 'center', color: 'black' }}>
                        {steps}
                    </Text>
                </View>


            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    box2: {
        marginTop: '45%',
        margin: 10,
        height: 150,
        width: 200,
        backgroundColor: '#6ddb90',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default Steps;