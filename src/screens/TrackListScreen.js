import React from 'react'
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return ( 
        <View>
            <Text>TrackListScreen SCR</Text>
                        
            <TouchableOpacity style={styles.btnStl} onPress={() => navigation.navigate('TrackDetail')}>
                <Text style={styles.btnTxtStl}>Go to Track Detail</Text>
            </TouchableOpacity>

        </View>
     );
}
 const styles = StyleSheet.create({
    btnStl: {
        backgroundColor: '#328080',
        marginHorizontal: '10%',
        marginVertical: 15,
        borderRadius: 5,
        padding: 5
    },
    btnTxtStl: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    }  
 })
export default TrackListScreen;