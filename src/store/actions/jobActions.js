export const createJob = (job) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // allows for async call to DB
        const firestore = getFirestore();

        // logged in user's info
        const profile = getState().firebase.profile;

        // uid of the logged in user
        const authorId = getState().firebase.auth.uid;

        firestore.collection('jobs').add({
            ...job,
            // There is access to author name and ID on
            // the uid property. I need to use this information to
            // store who is creating a report based on who is signed 
            // in at the moment. 
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_JOB',
                job
            });
        }).catch((err) => {
            dispatch({ type: 'CREATE_JOB_ERROR', err});
        })
    }
}