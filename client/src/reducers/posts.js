export default (state = [], action) => {

    switch (action.type) {

        case 'GET_ALL':
            return state;

        case 'CREATE':
            return state;

        default:
            return state
    }
}