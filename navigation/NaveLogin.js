import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/login";
import SelectDistrito from "../screens/selectDistrito";
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator()

const NaveLogin = () => {

    const userID = useSelector(state => state.auth.token);

    return (
        <Stack.Navigator initialRouteName='Ingreso' screenOptions={{
            headerShown: false,
        }}>
            {userID == null ? (
            <Stack.Screen name='Login' component={Login} options={{title: 'Login'}} />
            ) : (
            <Stack.Screen name='SelectDistrito' component={SelectDistrito} options={{title: 'Selección Distrito'}} />
            )}
        </Stack.Navigator>
    )
}

export default NaveLogin;