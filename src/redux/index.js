import {combineReducers} from 'redux'

import auth from './auth/reducer'
import menu from './menu/reducer'
import role from './role/reducer'
import user from './user/reducer'
import category from './category/reducer'
import product from './product/reducer'
import range from './range/reducer'
import document from './document/reducer'
import tecuan from './tecuan/reducer'
import multiplier from './multiplier/reducer'
import purchase from './purchase/reducer'
import balance from './balance/reducer'
import merge from './merge/reducer'
import transaction from './transaction/reducer'
import blockchain from './blockchain/reducer'
import withdraw from './withdraw/reducer'
import bond from './bond/reducer'
import translation from './translation/reducer'
import community from './community/reducer'
import staticProduct from './static/reducer'

const reducers = combineReducers({
    auth,
    menu,
    role,
    user,
    category,
    tecuan,
    product,
    range,
    document,
    multiplier,
    purchase,
    balance,
    merge,
    transaction,
    blockchain,
    withdraw,
    bond,
    translation, 
    community,
    staticProduct,
});

export default reducers;
