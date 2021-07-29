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
import TrackDetailScreen from './src/screens/TrackDetailScreen'

import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
 
function TrackTab(){
  return(
    <Tab.Navigator 
      initialRouteName="TrackList"
      activeColor="#fff"
    >

      <Tab.Screen 
        name="TrackList"
        component={TrackListScreen}
        options={{
          title: "Track List",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="check" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{
          title: "Create Track",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
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
              options={{title: "Tracks"}}
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
            <Stack.Screen
              name="TrackDetail"
              component={TrackDetailScreen}
            />
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
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <RootNavigation />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
}