import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const DescripcionSenador = ({ route }) => {

    const {senador} = route.params;

    return (
        <View style={styles.principal}>
            <Text style={styles.title}>{senador.nombre}</Text>
            <Text>{senador.descripcion}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    principal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    title: {
        fontSize: 20, 
        fontFamily: 'CorReg',
        marginBottom: 10,
    }
})
