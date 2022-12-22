import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { COLORS } from "../constants/colors";
import { useState, useEffect } from "react";
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from "../constants/config";

export const DescripcionDiputado = ({ route }) => {

    const [asistencia, setAsistencia] = useState();
    const [votacion, setVotacion] = useState();
    const [proyectos, setProyectos] = useState();

        useEffect(() => {
        const starCountRef = ref(db, 'diputados/asistencia/' + item);
        onValue(starCountRef, (snapshot) => {
                console.log(snapshot.val(item))
                setAsistencia(snapshot.val(item))
            })
        }, [item])

        useEffect(() => {
            const starCountRef = ref(db, 'diputados/votaciones/' + item);
            onValue(starCountRef, (snapshot) => {
                    console.log(snapshot.val(route.params.id))
                    setVotacion(snapshot.val(item))
                })
        }, [item])

        useEffect(() => {
            const starCountRef = ref(db, 'diputados/proyectos/' + item);
            onValue(starCountRef, (snapshot) => {
                    console.log(snapshot.val(route.params.id))
                    setProyectos(snapshot.val(item))
                })
        }, [item])
    

    const {diputado} = route.params;
    const item = diputado.id;

    return (
        <><View style={styles.back}></View>
        <View style={styles.principal}>
            <View style={styles.container1}>
                <Image style={styles.image} source={diputado.foto} />
                <View style={styles.container2}>
                    <Text style={styles.title}>{diputado.nombre}</Text>
                    <Text style={styles.partido}>{diputado.partido}</Text>
                    <View style={styles.containerInfo}>
                            <View style={styles.estadistica}>
                                <FontAwesome name="check-circle-o" size={22} color="green" />
                                <Entypo name="circle-with-cross" size={22} color="red" />
                                <FontAwesome name="check-circle-o" size={22} color="black" />
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.informacion}>Asistencia {asistencia}</Text>
                                <Text style={styles.informacion}>Votación {votacion}</Text>
                                <Text style={styles.informacion}>Presentación de Proyectos {proyectos}</Text>
                            </View>
                        </View>
                </View>
            </View>
            <Text style={styles.descripcion}>{diputado.descripcion}</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    back: {
        backgroundColor: COLORS.claro,
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    principal: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2%',
        marginLeft: '1.5%',
        width: '97%',
    }, 
    container1: {
        flexDirection: 'row',
        width: '100%',
    },
    image: {
        width: 200,
        height: 280,
    },
    title: {
        fontSize: 35, 
        fontFamily: 'OverExtraBold',
        marginRight: 10,
        marginHorizontal: '2%',
        maxWidth: '98%',
    },
    descripcion: {
        fontFamily: 'OverRegular',
        margin: '1%',
        marginTop: '2%',
        fontSize: 16,
        textAlign: 'justify'
    },
    containerInfo: {
        flexDirection: 'row',
        marginTop: 10,
        margin: 3,
    },
    estadistica: {
        marginTop: 3,
        marginVertical: 4,
    },
    info: {
        marginLeft: 8,
    },
    informacion: {
        fontFamily: 'OverRegular',
        fontSize: 15,
        color: 'black',
        maxWidth: '98%'
    },
    container2: {
        maxWidth: '98%',
        flex:1,
        marginHorizontal: '2%',
    },
    partido: {
        fontFamily: 'OverBold',
        fontSize: 16,
        margin: 4,
        marginHorizontal: 5,
    }
})
