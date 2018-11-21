import initialStates from '../states/Login';
import loginValidate from '../validations/loginValidate'


const LoginReducer = (state = initialStates, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return {
                ...state,
                username : {
                    ...state.username,
                    value : action.payload.value
                }
            }
        case "SET_PASSWORD":
            return {
                ...state,
                password : {
                    ...state.password,
                    value : action.payload.value
                }
            }
        case "REDIRECT_TO_NEWCALL":
            return {
                ...state,
                newCall : action.payload.value
            }
        case "LOGIN_VALIDATE":
            return {
                ...state,
                ...loginValidate(state)
            }
        case "SET_SERVER_ERROR":
            return {
                ...state,
                error : action.payload.value
            }
        case "CHECK_ISLOGGEDIN":
            return {
                ...state,
                isLoggedIn : action.payload.value
            }
        default:
            return {
                ...state
            };
    }
}
export default LoginReducer