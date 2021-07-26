import React from 'react'
import createDataContext from './createDataContext'
import TrackerApi from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
            return {
                ...state,
                errorMessage: action.payload
            }
        case 'signup':
            return {
                ...state,
                token: action.payload,
                errorMessage: '',
            } 
        default:
            return state
    }
}

const signup = (dispatch) => {
    return async ({username, email, password}, callback) => {
        try {
            const response = await TrackerApi.post('/signup', {username, email, password})
            await AsyncStorage.setItem('token', response.data.token)   
            dispatch({
                type: 'signup',
                payload: response.data.token,
            })         
            if(callback){
                callback()
            }
        } catch (err) {
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with the sign up'
            })
        }
    }
}
const signin = (dispatch) => {
    return ({email, password}) => {
        
    }
}
const signout = () => {
    return () => {
        
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {
        signup,
        signin,
        signout
    },
    {token: null, errorMessage: ''}
)