import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ errorMessage }) => {
    return (  
        <View style={styles.errorBgStl}>
            <Text style={styles.errorMessStl}>{errorMessage}</Text>
        </View> );
}
 
const styles = StyleSheet.create({
    errorMessStl: {
        fontSize: 17,
        color: '#FFF',
        fontWeight: 'bold'
    },
    errorBgStl: {
        backgroundColor: '#E74C3C',
        marginHorizontal: '8%',
        padding: 4,
        borderLeftColor: '#922B21',
        borderLeftWidth: 5
    },
 })
export default ErrorMessage;