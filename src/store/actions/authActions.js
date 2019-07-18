export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        // get firebase instance from return function
        const firebase = getFirebase();

        // async firebase auth function handled in authReducer.js
        firebase.auth().signInWithEmailAndPassword(
            // takes in user email and password
            credentials.email,
            credentials.password
        ).then(() => {
            // call back function after promise is returned
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            // check for error
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        // async firebase function handled in authReducer.js
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        })
    }
}

export const singUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // allows interaction of firebase to generate new user
        const firebase = getFirebase();
        const firestore = getFirestore();

        // async firebase function to store information on newUser object
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            // create a record in firestore when a user has signed up
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
            // now that a new user is created, dispatch an action
            // to be handled inside the reducer
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}