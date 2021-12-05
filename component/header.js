import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Image
                    style={{ height: 80, width: 250, justifyContent: 'center' }}
                    source={require("../Assets/My_healthy_steps__2_-removebg-preview.png")}
                    resizeMode='contain'
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 100,
        backgroundColor: '#6ddb90',
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: 'center',
        position: "relative",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
})
