import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import SenadorReducer from './reducers/senador.reducer'
import DiputadoReducer from './reducers/diputado.reducer'
import LoginReducer from './reducers/login.reducer'

const RootReducer = combineReducers({
  selectSenador: SenadorReducer,
  selectDiputado: DiputadoReducer,
  auth: LoginReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))