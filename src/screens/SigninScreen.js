import React, { useContext, useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import NavLink from '../components/NavLink';

const SigninScreen = () => {

    const navigation = useNavigation();
    const {state, signin} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return ( 
        <View style={styles.containerStl}>
            <Spacer>
                <Text h1>Signin</Text>
            </Spacer>
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
                <Button title="SignIn" onPress={() => signin({ email, password})}></Button>
            </Spacer>

            <NavLink
                text="Doesn't have an account?"
                routeName="SignUp"
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
    txtLinkStl: {
        color: '#5DADE2'
    }
 })
export default SigninScreen;