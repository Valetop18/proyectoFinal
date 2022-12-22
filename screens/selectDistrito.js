import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { REGIONES } from "../data/regiones";
import { COMUNAS } from "../data/comunas";
import { filteredDiputados } from "../store/actions/diputado.action";
import { filteredSenadores } from "../store/actions/senador.action";
import { insertDistrito } from "../db";
import { COLORS } from '../constants/colors';
import { FontAwesome } from '@expo/vector-icons'; 

const SelectDistrito = () => {

    const [regionSelect, setRegionSelect] = useState();
    const [comunaSelect, setComunaSelect] = useState();
    const [distritoSelect, setDistritoSelect] = useState(null);

    const COMUNASSELECTED = COMUNAS.filter(comunas => comunas.key === regionSelect)

    const dispatch = useDispatch();
    const onChangeDistrito = () => {
        dispatch(filteredDiputados(distritoSelect)),
        dispatch(filteredSenadores(regionSelect)),
        insertDistrito(distritoSelect, regionSelect)
    }

    const handlerSelectDistrito = (comuna) => {
        setComunaSelect(comuna)
        if (comuna > 0 && comuna < 5 ) {setDistritoSelect(1);}
        else if (comuna < 11) {setDistritoSelect(2);}
        else if (comuna < 19) {setDistritoSelect(3);}
        else if (comuna < 28) {setDistritoSelect(4);}
        else if (comuna < 43) {setDistritoSelect(5);}
        else if (comuna < 69) {setDistritoSelect(6);}
        else if (comuna < 81) {setDistritoSelect(7);}
        else if (comuna < 89) {setDistritoSelect(8);}
        else if (comuna < 97) {setDistritoSelect(9);}
        else if (comuna < 103) {setDistritoSelect(10);}
        else if (comuna < 108) {setDistritoSelect(11);}
        else if (comuna < 113) {setDistritoSelect(12);}
        else if (comuna < 119) {setDistritoSelect(13);}
        else if (comuna < 133) {setDistritoSelect(14);}
        else if (comuna < 146) {setDistritoSelect(15);}
        else if (comuna < 166) {setDistritoSelect(16);}
        else if (comuna < 185) {setDistritoSelect(17);}
        else if (comuna < 196) {setDistritoSelect(18);}
        else if (comuna < 217) {setDistritoSelect(19);}
        else if (comuna < 228) {setDistritoSelect(20);}
        else if (comuna < 250) {setDistritoSelect(21);}
        else if (comuna < 266) {setDistritoSelect(22);}
        else if (comuna < 282) {setDistritoSelect(23);}
        else if (comuna < 294) {setDistritoSelect(24);}
        else if (comuna < 306) {setDistritoSelect(25);}
        else if (comuna < 324) {setDistritoSelect(26);}
        else if (comuna < 334) {setDistritoSelect(27);}
        else if (comuna < 345) {setDistritoSelect(28);}
        else { Alert.alert('Error') }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Ingresa tu región y comuna</Text>
            </View>
                <Text style={styles.label}>Selecciona tu región</Text>
                <View style={styles.input}>
                    <RNPickerSelect 
                    //placeholder={{label: 'Selecciona tu región', color: 'white'}}
                    onValueChange={(value) => setRegionSelect(value)}
                    items={REGIONES} 
                    />
                </View>
                <Text style={styles.label}>Selecciona tu comuna</Text>
                <View style={styles.input}>
                    <RNPickerSelect 
                        //placeholder={{label: 'Selecciona tu comuna', color: 'white'}}
                        onValueChange={handlerSelectDistrito}
                        items={COMUNASSELECTED} />
                </View>    
                {comunaSelect ? <Text style={styles.label}>Perteneces al distrito: {distritoSelect}</Text> : null}
                <View style={styles.circulo}></View>
                <View style={styles.containerButon}>
                    <TouchableOpacity onPress= {onChangeDistrito}>
                        <Text style={styles.buton}>Ingresar <FontAwesome name="check" size={24} color="black" /></Text>
                    </TouchableOpacity>
                
                </View>
                <View style={styles.borrar}>
                <Text >region : {regionSelect}</Text>
                <Text>comuna : {comunaSelect}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.back,
    },
    input: {
        width: '85%',
        fontFamily: 'OverRegular',
        fontSize: 20,
        marginVertical: 30,
        marginTop: 10,
        borderRadius: 4,
        borderColor: 'white',
        backgroundColor: COLORS.brillante,
        shadowColor: COLORS.black,
        elevation: 5,
    },
    containerTitle: {
        width: '80%',
        alignItems:"center",
        paddingVertical: '20%',
        alignContent: 'center',
        marginTop: '20%'
    },
    title: {
        fontSize: 25,
        fontFamily: 'OverRegular',
        justifyContent: 'center'
    },
    label: {
        fontFamily: 'OverRegular',
        fontSize: 15,
    },
    circulo: {
        width: 75,
        height: 75,
        borderRadius: 50,
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: 600,
        left: 320,
        shadowColor: COLORS.black,
        elevation: 5,
    },
    buton: {
        fontFamily: 'OverBold',
        fontSize: 30,
        /*textShadowColor: 'grey',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
        shadowOpacity: 0.1,*/
    },
    containerButon: {
        left: 225,
        top: 610,
        position: 'absolute',
    },
    borrar: {
        top: 300,
    }
})
export default SelectDistrito;