import React from "react";
import GridRepresent from "../components/gridRepresents";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";

export const Senadores = ({navigation}) => {

    const senadores = useSelector(store => store.selectSenador.filteredSenadores)

    const handleSelected = (item) => {
        navigation.navigate('Descripcion', {
            senador: item,
        })
    }

        const renderGridItem = ({item}) => (
            <GridRepresent item={item} onSelected={handleSelected}/>
        )
    
        return (
            <FlatList
            data={senadores}
            renderItem={renderGridItem}
            numColumns={1}
            keyExtractor={item => item.id}
            />
        )
}