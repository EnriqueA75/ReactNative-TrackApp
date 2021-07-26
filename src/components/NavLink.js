import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Spacer from './Spacer';

const NavLink = ({text, routeName}) => {
    const navigation = useNavigation();
    return (     
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
            <Text style={styles.txtLinkStl}>{text}</Text>
        </Spacer>
    </TouchableOpacity>
     );
}
 const styles = StyleSheet.create({
    txtLinkStl: {
        color: '#5DADE2'
    }
 })
export default NavLink;