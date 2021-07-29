import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Context as TrackContext } from '../context/TrackContext';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';

const TrackListScreen = ( ) => {
    const navigation = useNavigation()
    const isFocused = useIsFocused();
    const { state, fetchTracks } = useContext(TrackContext)
    console.log(state)

    if(isFocused){
        fetchTracks()
    }

    return ( 
        <>
            <View>
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', {_id: item._id})}>
                    <ListItem>
                        <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    </TouchableOpacity>
                );
            }}
            />
            </View>
        </>
     );
}

 const styles = StyleSheet.create({

 })
export default TrackListScreen;