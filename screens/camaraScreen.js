import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux';
import ImageSelector from '../components/fotos';

const CamaraScreen = ({ navigation }) => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const handleTitleChange = text => setTitle(text)


    return (
        <ScrollView style={{ flex: 1}} scrollEnabled>
                <Text style={styles.label}>Titulo</Text>
                <TextInput 
                    style={styles.input}
                    value={title}
                    onChangeText={handleTitleChange}    
                />
                <ImageSelector onImage={image => setImage(image)} />
                <Button title='Grabar foto' />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    },
})

export default CamaraScreen