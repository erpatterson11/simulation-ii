import { createStore, combineReducers } from 'redux'

import newProp from './reducers/newProp'
import allProps from './reducers/allProps'

export default createStore( combineReducers({ newProp, allProps }) )