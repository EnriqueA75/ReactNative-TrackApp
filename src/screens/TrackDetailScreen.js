import React, { useContext } from 'react'
import { View,Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polygon, Polyline } from 'react-native-maps';
const TrackDetailScreen = ({ route }) => {
    const { state } = useContext(TrackContext)
    const { _id } = route.params

    const track = state.find(track => track._id === _id)
    const initialCoords = track.locations[0].coords
    return ( 
        <>
            <Text style={styles.titleStl}>{track.name}</Text>
            <MapView
                style={styles.mapStl}
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)} lineDashPattern={[3]}/>
            </MapView>
        </> 
     );
}
 const styles = StyleSheet.create({
     mapStl:{
         height: 300
     },
     titleStl: {
        alignSelf: 'center',
        padding: 20,
        fontSize: 32,
    }
 })
export default TrackDetailScreen;