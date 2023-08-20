import React from "react";
import { View, StyleSheet } from "react-native";

export const DeskSena = props => {
    return (
        <View style={{...styles.desk, ...props.style}}></View>
    )
}

const styles =  StyleSheet.create({
    desk: {
        width: 30,
        height: 30,
        borderRadius: 100,
        borderColor: 'grey',
        borderWidth: 2,
        margin: 6,
    }
})