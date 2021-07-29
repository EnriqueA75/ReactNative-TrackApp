import React, { useContext } from 'react'
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {

    const { state, startRecording, stopRecording, changeName } = useContext(LocationContext) 
    const { name, recording, locations } = state

    //console.log(locations.length)
    const [ saveTrack ] = useSaveTrack()

    return ( 
        <>
        <Spacer>
            <Input
                value={name}
                onChangeText={changeName}
                placeholder="Enter Name"
            />
        </Spacer>

        {recording ? (
            <Button 
                title="Stop"
                onPress={stopRecording}
                icon={{
                    name: "stop",
                    color: '#CB4335'
                }}
            />
        ) : (
            <Button
                title="Start Recording"
                onPress={startRecording}
                icon={{
                    name: "check",
                    color: '#28B463'
                }}
            />
        )}
        <Spacer/>
        {!recording && locations.length ? 
        (
            <Button 
                title="Save Recording"
                onPress={saveTrack}
            />
        ):null}
        </>
     );
}
 
export default TrackForm;