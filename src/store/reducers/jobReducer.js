const initState = {
    'initStateJob': ''
}

const jobReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_JOB':
            console.log('created job', action.job);
            return state;

        case 'CREATE_JOB_ERROR':
            console.log('create job error', action.err);
            return state;

        default:
            return state;
    }
}

export default jobReducer