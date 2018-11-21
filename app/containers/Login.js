import { connect } from "react-redux";
import Login from '../components/Login/Login';
import LoginApi from '../api/login';
import moment from 'moment'
var session = window.require('electron').remote.session;  



const mapStateToProps = state => {
    return {
        username : state.login.username,
        password : state.login.password,
        newCall : state.login.newCall,
        error : state.login.error,
        isLoggedIn : state.login.isLoggedIn
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setUsername : (value) => {
            dispatch ({
                type : "SET_USERNAME",
                payload : {
                    value
                }
            })
        },
        setPassword : (value) => {
            dispatch ({
                type : "SET_PASSWORD",
                payload : {
                    value
                }
            })
        },
        submit :  () => {
            dispatch (async (dispatch, getStates) => {
                try {
                    dispatch ({
                        type : 'LOGIN_VALIDATE'
                    })
                    const newState = getStates().login
                    if(!newState.username.showError && !newState.password.showError) {
                        let expireTime = moment().seconds(60*60*24*7).unix()
                        const res = await LoginApi (newState)
                        if (res.data.success) {
                            const cookie = {url: 'http://127.0.0.1:3001/', name: 'token', value: res.headers.authtoken, expirationDate : expireTime}
                            session.defaultSession.cookies.set(cookie, (error) => {
                                if (error){
                                    console.debug(error)
                                } else {
                                    dispatch ({
                                        type : "CHECK_ISLOGGEDIN",
                                        payload : {
                                            value : true
                                        }
                                    })
                                    dispatch ({
                                        type : "REDIRECT_TO_NEWCALL",
                                        payload : {
                                            value : true
                                        }
                                    })
                                }
                            })
                        } if(!res.data.success) {
                            dispatch ({
                                type : "SET_SERVER_ERROR",
                                payload : {
                                    value : res.data.message
                                }
                            })
                        }
                    }
                } catch (error) {
                    console.log(error)
                    dispatch ({
                        type : "SET_SERVER_ERROR",
                        payload : {
                            value : "Oops! Something went wrong"
                        }
                    })
                }
            })
        },
        authenticateUser : (value) => {
            dispatch (async (dispatch, getStates) => {
                try {
                    
                    // session.defaultSession.clearStorageData([], (data) => {
                    //     dispatch ({
                    //                 type : 'CHECK_ISLOGGEDIN',
                    //                 payload : {
                    //                     value : false
                    //                 }
                    //             })
                    // })

                    session.defaultSession.cookies.get({url: 'http://127.0.0.1:3001/', name: 'token'}, (error, cookies) => {
                        if(cookies.length > 0) {
                            if(cookies[0].value) {
                                dispatch ({
                                    type : 'CHECK_ISLOGGEDIN',
                                    payload : {
                                        value : true
                                    }
                                })
                            } 
                        }
                    })
                } catch (error) {
                    console.log(error)
                }
            })
            }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)