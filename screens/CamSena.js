import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DeskSena } from "../components/deskSena";
import { COLORS } from "../constants/colors";

export const CamSena = () => {
    return(
        <View style={styles.container}>
            <View style={styles.cams}>
                    <DeskSena style={{...styles.deskPREP, marginTop: 5, position: 'absolute'}} ></DeskSena>
                    <DeskSena style={{...styles.deskEVOPLI, position: 'absolute', marginTop: 45}} />
                    <DeskSena style={{...styles.deskEVOPLI, position: 'absolute', marginTop: 85}} />
                    <DeskSena style={{...styles.deskEVOPLI, position: 'absolute', marginTop: 125}} />

                    <DeskSena style={{...styles.deskUDI, marginTop: 15, marginLeft: 50, position: 'absolute'}} />
                    <DeskSena style={{...styles.deskUDI, marginTop: 55, marginLeft: 50, position: 'absolute'}} />
                    <DeskSena style={{...styles.deskUDI, marginTop: 95, marginLeft: 50, position: 'absolute'}} />
                    <DeskSena style={{...styles.deskUDI, marginTop: 140, marginLeft: 55, position: 'absolute'}} />

                    <DeskSena style={{...styles.deskUDI, marginTop: 35, marginLeft: 90, position: 'absolute'}} />
                    <DeskSena style={{...styles.deskUDI, marginTop: 77.5, marginLeft: 90, position: 'absolute'}} />
                    <DeskSena style={{...styles.deskUDI, marginTop: 120, marginLeft: 90, position: 'absolute'}} />
                    <DeskSena style={{...styles.deskUDI, marginTop: 170, marginLeft: 95, position: 'absolute'}} />
                    
                    <DeskSena style={{...styles.deskUDI, marginTop: 55, marginLeft: 125, position: 'absolute'}} />
                    <DeskSena style={{...styles.deskRN, marginTop: 102.5, marginLeft: 125, position: 'absolute'}} />
                    <DeskSena style={{...styles.deskRN, marginTop: 150, marginLeft: 125, position: 'absolute'}} />
                    <DeskSena style={{...styles.deskRN, marginTop: 210, marginLeft: 120, position: 'absolute'}} />

                    <DeskSena style={{...styles.deskRN, marginTop: 80, marginLeft: 160, position: 'absolute'}} />
                    <DeskSena style={{...styles.deskRN, marginTop: 130, marginLeft: 160, position: 'absolute'}} />
                    <DeskSena style={{...styles.deskRN, marginTop: 190, marginLeft: 150, position: 'absolute'}} />
                    
                    
                    <DeskSena style={{...styles.deskRN, marginTop: 110, marginLeft: 190, position: 'absolute'}} />
                    <DeskSena style={{...styles.deskRN, marginTop: 170, marginLeft: 180, position: 'absolute'}} />
                    
                    <DeskSena style={{...styles.deskRN, marginTop: 150, marginLeft: 210, position: 'absolute'}} />
                    
                    <DeskSena style={{...styles.deskRN, marginTop: 190, marginLeft: 225, position: 'absolute'}} />
                    <DeskSena style={{...styles.deskRN, position: 'absolute', marginTop: 235, marginLeft: 230}} />
                    
                    <DeskSena style={{...styles.deskRN, marginTop: 210, marginLeft: 195, position: 'absolute'}} />
                    
                    
                 </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cams: {
        margin: 8,
        marginTop: 50,
        marginLeft: 20,
    },
    fila2: {
        flexDirection: 'row',
    },
    fila3: {
        flexDirection: 'row',
    },
    fila5: {
        flexDirection: 'row',
    },
    fila7: {
        flexDirection: 'row',
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