import React, { useState, useContext } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import NavLink from '../components/NavLink';

const SignupScreen = ( ) => {

    const navigation = useNavigation();
    
    const {state, signup} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    return ( 
        <View style={styles.containerStl}>
            <Spacer>
                <Text h1>SignUp</Text>
            </Spacer>
            <Input 
                    label="Username" 
                    value={username} 
                    onChangeText={(newUsername) => setUsername(newUsername)}
                    autoCorrect={false}
                />
            <Spacer/>
                <Input 
                    label="Email" 
                    value={email} 
                    onChangeText={(newEmail) => setEmail(newEmail)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            <Spacer/>
                <Input 
                    label="Password" 
                    value={password} 
                    onChangeText={(newPassword) => setPassword(newPassword)}
                    autoCorrect={false}
                    secureTextEntry
                    autoCapitalize="none"
                />
                {state.errorMessage ? <View style={styles.errorBgStl}><Text style={styles.errorMessStl}>{state.errorMessage}</Text></View>  :  null}                
            <Spacer>
                <Button title="SignUp" onPress={() => signup({username, email, password})}></Button>
            </Spacer>

            <NavLink
                routeName="Signin"
                text="Already have an account?"
            />
            <NavLink
                routeName="TrackTab"
                text="tracktab"
            />

        </View>
     );
}

 const styles = StyleSheet.create({
    containerStl: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
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
export default SignupScreen;