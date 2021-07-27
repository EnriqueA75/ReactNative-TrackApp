import 'react-native-gesture-handler';
 
import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackListScreen from './src/screens/TrackListScreen'
 
import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
 
function TrackTab(){
  return(
    <Tab.Navigator initialRouteName="TrackList">

      <Tab.Screen 
        name="TrackList"
        component={TrackListScreen}
      />
      <Tab.Screen 
        name="TrackCreate"
        component={TrackCreateScreen}
      />
      <Tab.Screen 
          name="Account"
          component={AccountScreen}
      />

  </Tab.Navigator>
  )
}

const RootNavigation = () => {
  const { state } = useContext(AuthContext); 
 
  return (
    <NavigationContainer theme={MyTheme}>

        <Stack.Navigator initialRouteName='Signup'
          screenOptions={{
            headerStyle: {
              backgroundColor: '#E9F7EF'
            },
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerTitleAlign: 'center'
          }}
        >
          {state.token ? (
              <Stack.Screen
              name="TrackTab"
              component={TrackTab}
            />
          ):(
            <>
              <Stack.Screen
                name="Signin"
                component={SigninScreen}
              />
              <Stack.Screen
                name="Signup"
                component={SignupScreen}
              />
          </>
          )}

        </Stack.Navigator>

    </NavigationContainer>
  )
}
 
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff'
  }
};
 
export default function App() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  )
}