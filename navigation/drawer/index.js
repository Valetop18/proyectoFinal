import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Presentacion } from "../../screens/presentacion";
import { Platform } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from "@expo/vector-icons/Ionicons"; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NaveDiputados from "../NaveDiputados";
import NaveSenadores from "../NaveSenadores";
import { Camaras } from "../../screens/Camaras";
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/login.actions';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import CamaraScreen from '../../screens/trash/camaraScreen';

const BottomsTabs = createBottomTabNavigator()
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      </DrawerContentScrollView>
    );
  }

/*const LogOutButton = ({navigation}) => {

    const dispatch = useDispatch();
    const navigation = useNavigation(); 

    function navigate() {
        if (navigationRef.isReady()) {
          navigationRef.navigate();
        }
      }

    const navigateHome = () => {navigation.navigate()}

    const onLogOutHandler = () => {
        dispatch(logout()),
        () => navigation.dispatch(StackActions.popToTop());
    }

    return (
        <DrawerContentScrollView >
        <DrawerItemList  />
        <DrawerItem label="Cerrar sesión" onPress={onLogOutHandler} />
      </DrawerContentScrollView>
    );
}*/

const MyDrawer = () => {
    return (
        <Drawer.Navigator useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name='Home'>
              {() => (
              <BottomsTabs.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? 'white' : 'grey',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : 'grey',
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
            }} >
            <BottomsTabs.Screen 
                name='DiputadosTab'
                component={NaveDiputados}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.item}>
                            <Ionicons name="people-circle" size={30} color={focused ? 'green' : 'grey'} />
                            <Text>Diputados</Text>
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
                            <Ionicons name="people-circle-outline" size={30} color={focused ? 'blue' : 'grey'} />
                            <Text>Senadores</Text>
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
                            <MaterialCommunityIcons name="chart-donut-variant" size={30} color={focused ? 'red' : 'grey'} />
                            <Text>Camaras</Text>
                        </View>
                    )
                }}
            />
            <BottomsTabs.Screen
                name='Camara'
                component={CamaraScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.item}>
                            <MaterialCommunityIcons name="chart-donut-variant" size={30} color={focused ? 'red' : 'grey'} />
                            <Text>Camara</Text>
                        </View>
                    )
                }}
            />
        </BottomsTabs.Navigator>
        )}
            </Drawer.Screen>
            <Drawer.Screen name='Presentación' component={Presentacion} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
  tabBar: {
      right: 20,
      borderRadius: 15,
      height: '8%',
      justifyContent: 'center',
  },
  item: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
})

export default MyDrawer