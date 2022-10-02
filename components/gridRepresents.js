import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const GridRepresent = ({item, onSelected}) => {

    const asistencia = '100%';
    const votacion = '100%';
    const participacion = '100%'

    return (
        <View style={styles.card}>
            <TouchableOpacity
            onPress={() => onSelected(item)}
            style={{...styles.container}}
            >
                <View style={styles.containImage}>
                    <Image style={styles.image} source={item.foto} />
                    <Text style={styles.partido}>{item.partido}</Text>
                </View>
                <View>
                    <Text style={styles.name}>{item.nombre}</Text>
                    <View style={styles.containerInfo}>
                        <View style={styles.estadistica}>
                            <FontAwesome name="check-circle-o" size={20} color="green" />
                            <Entypo name="circle-with-cross" size={20} color="red" />
                            <FontAwesome name="check-circle-o" size={20} color="black" />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.informacion}>Asistencia {asistencia}</Text>
                            <Text style={styles.informacion}>Votación {votacion}</Text>
                            <Text style={styles.informacion}>Presentación de Proyectos {participacion}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
    },
    container: {
        marginVertical: '1%',
        display: 'flex',
        borderWidth: 1,
        alignContent: 'center',
        borderColor: 'grey',
        flexDirection: 'row',
        borderRadius: 6,
        width: '97%',
        backgroundColor: 'yellow',
        elevation: 3,
        shadowColor: 'red',
        shadowOpacity: 0.3,
        shadowOffset: {width: 5, height: 5},
        shadowRadius: 10,
    },
    containImage: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 8,
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 100,
        marginTop: 10,
    },
    info: {
        marginLeft: 8,
    },
    name: {
        fontFamily: 'OverBold',
        fontSize: 22,
        marginRight: 6,
        marginLeft: 8,
        marginVertical: 5,
        flex: 1,
        maxWidth: '95%',
    },
    partido: {
        fontFamily: 'OverMedium',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    parametros: {
        fontFamily: 'OverMedium',
    },
    estadistica: {
        marginTop: 3,
    },
    informacion: {
        fontFamily: 'OverRegular',
        fontSize: 14,
    },
    containerInfo: {
        flexDirection: 'row',
        marginLeft: 10,
        margin: 5,
    },
})

export default GridRepresent