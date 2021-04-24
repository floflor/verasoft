import { combineReducers } from 'redux';
import {
  getInfoReducer,
  initialState,
} from './userInfo-reducer';

export interface State {
  userInfo: initialState;
}

export const rootReducers = combineReducers<State>({
  userInfo: getInfoReducer,
});