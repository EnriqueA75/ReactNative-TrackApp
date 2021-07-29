import '../_mockLocation'
import React, { useContext, useCallback } from 'react'
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map'
import ErrorMessage from '../components/ErrorMessage';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation'
import { useIsFocused } from '@react-navigation/native';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ( ) => {

    const isFocused = useIsFocused();
    const { state, addLocation } = useContext(LocationContext)
    const { recording } = state

    const callback = useCallback((location) => {
        addLocation(location, recording)
    },[recording])

    const [err] = useLocation(isFocused || recording, callback)

    return ( 
        <View>
            <Text style={styles.titleStl}>TrackCreateScreen SCR</Text>
            <Map/>
            {err ? <ErrorMessage errorMessage={'Please set on the location'}/> : null}
            <TrackForm/>
        </View>
     );
}
 const styles = StyleSheet.create({
    titleStl: {
        alignSelf: 'center',
        padding: 20,
        fontSize: 32,
    }
 })
export default (TrackCreateScreen);