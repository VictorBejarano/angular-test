import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/models';

export const ADD_ITEM = '[Items Export] Add Items';
export const DEL_ITEM = '[Items Export] Delete Items';

export const addItem = createAction(ADD_ITEM, props<{ item: Item }>());
export const deleteItem = createAction(DEL_ITEM, props<{ index: number }>());
