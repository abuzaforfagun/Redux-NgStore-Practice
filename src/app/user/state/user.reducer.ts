export interface UserState {
    checkMaskUserName: boolean;
}

export function reducer(state, action) {
    switch (action.type) {
        case 'CHECK_MASK_USER':
            console.log(state);
            console.log(action.payload);
            return {
                ...state,
                checkMaskUserName: action.payload
            };
        default:
            return state;
    }
}
