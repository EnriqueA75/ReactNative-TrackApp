import React, { useContext } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {

    const { state } = useContext(LocationContext)
    const { currentLocation, locations } = state

    //console.log(locations)

    if(!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop: 200}}/>
    }
    
    initialLocation = {
        longitude: -122.0312186,
        latitude: 37.33233141,
    };
    return ( 
        <MapView 
        style={styles.mapStl}
        initialRegion={{
          ...initialLocation,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        ><Circle 
            center={currentLocation.coords}
            radius={50}
            strokeColor="#4A235A"
            fillColor="rgba(158, 158, 255, 0.3)"
        />
        <Polyline coordinates={locations.map((loc) => loc.coords)} lineDashPattern={[3]}/>        
            </MapView>
     );
}

 const styles = StyleSheet.create({
    mapStl: {
        height: 300,
    }
 })
export default Map;
