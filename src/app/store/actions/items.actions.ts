import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/models';


export const ADD_ITEM = '[Items Export] Add Items';

export const addItem = createAction(
  ADD_ITEM,
  props<{ item: Item}>()
);
