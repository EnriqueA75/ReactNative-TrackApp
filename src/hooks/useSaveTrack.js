import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { useNavigation } from "@react-navigation/core";

export default () => {
    const navigation = useNavigation()
    const { createTrack } = useContext(TrackContext)
    const { state, reset } = useContext(LocationContext)
    const { locations, name } = state

    const saveTrack = () => {
        createTrack(name, locations)
        reset()
        navigation.navigate('TrackList')
    }
    return [saveTrack]
}