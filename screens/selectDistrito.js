import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { REGIONES } from "../data/regiones";
import { COMUNAS } from "../data/comunas";
import { filteredDiputados } from "../store/actions/diputado.action";
import { filteredSenadores } from "../store/actions/senador.action";
import { insertDistrito } from "../db";
import { COLORS } from '../constants/colors'

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

    const handlerSelectDistrito = (value) => {
        setComunaSelect(value)
        if (value > 0 && value < 5 ) {setDistritoSelect(1);}
        else if (value < 11) {setDistritoSelect(2);}
        else if (value < 19) {setDistritoSelect(3);}
        else if (value < 28) {setDistritoSelect(4);}
        else if (value < 43) {setDistritoSelect(5);}
        else if (value < 69) {setDistritoSelect(6);}
        else if (value < 81) {setDistritoSelect(7);}
        else if (value < 89) {setDistritoSelect(8);}
        else if (value < 97) {setDistritoSelect(9);}
        else if (value < 103) {setDistritoSelect(10);}
        else if (value < 108) {setDistritoSelect(11);}
        else if (value < 113) {setDistritoSelect(12);}
        else if (value < 119) {setDistritoSelect(13);}
        else if (value < 133) {setDistritoSelect(14);}
        else if (value < 146) {setDistritoSelect(15);}
        else if (value < 166) {setDistritoSelect(16);}
        else if (value < 185) {setDistritoSelect(17);}
        else if (value < 196) {setDistritoSelect(18);}
        else if (value < 217) {setDistritoSelect(19);}
        else if (value < 228) {setDistritoSelect(20);}
        else if (value < 250) {setDistritoSelect(21);}
        else if (value < 266) {setDistritoSelect(22);}
        else if (value < 282) {setDistritoSelect(23);}
        else if (value < 294) {setDistritoSelect(24);}
        else if (value < 306) {setDistritoSelect(25);}
        else if (value < 324) {setDistritoSelect(26);}
        else if (value < 334) {setDistritoSelect(27);}
        else if (value < 345) {setDistritoSelect(28);}
        else { Alert.alert('Error') }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Ahora ingresa tu región y comuna</Text>
            </View>
            <Text>Ingrese su region</Text>
            <RNPickerSelect 
                onValueChange={(value) => setRegionSelect(value)}
                items={REGIONES} 
            />
            <Text>Ingrese su comuna</Text>
            <RNPickerSelect 
                onValueChange={handlerSelectDistrito}
                items={COMUNASSELECTED} />
            <Text>region : {regionSelect}</Text>
            <Text>comuna : {comunaSelect}</Text>
            <Text>distrito : {distritoSelect}</Text>
            <View>
                <TouchableOpacity onPress= {onChangeDistrito}>
                    <Text>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '30%',
        alignItems: 'center',
        backgroundColor: COLORS.back,
    },
    input: {
        width: '80%'
    },
    containerTitle: {
        width: '80%',
        alignItems:"center",
        paddingVertical: '20%',
        alignContent: 'center'
    },
    title: {
        fontSize: 25,
        fontFamily: 'OverRegular',
        justifyContent: 'center'
    },
})
export default SelectDistrito;