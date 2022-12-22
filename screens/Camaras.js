import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { Desk } from "../components/desk";

export const Camaras = () => {
    return(
        <View style={styles.container}>
            <Text>Camaras</Text>
            <View style={styles.cams}>
                <View style={styles.fila1}>
                    <Desk style={styles.deskPDG} />
                    <Desk style={styles.deskPDG} />
                    <Desk style={styles.deskPDG} />
                    <Desk style={styles.deskPDG} />
                    <Desk style={styles.deskPDG} />
                    <Desk style={styles.deskIND} />
                    <Desk style={styles.deskPDC} />
                    <Desk style={styles.deskPDC} />
                    <Desk style={styles.deskPDC} />
                    <Desk style={styles.deskPDC} />
                </View>
                <View style={styles.fila2}>
                    <Desk style={styles.deskEVOPLI} />
                    <Desk style={styles.deskEVOPLI} />
                    <Desk style={styles.deskEVOPLI} />
                    <Desk style={styles.deskEVOPLI} />
                    <Desk style={styles.deskPDG} />
                    <Desk style={styles.deskPEU} />
                    <Desk style={styles.deskPEU} />
                    <Desk style={styles.deskPDC} />
                    <Desk style={styles.deskPDC} />
                    <Desk style={styles.deskPDC} />
                    <Desk style={styles.deskPDC} />
                </View>
                <View style={styles.fila3}>
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskPRI} />
                    <Desk style={styles.deskCU} />
                    <Desk style={styles.deskPPD} />
                    <Desk style={styles.deskPPD} />
                    <Desk style={styles.deskPR} />
                    <Desk style={styles.deskPR} />
                    <Desk style={styles.deskPR} />
                    <Desk style={styles.deskPR} />
                </View>
                <View style={styles.fila4}>
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskPLI} />
                    <Desk style={styles.deskPPD} />
                    <Desk style={styles.deskPPD} />
                    <Desk style={styles.deskPPD} />
                    <Desk style={styles.deskPPD} />
                    <Desk style={styles.deskPPD} />
                    <Desk style={styles.deskCIUD} />
                </View>
                <View style={styles.fila5}>
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskPLI} />
                    <Desk style={styles.deskPS} />
                    <Desk style={styles.deskPS} />
                    <Desk style={styles.deskPS} />
                    <Desk style={styles.deskPL} />
                    <Desk style={styles.deskPL} />
                    <Desk style={styles.deskPL} />
                    <Desk style={styles.deskPL} />
                </View>
                <View style={styles.fila5}>
                <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskRN} />
                    <Desk style={styles.deskPLI} />
                    <Desk style={styles.deskPS} />
                    <Desk style={styles.deskPS} />
                    <Desk style={styles.deskPS} />
                    <Desk style={styles.deskPS} />
                    <Desk style={styles.deskPS} />
                    <Desk style={styles.deskPS} />
                    <Desk style={styles.deskPS} />
                </View>
                <View style={styles.cam2}>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskRN} />
                        <Desk style={styles.deskRN} />
                    </View>
                    <View style={styles.espacio1}></View>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskPS} />
                        <Desk style={styles.deskPS} />
                        <Desk style={styles.deskPS} />
                        <Desk style={styles.deskCS} />
                        <Desk style={styles.deskCS} />
                        <Desk style={styles.deskCS} />
                        <Desk style={styles.deskCS} />
                    </View>
                </View>
                <View style={styles.cam2}>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                    </View>
                    <View style={styles.espacio2}></View>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskCS} />
                        <Desk style={styles.deskCS} />
                        <Desk style={styles.deskCS} />
                        <Desk style={styles.deskCS} />
                        <Desk style={styles.deskCS} />
                        <Desk style={styles.deskCOMUNES} />
                        <Desk style={styles.deskCOMUNES} />
                    </View>
                </View>
                <View style={styles.cam2}>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                    </View>
                    <View style={styles.espacio3}></View>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskCOMUNES} />
                        <Desk style={styles.deskCOMUNES} />
                        <Desk style={styles.deskCOMUNES} />
                        <Desk style={styles.deskCOMUNES} />
                        <Desk style={styles.deskFREUS} />
                        <Desk style={styles.deskFREUS} />
                    </View>
                </View>
                <View style={styles.cam2}>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskPCC} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                        <Desk style={styles.deskUDI} />
                    </View>
                    <View style={styles.espacio4}></View>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskRD} />
                        <Desk style={styles.deskRD} />
                        <Desk style={styles.deskRD} />
                        <Desk style={styles.deskRD} />
                        <Desk style={styles.deskRD} />
                        <Desk style={styles.deskRD} />
                    </View>
                </View>
                <View style={styles.cam2}>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskPREP} />
                        <Desk style={styles.deskPREP} />
                        <Desk style={styles.deskPREP} />
                        <Desk style={styles.deskPREP} />
                        <Desk style={styles.deskPREP} />
                    </View>
                    <View style={styles.espacio5}></View>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskRD} />
                        <Desk style={styles.deskRD} />
                        <Desk style={styles.deskPC} />
                        <Desk style={styles.deskPC} />
                        <Desk style={styles.deskPC} />
                    </View>
                </View>
                <View style={styles.cam2}>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskPREP} />
                        <Desk style={styles.deskPREP} />
                        <Desk style={styles.deskPREP} />
                        <Desk style={styles.deskPREP} />
                    </View>
                    <View style={styles.espacio6}></View>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskPC} />
                        <Desk style={styles.deskPC} />
                        <Desk style={styles.deskPC} />
                        <Desk style={styles.deskPC} />
                    </View>
                </View>
                <View style={styles.cam2}>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskPREP} />
                        <Desk style={styles.deskPREP} />
                        <Desk style={styles.deskPREP} />
                    </View>
                    <View style={styles.espacio7}></View>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskPC} />
                        <Desk style={styles.deskPC} />
                        <Desk style={styles.deskPC} />
                    </View>
                </View>
                <View style={styles.cam2}>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskPREP} />
                        <Desk style={styles.deskPREP} />
                    </View>
                    <View style={styles.espacio8}></View>
                    <View style={styles.fila7}>
                        <Desk style={styles.deskPC} />
                        <Desk style={styles.deskPC} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cams: {
        margin: 8,
        marginTop: 160,
    },
    fila1: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    fila2: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    fila3: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    fila4: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    fila5: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    fila7: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cam2: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    deskPREP: {
        backgroundColor: 'navy',
    },
    deskPCC: {
        backgroundColor: 'indigo',
    },
    deskUDI: {
        backgroundColor: 'mediumblue',
    },
    deskRN: {
        backgroundColor: 'cornflowerblue',
    },
    deskEVOPLI: {
        backgroundColor: 'dodgerblue',
    },
    deskPRI: {
        backgroundColor: 'mediumturquoise',
 
    },
    deskPDG: {
        backgroundColor: 'mediumspringgreen',
    },
    deskPLI: {
        backgroundColor: 'violet',
    },
    deskCU: {
        backgroundColor: 'plum',
    },
    deskPEU: {
        backgroundColor: 'pink',
    },
    deskIND: {
        backgroundColor: 'lightpink',
    },
    deskPDC: {
        backgroundColor: 'lightsalmon',
    },
    deskPR: {
        backgroundColor: 'sandybrown',
    },
    deskPPD: {
        backgroundColor: 'salmon',
    },
    deskPL: {
        backgroundColor: 'tomato',
    },
    deskCIUD: {
        backgroundColor: 'orange',
    },
    deskPS: {
        backgroundColor: 'orangered',
    },
    deskCS: {
        backgroundColor: 'lightcoral',
    },
    deskCOMUNES: {
        backgroundColor: 'coral',
    },
    deskFREUS: {
        backgroundColor: 'red',
    },
    deskRD: {
        backgroundColor: 'indianred',
    },
    deskPC: {
        backgroundColor: 'darkred',
    },
    espacio1: {
        width: 30,
        height: 20,
    },
    espacio2: {
        width: 35,
        height: 20,
    },
    espacio3: {
        width: 80,
        height: 20,
    },
    espacio4: {
        width: 80,
        height: 20,
    },
    espacio5: {
        width: 110,
        height: 20,
    },
    espacio6: {
        width: 120,
        height: 20,
    },
    espacio7: {
        width: 150,
        height: 20,
    },
    espacio8: {
        width: 170,
        height: 20,
    },
    container: {
        margin: 5,
    }
})