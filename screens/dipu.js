import React from "react";
import GridRepresent from "../components/gridRepresents";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

export const Diputados = ({navigation}) => {

        const diputados = useSelector(store => store.selectDiputado.filteredDiputados)

        const handleSelected = (item) => {
            navigation.navigate('Descripcion', {
                diputado: item,
            })
        }

        const renderGridItem = ({item}) => (
            <GridRepresent item={item} onSelected={handleSelected} />
        )
    
        return (
            <FlatList
            data={diputados}
            renderItem={renderGridItem}
            numColumns={1}
            keyExtractor={item => item.id}
            />
        )
}



