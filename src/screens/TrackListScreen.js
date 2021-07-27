import React, { useContext } from 'react'
import { View,Text, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const TrackListScreen = ( ) => {

    const { signout } = useContext(AuthContext)

    return ( 
        <View>
            <Text>TrackListScreen SCR</Text>
        </View>
     );
}
 const styles = StyleSheet.create({

 })
export default TrackListScreen;