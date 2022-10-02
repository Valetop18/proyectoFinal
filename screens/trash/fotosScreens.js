import React, { useEffect } from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import PlaceItem from '../components/PlaceItems'

const PlaceListScreen = ({ navigation }) => {

    const places = useSelector(state => state.places.places)

    const renderItem = (data) => (
        <PlaceItem
            id={data.item.id}
            title={data?.item.title}
            image={data?.item.image}
        />
    )


    return (
        <>
        { places?.length > 0 ? (
                <FlatList
                    data={places}
                    renderItem={renderItem}
                    keyExtractor={(item) => Date.now()}
                />
            ) : (
                <Text>No hay lugares</Text>
            ) 
        }
        </>
    )
}


export default PlaceListScreen