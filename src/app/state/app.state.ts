import { UserState } from './../user/state/user.reducer';
import { ProductState } from '../products/state/product.reducer';

export interface State {
    products: ProductState;
    user: UserState;
}
