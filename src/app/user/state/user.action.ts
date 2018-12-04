import { Action } from '@ngrx/store';

export enum UserActionTypes {
    CheckMaskUser = '[User] Check Mask User',
    InitializeNewUser = '[User] Initialize New User'
}

export class CheckMaskUser implements Action {
    readonly type = UserActionTypes.CheckMaskUser;
    constructor(public payload: boolean) { }
}

export class InitializeNewUser implements Action {
    readonly type = UserActionTypes.InitializeNewUser;
    constructor(public payload: String) { }
}

export type UserActions = CheckMaskUser | InitializeNewUser;
