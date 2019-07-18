const initState = {
    authError: null
}

// populates the auth prop insite of rootReducer.js
const authReducer = (state = initState, action) => {
    // check for which action is dispatched
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            // if login error exists, update initState to 'login error'
            return {
                ...state,
                authError: 'Login Failed'
            }
        
        case 'LOGIN_SUCCESS':
            console.log('login success');
            // if login success, update initState to null
            return {
                ...state,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('signup successful');
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            }

        default:
            return state;
    }
}

export default authReducer