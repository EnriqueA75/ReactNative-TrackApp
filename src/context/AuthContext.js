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
        case 'signin':
            return {
                ...state,
                token: action.payload,
                errorMessage: '',
            } 
        case 'clear_error_message':
            return {
                ...state,
                errorMessage: ''
            }
        case 'log_out':
            return{
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}

const signup = (dispatch) => async ({username, email, password}, callback) => {
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
const signin = (dispatch) => async (email, password, callback) => {
    try {
        const response = await TrackerApi.post('/signin', {email, password})
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({
            type: 'signin',
            payload: response.data.token
        }) 
        if(callback){
            callback()
        }  
    } catch (error) {
        console.log(error)
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with the signin'
        })
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({
        type: 'clear_error_message'
    })
}

const signout = dispatch => async () => {
    try {
        await AsyncStorage.removeItem('token')
        dispatch({
            type: 'log_out',
            dispatch: ''
        })
    } catch (error) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with the signout'
        })
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if(token){
        dispatch({
            type: 'signin',
            payload: token
        })
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {
        signup,
        signin,
        signout,
        clearErrorMessage,
        tryLocalSignin
    },
    {token: null, errorMessage: ''}
)