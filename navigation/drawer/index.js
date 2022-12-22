import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View, Text, Platform, Pressable} from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from "@expo/vector-icons/Ionicons"; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector} from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../../constants/colors';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import SelectDistrito from "../../screens/selectDistrito";
import { Camaras } from "../../screens/Camaras";
import { Presentacion } from "../../screens/presentacion";

import NaveDiputados from "../NaveDiputados";
import NaveSenadores from "../NaveSenadores";

import { logout } from '../../store/actions/login.actions';
import { changeDistrit } from '../../store/actions/diputado.action';

const BottomsTabs = createBottomTabNavigator()
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator(); 

function CustomDrawerContent(props) {

const dispatch = useDispatch();

const submit = () => {
    dispatch(logout())
    dispatch( changeDistrit())
    console.log('logout')
  }

const cambioDistrito = () => {
    dispatch(changeDistrit())
  }

    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem 
            icon={({ focused, color, size }) => <FontAwesome name="exchange" size={22} color={COLORS.grey} /> }
            label='Cambia de distrito'
            onPress={cambioDistrito} />
        <DrawerItem 
            icon={({ focused, color, size }) => <AntDesign name="logout" size={22} color={COLORS.azuloscuro} /> }
            label='Cerrar Sesión'
            onPress={submit} />
      </DrawerContentScrollView>
    );
  }

  /*const distrito = useSelector(state => state.selectDiputado.distrito);

  function Title() {
    return (
      <Text style={{ width: 50, height: 50 }}>
        {distrito}
      </Text>
        
    );
  }*/

const MyDrawer = () => {

    const filteredDiputados = useSelector(state => state.selectDiputado.filteredDiputados);

    return (
        <>
            {filteredDiputados != 0 ? (
            <Drawer.Navigator 
                useLegacyImplementation
                screenOptions={({navigation})=>({
                    headerTintColor: 'white',
                    headerTitleStyle:{fontFamily: 'OverBold', fontSize: 25},
                    drawerPosition: 'right',
                    headerRight: () => {
                        return (
                        <>
                            <Pressable onPress={() => navigation.openDrawer()}>
                            <Ionicons
                                name="ios-settings-outline"
                                size={26}
                                color={"white"}
                                style={{ marginRight: 10 }}
                            />
                            </Pressable>
                        </>
                        );
                    },
                    headerLeftContainerStyle: {width: 20},
                    headerRightContainerStyle: {marginRight: 20, marginTop: 5},
                    headerLeft: false,
                    headerStyle:{backgroundColor: COLORS.grisfondo},
                    drawerStyle: {
                        backgroundColor: COLORS.back,
                        width: 240,
                        height: 400,
                        marginTop: 30,
                        borderRadius: 10,
                    }
                })}
                drawerContent={(props) => <CustomDrawerContent {...props} />}  
            >
                <Drawer.Screen name='Principal' options={{
                    headerTitle: 'Distrito',//props => <Title {...props} /> ,
                    drawerIcon: ({focused, size}) => (
                        <MaterialCommunityIcons 
                            name="chart-donut-variant"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                            style={styles.icon}
                        />
                    ),
                    }}>
                {() => (
                <BottomsTabs.Navigator 
                screenOptions={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? COLORS.strong : 'grey',
                    },
                    headerTintColor: Platform.OS === 'android' ? COLORS.strong : 'grey',
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar
                }} >
                <BottomsTabs.Screen 
                    name='DiputadosTab'
                    component={NaveDiputados}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.item}>
                                <Ionicons name="people-circle" size={35} color={focused ? COLORS.marca : COLORS.grey} />
                                <Text style={styles.label}>Diputados</Text>
                            </View>
                        )
                    }}
                />
                <BottomsTabs.Screen
                    name='SenadoresTab'
                    component={NaveSenadores}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.item}>
                                <Ionicons name="people-circle-outline" size={35} color={focused ? COLORS.marca : COLORS.grey} />
                                <Text style={styles.label}>Senadores</Text>
                            </View>
                        )
                    }}
                />
                <BottomsTabs.Screen
                    name='CamaraTab'
                    component={Camaras}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.item}>
                                <MaterialCommunityIcons name="chart-donut-variant" size={35} color={focused ? COLORS.marca : COLORS.grey} />
                                <Text style={styles.label}>Camaras</Text>
                            </View>
                        )
                    }}
                />
            </BottomsTabs.Navigator>
            )}
                </Drawer.Screen>
                <Drawer.Screen name='Presentación' component={Presentacion} options={{
                    title: 'Presentación',
                    drawerIcon: ({focused, size}) => (
                        <FontAwesome 
                            name="eye" 
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                    }}/>
            </Drawer.Navigator>    
            ) : (
                <Stack.Navigator 
                    name='SelectDistrito'
                    screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen name='SelectDistrito' component={SelectDistrito} options={{headerBackVisible: false}} />
                </Stack.Navigator>
            )}
        </>
    )
    
}

const styles = StyleSheet.create({
  tabBar: {
      height: '9%',
      justifyContent: 'center',
      backgroundColor: COLORS.azuloscuro
  },
  item: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  label: {
    fontFamily: 'OverRegular',
    color: 'white',
  },
  icon: {
    elevation: 5,
    shadowColor: 'white',
    shadowOpacity: 0.3,
    shadowOffset: {width: 3, height: 3},
    shadowRadius: 10,
  }
})

export default MyDrawer