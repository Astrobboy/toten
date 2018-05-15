import { USER_DATA, PRUEBA, TOKEN_DATA } from "./../constants/";
//import { urlLogin } from './../api/';
//import axios from 'axios';


//esto es una accion creator

export const addUserData = payload => ({ type: USER_DATA, payload });
export const addTokenData = payload => ({ type: TOKEN_DATA, payload });
export const addPrueba = payload => ({ type: PRUEBA, payload });



/*
export const getDataLog = payload => {

    return dispatch => {

        axios({
            method: 'post',
            url: `${urlLogin}`,
            headers: {
                username: payload.username,
                password: payload.password
            }
        })
            .then(function (res) {
                console.log(res);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
};*/