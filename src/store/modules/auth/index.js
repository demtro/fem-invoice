
import { FIREBASE_SU ,FIREBASE_SI } from '@/config/firebase.js'
import axios from "axios";


let timer;


const state = {
    userID: null,
    token: null
}


const mutations ={
    setUser(state,payload){
        state.userID = payload.userID
        state.token = payload.token
    }
}


const actions = {

    auth(context, payload){
            let url =''

            if(payload.mode==='signin'){
                url = FIREBASE_SI}
            else if(payload.mode==='signup'){
                    url = FIREBASE_SU
                }
            else{
                return
            }

            const authDO={
                email:payload.email,
                password: payload.password,
                returnSecureToken: true
            }

            return axios
            .post(url,authDO)
            .then(
                (response)=>{
                    const expiresIn = Number(response.data.expiresIn) * 1000
                    // const expiresIn = 6 * 1000
                    const expireDate = new Date().getTime() + expiresIn

                    localStorage.setItem('token',response.data.idToken)
                    localStorage.setItem('userID',response.data.localId)
                    localStorage.setItem('expiresIN',expireDate)

                    timer=setTimeout(() => {
                        context.dispatch('autoSignOut')
                    }, expiresIn);

                    context.commit('setUser',{
                        userID: response.data.localId,
                        token: response.data.idToken
                    })
                }
            )
            .catch(
                (error)=> {
                const errorMessage = new Error (
                    error.response.data.error.message || 'UNKNOW_ERROR'
                )
                throw errorMessage;
                }
            )
        },

        
    signup(context, payload){
        
        const signUpDO={
            ...payload,
            mode:'signup'
        }
        return context.dispatch('auth', signUpDO)
    },
        
        
    signin(context, payload){
        
        const signInDO={
            ...payload,
            mode:'signin'
        }
        return context.dispatch('auth', signInDO)
    },


    // wenn expireIN noch kleiner als 1 Std, kann man sich wieder einloggen ohne Anmeldung
    autoSignIn(context){

        const token = localStorage.getItem('token')
        const userID = localStorage.getItem('userID')
        const expiresIN = localStorage.getItem('expiresIN')

        const timeLeft = Number(expiresIN) - new Date().getTime()

        if (timeLeft < 0){
            return
        }


        timer = setTimeout(() => {
            context.dispatch('autoSignOut')
        }, expiresIN);


        if(token && userID){
            context.commit('setUser',{
                token:token,
                userID: userID
            })
        }
    },

    signOut(contex){
        localStorage.removeItem('token')
        localStorage.removeItem('userID')
        localStorage.removeItem('expiresIN')

        clearTimeout(timer)

        contex.commit('setUser',{
            userID:null,
            token: null
        })
    },

    autoSignOut(context){
        context.dispatch('signOut')
    }
}

const getters= {

    // prüft ob im state der token gesezt (der user ist angemeldet) ist, gibt ein boolean zurück
    isAuthenticated: (state) => !!state.token,

}

const authModule = {
    state,
    mutations,
    actions,
    getters
}


export default authModule