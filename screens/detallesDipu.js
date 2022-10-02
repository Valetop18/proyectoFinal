import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const DescripcionDiputado = ({ route }) => {

    const {diputado} = route.params;

    return (
        <View style={styles.principal}>
            <Text style={styles.title}>{diputado.nombre}</Text>
            <Text>{diputado.descripcion}</Text>
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
