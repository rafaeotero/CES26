import { combineReducers } from 'redux';
import calculadoraReducer from './calculadora';

const rootReducer = combineReducers({
  calculadora: calculadoraReducer,
});

export default rootReducer;
