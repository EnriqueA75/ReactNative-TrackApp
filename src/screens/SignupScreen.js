import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import NavLink from '../components/NavLink';
import ErrorMessage from '../components/ErrorMessage';

const SignupScreen = ( ) => {

    const navigation = useNavigation();
    
    const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const clearMessageHandler = () => {
        navigation.navigate(routeName);
        clearErrorMessage()
    }

    if(state.errorMessage){
        setTimeout(() => {
            clearErrorMessage()
        }, 4000);
    }

    useEffect(() => {
        tryLocalSignin()
    }, [])

    return ( 
            <SafeAreaView>
                    <Spacer>
                        <Text h1 style={{marginTop: '15%'}}>SignUp</Text>
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
                        {state.errorMessage ? <ErrorMessage errorMessage={state.errorMessage}/> :  null}       

                        <Spacer>
                            <Button title="SignUp" onPress={() => signup({username, email, password})}></Button>
                        </Spacer>
                    <TouchableOpacity onPress={() => {clearMessageHandler()}}>
                        <NavLink
                            routeName="Signin"
                            text="Already have an account?"
                        />
                        <NavLink
                            routeName="TrackTab"
                            text="tracktab"
                        />
                    </TouchableOpacity>
            </SafeAreaView>
     );
}

 const styles = StyleSheet.create({

 })
export default SignupScreen;