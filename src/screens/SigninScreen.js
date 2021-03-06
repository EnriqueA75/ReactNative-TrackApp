import React, { useContext, useState } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import NavLink from '../components/NavLink';
import ErrorMessage from '../components/ErrorMessage';

const SigninScreen = () => {

    const navigation = useNavigation();
    const { state, signin, clearErrorMessage } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    if(state.errorMessage){
        setTimeout(() => {
            clearErrorMessage()
        }, 4000);
    }

    return ( 
        <SafeAreaView>
            <Spacer>
                <Text h1 style={{marginTop: '30%'}}>Signin</Text>
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
                {state.errorMessage ? <ErrorMessage errorMessage={state.errorMessage}/>  :  null}                
            <Spacer>
                <Button title="SignIn" onPress={() => signin(email, password, () => navigation.navigate('TrackTab') )}></Button>
            </Spacer>

                <NavLink
                    text="Doesn't have an account?"
                    routeName="Signup"
                />
            
        </SafeAreaView>
     );
}
SigninScreen.navigationOptions = () => {
    return {
      header: () => null,
    };
  };

 const styles = StyleSheet.create({

 })
export default SigninScreen;