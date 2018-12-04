import { Product } from './../product';
import { Action } from '@ngrx/store';

export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toogle Product Code',
    SetCurrentProduct = '[Product] Set Current Product',
    ClearCurrentProduct = '[Product] Clear Current Product',
    InitializeNewProduct = '[Product] Initialize New Product',
    Load = '[Product] Load',
    LoadSuccess = '[Product] Loaded Successfully',
    LoadFail = '[Product] Load Fail'
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
export class InitializeNewProduct implements Action {
    readonly type = ProductActionTypes.InitializeNewProduct;
    constructor() { }
}

export class Load implements Action {
    readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LoadSuccess;
    constructor(public payload: Product[]) { }
}

export class LoadFail implements Action {
    readonly type = ProductActionTypes.LoadFail;
    constructor(public payload: String) { }
}
export type ProductActions = ToogleProductCode | SetCurrentProduct | ClearCurrentProduct | InitializeNewProduct;
