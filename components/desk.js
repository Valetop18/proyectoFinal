import React from "react";
import { View, StyleSheet } from "react-native";

export const Desk = props => {
    return (
        <View style={{...styles.desk, ...props.style}}></View>
    )
}

const styles =  StyleSheet.create({
    desk: {
        width: 22,
        height: 22,
        borderRadius: 100,
        borderColor: 'grey',
        borderWidth: 1.3,
        margin: 2.5,
    }
})