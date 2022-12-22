import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { COLORS } from "../constants/colors";
import { useState, useEffect } from "react";
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from "../constants/config";

const GridRepresent = ({item, onSelected}) => {

    const [asistencia, setAsistencia] = useState();
    const [votacion, setVotacion] = useState();
    const [proyectos, setProyectos] = useState();

        useEffect(() => {
        const starCountRef = ref(db, 'diputados/asistencia/' + item.id);
        onValue(starCountRef, (snapshot) => {
                console.log(snapshot.val(item.id))
                setAsistencia(snapshot.val(item.id))
            })
        }, [item.id])

        useEffect(() => {
            const starCountRef = ref(db, 'diputados/votaciones/' + item.id);
            onValue(starCountRef, (snapshot) => {
                    console.log(snapshot.val(item.id))
                    setVotacion(snapshot.val(item.id))
                })
        }, [item.id])

        useEffect(() => {
            const starCountRef = ref(db, 'diputados/proyectos/' + item.id);
            onValue(starCountRef, (snapshot) => {
                    console.log(snapshot.val(item.id))
                    setProyectos(snapshot.val(item.id))
                })
        }, [item.id])
    

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
                            <Text style={styles.informacion}>Asistencia {asistencia}%</Text>
                            <Text style={styles.informacion}>Votación {votacion}%</Text>
                            <Text style={styles.informacion}>Presentación de Proyectos {proyectos}</Text>
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
        backgroundColor: '#eff2f9',
    },
    container: {
        marginVertical: '1.3%',
        marginTop: '1.5%',
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        width: '95%',
        backgroundColor: COLORS.cardo,
        elevation: 5,
        shadowColor: COLORS.black,
        shadowOpacity: 0.3,
        shadowOffset: {width: 3, height: 3},
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
        marginVertical: 2,
        marginTop: 5,
        flex: 1,
        maxWidth: '95%',
        color: 'black'
    },
    partido: {
        fontFamily: 'OverMedium',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        color: 'black'
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
        color: 'black',
    },
    containerInfo: {
        flexDirection: 'row',
        marginLeft: 10,
        margin: 9,
    },
})

export default GridRepresent