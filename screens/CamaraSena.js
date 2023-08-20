import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DeskSena } from "../components/deskSena";
import { COLORS } from "../constants/colors";

export const CamaraSena = () => {
    return(
        <View style={styles.container}>
            <View style={styles.cams}>
                <View style={styles.fila2}>
                    <DeskSena style={styles.deskEVOPLI} />
                    <DeskSena style={styles.deskEVOPLI} />
                    <DeskSena style={styles.deskEVOPLI} />
                    <DeskSena style={styles.deskIND} />
                    <DeskSena style={styles.deskPDC} />
                    <DeskSena style={styles.deskPDC} />
                    <DeskSena style={styles.deskPDC} />
                </View>
                <View style={styles.fila3}>
                    <DeskSena style={styles.deskRN} />
                    <DeskSena style={styles.deskRN} />
                    <DeskSena style={styles.deskRN} />
                    <DeskSena style={styles.deskRN} />
                    <DeskSena style={styles.deskIND} />
                    <DeskSena style={styles.deskPDC} />
                    <DeskSena style={styles.deskPDC} />
                    <DeskSena style={styles.deskPPD} />
                </View>
                <View style={styles.fila5}>
                    <DeskSena style={styles.deskRN} />
                    <DeskSena style={styles.deskRN} />
                    <DeskSena style={styles.deskRN} />
                    <DeskSena style={styles.deskRN} />
                    <DeskSena style={styles.deskRN} />
                    <DeskSena style={styles.deskPPD} />
                    <DeskSena style={styles.deskPPD} />
                    <DeskSena style={styles.deskPPD} />
                    <DeskSena style={styles.deskPPD} />
                </View>
                <View style={styles.cam2}>
                    <View style={styles.fila7}>
                        <DeskSena style={styles.deskUDI} />
                        <DeskSena style={styles.deskRN} />
                        <DeskSena style={styles.deskRN} />
                        <DeskSena style={styles.deskRN} />
                    </View>
                    <View style={styles.espacio2}></View>
                    <View style={styles.fila7}>
                        <DeskSena style={styles.deskPPD} />
                        <DeskSena style={styles.deskPS} />
                        <DeskSena style={styles.deskPS} />
                        <DeskSena style={styles.deskPS} />
                    </View>
                </View>
                <View style={styles.cam2}>
                    <View style={styles.fila7}>
                        <DeskSena style={styles.deskUDI} />
                        <DeskSena style={styles.deskUDI} />
                        <DeskSena style={styles.deskUDI} />
                        <DeskSena style={styles.deskUDI} />
                    </View>
                    <View style={styles.espacio3}></View>
                    <View style={styles.fila7}>
                        <DeskSena style={styles.deskPS} />
                        <DeskSena style={styles.deskPS} />
                        <DeskSena style={styles.deskPS} />
                        <DeskSena style={styles.deskPS} />
                    </View>
                </View>
                <View style={styles.cam2}>
                    <View style={styles.fila7}>
                        <DeskSena style={styles.deskUDI} />
                        <DeskSena style={styles.deskUDI} />
                        <DeskSena style={styles.deskUDI} />
                    </View>
                    <View style={styles.espacio4}></View>
                    <View style={styles.fila7}>
                        <DeskSena style={styles.deskFREUS} />
                        <DeskSena style={styles.deskFREUS} />
                        <DeskSena style={styles.deskRD} />
                    </View>
                </View>
                <View style={styles.cam2}>
                    <View style={styles.fila7}>
                        <DeskSena style={styles.deskPREP} />
                        <DeskSena style={styles.deskUDI} />
                    </View>
                    <View style={styles.espacio5}></View>
                    <View style={styles.fila7}>
                        <DeskSena style={styles.deskPC} />
                        <DeskSena style={styles.deskPC} />
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
    fila2: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    fila3: {
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
    espacio2: {
        width: 50,
        height: 20,
    },
    espacio3: {
        width: 70,
        height: 20,
    },
    espacio4: {
        width: 120,
        height: 20,
    },
    espacio5: {
        width: 150,
        height: 20,
    },
    container: {
        margin: 5,
    }
})