import { Action, createReducer, on } from '@ngrx/store';
import { Item } from 'src/app/models';
import * as itemsPageActions from '../actions';

export interface ItemsState {
  items: Item[];
}

const initialState: ItemsState = {
  items: [],
};

const reducer = createReducer(
  initialState,
  on(itemsPageActions.addItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
  }))
);

export function itemsReducer(state: ItemsState, action: Action) {
  return reducer(state, action);
}
