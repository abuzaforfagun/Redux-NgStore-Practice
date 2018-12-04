import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export interface State extends fromRoot.State {
    user: UserState;
}

export interface UserState {
    checkMaskUserName: boolean;
}

const initialUserState: UserState = {
    checkMaskUserName: false
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getCheckMastUserName = createSelector(getUserFeatureState, state => state.checkMaskUserName);

export function reducer(state = initialUserState, action) {
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
