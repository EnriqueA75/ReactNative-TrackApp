import React, { useContext } from 'react'
import { View,Text, StyleSheet, TouchableOpacity, SafeAreaView  } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext)

    return ( 
        <SafeAreaView>
            <Text style={styles.titleStl}>Account</Text>
                        
            <TouchableOpacity style={styles.btnStl} onPress={() => signout()}>
                <Text style={styles.btnTxtStl}>Signout</Text>
            </TouchableOpacity>

        </SafeAreaView>
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
    },
    titleStl: {
        alignSelf: 'center',
        padding: 20,
        fontSize: 32,
    }  
 })
export default AccountScreen;