import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Alert, TextInput} from 'react-native'
import Input from '../components/input'
import { useDispatch, useSelector } from 'react-redux'
import { signup, login } from '../store/actions/login.actions'
import { filteredDiputados } from '../store/actions/diputado.action'
import { filteredSenadores } from '../store/actions/senador.action'
import { COLORS } from '../constants/colors'
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("distritoSelect.db");

const INITIAL_STATE = {
    user:"",
    pass:""
}

const Login = () => {
    
    const dispatch = useDispatch()

    const [regionSelect, setRegionSelect] = useState();
    const [distritoSelect, setDistritoSelect] = useState(null);

    const fetchDistrito = () => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM distritoSelect;',
          [],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
                var distrito = results.rows.item(0).distrito;
                var region = results.rows.item(0).region;
                setDistritoSelect(distrito)
                setRegionSelect(region)
                console.log(regionSelect, distritoSelect)
            }
          }
        );
      });
    } catch (error) {
    console.log(error);
}
}

    const [input, setInput] = useState(INITIAL_STATE)
    const [isEmailValid, setIsEmailValid] = useState({
        touched:false,
        isValid:false
    });
    const [isPassValid, setIsPassValid] = useState({
        touched:false,
        isValid:false
    })

    const onHandleValidationEmail = () => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;
        if(!emailRegex.test(input.user.toLowerCase())) isValid = false;
        setIsEmailValid({
            touched:true,
            isValid:isValid
        });
    }
        
    const onHandleValidationPassword = () => {
        const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        let isValid = true;
        if(!passRegex.test(input.pass.toLowerCase())) isValid = false;
        setIsPassValid({
            touched:true,
            isValid:isValid
        });
    }


    const onSignUpHandler = () => {
        
        if(!isEmailValid.isValid || !isPassValid.isValid){
            Alert.alert(
                'No ha completado sus datos',
                'Por favor introduzca correo y contraseña',
                [{text:'Ok'}]
              );
              return;
        }
        
        try {
            dispatch(signup(input.user,input.pass))
        } catch (error) {
            console.log(error.message)
        }
    }

    const onLogInHandler = async () => {
        
        if(!isEmailValid.isValid || !isPassValid.isValid){
            Alert.alert(
                'No ha completado sus datos',
                'Por favor introduzca correo y contraseña',
                [{text:'Ok'}]
              );
              return;
        }
        
        try {
            fetchDistrito()
            dispatch(login(input.user,input.pass), filteredDiputados(distritoSelect), filteredSenadores(regionSelect))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>¡Hola!</Text>
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.label}>USUARIO</Text>
                    <Input 
                        id="user"
                        label="Usuario"
                        setInput={setInput}
                        input={input}
                        onSelectionChange={onHandleValidationEmail}
                        keyboardType='email-address'
                    />
                    { isEmailValid.touched && !isEmailValid.isValid && <Text style={styles.inputErrors}>Introduce un email válido</Text> }
                    
                </View>
                <View  style={styles.containerInput}>
                    <Text style={styles.label}>CONTRASEÑA</Text>
                    <Input 
                        id="pass"
                        label="Clave"
                        
                        minLength={8}
                        secureTextEntry
                        setInput={setInput}
                        input={input}
                        
                        onSelectionChange={onHandleValidationPassword}
                        
                    />
                    { isPassValid.touched && !isPassValid.isValid && <Text style={styles.inputErrors}>Mínimo 8 caracteres, mayúsculas y minúsculas</Text> }
                    
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity 
                        style={styles.buttonAuth} 
                        activeOpacity={0.8}
                        onPress={onLogInHandler}
                        >
                        <Text style={styles.buttonText}>Iniciar sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonAuth} 
                        activeOpacity={0.8}
                        onPress={onSignUpHandler}
                        >
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>           

                </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical: '30%',
        paddingHorizontal: '5%',
        backgroundColor: COLORS.back,
    },
    containerTitle:{
        alignItems:"center",
        margin:20,
        paddingVertical: 15,
    },
    title:{
        color: COLORS.black,
        fontSize:35,
        fontFamily: 'OverRegular',
    },
    containerInput:{
        margin:15,
        
    },
    label:{
        color: COLORS.black,
        fontSize:15,
        marginTop: '2%',
        fontFamily: 'OverRegular',
        paddingVertical: 7,
    },
    buttons:{
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row"
    },
    buttonAuth:{
        backgroundColor: COLORS.strong,
        width:"40%",
        justifyContent:"center",
        alignItems:"center",
        marginTop:40,
        borderRadius: 25,
        padding:10,
        
    },
    buttonText:{
        color:"#ffffff",
        fontFamily: 'OverRegular',
        fontSize: 16,
    },
    inputErrors:{
        color: COLORS.falso,
        textAlign:"center",
        fontFamily: 'OverRegular'
    }
})