import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  items: reducers.ItemsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  items: reducers.itemsReducer,
};
