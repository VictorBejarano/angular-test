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
  })),
  on(itemsPageActions.deleteItem, (state, { index }) => {
    const itemsTemp = [...state.items];
    if (index > -1) {
      itemsTemp.splice(index, 1);
    }
    return {
      ...state,
      items: [...itemsTemp],
    };
  })
);

export function itemsReducer(state: ItemsState, action: Action) {
  return reducer(state, action);
}
