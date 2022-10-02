import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import NaveLogin from './NaveLogin';
import { useSelector } from 'react-redux';
import MyDrawer from './drawer';

    export const navigationRef = createNavigationContainerRef()

    const MainNavigation = () => {

    
    const filteredDiputados = useSelector(state => state.selectDiputado.filteredDiputados);
    
    return (
        <NavigationContainer ref={navigationRef}>
            {filteredDiputados != 0 ?  
            <MyDrawer /> 
            :
            <NaveLogin />
            }
        </NavigationContainer>
    )
}

export default MainNavigation