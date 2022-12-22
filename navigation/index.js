import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

import Login from "../screens/login";
import MyDrawer from './drawer';

    const MainNavigation = () => {

    const userID = useSelector(state => state.auth.token);
    
    return (
        <NavigationContainer>
            {userID === null ? (
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                }
                }>
                        <Stack.Screen name='Login' component={Login} options={{title: 'Login'}} />
                </Stack.Navigator>) 
                : 
                (
                    <MyDrawer />
                )
            }
        </NavigationContainer>
    )
}

export default MainNavigation