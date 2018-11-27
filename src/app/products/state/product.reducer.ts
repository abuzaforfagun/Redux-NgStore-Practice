export function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_DISPLAY_CODE':
            // let _state = Object.assign({}, state);
            console.log(state);
            console.log(action.payload);
            return {
                ...state,
                showProductCode: action.payload
            }
        default:
            return state;
    }
}