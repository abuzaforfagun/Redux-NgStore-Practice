import { User } from './../user';
import { State } from './../../products/state/product.reducer';
import { UserActionTypes, UserActions } from './user.action';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export interface State extends fromRoot.State {
    user: UserState;
}

export interface UserState {
    checkMaskUserName: boolean;
    currentUser: User;
}

const initialUserState: UserState = {
    checkMaskUserName: false,
    currentUser: {
        id: 2,
        isAdmin: false,
        userName: 'Admin'
    }
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getCheckMastUserName = createSelector(getUserFeatureState, state => state.checkMaskUserName);


export function reducer(state = initialUserState, action: UserActions) {
    switch (action.type) {
        case UserActionTypes.CheckMaskUser:
            return {
                ...state,
                checkMaskUserName: action.payload
            };
        case UserActionTypes.InitializeNewUser:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}
