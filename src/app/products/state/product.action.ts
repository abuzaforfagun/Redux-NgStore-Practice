import { Product } from './../product';
import { Action } from '@ngrx/store';

export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toogle Product Code',
    SetCurrentProduct = '[Product] Set Current Product',
    ClearCurrentProduct = '[Product] Clear Current Product',
    InitializeCurrentProduct = '[Product] Initialize Current Product'
}

export class ToogleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode;
    constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct;
    constructor(public payload: Product) {
    }
}
export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;
    constructor() { }
}
export class InitializeCurrentProduct implements Action {
    readonly type = ProductActionTypes.InitializeCurrentProduct;
    constructor() { }
}

export type ProductActions = ToogleProductCode | SetCurrentProduct | ClearCurrentProduct | InitializeCurrentProduct;
