import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TypeBox } from 'src/app/enum/type-box.enum';
import { Item } from 'src/app/models';
import { addItem, deleteItem } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
import { ItemsState } from 'src/app/store/reducers';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-CO' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class AvailabilityComponent implements OnInit {
  items$: Observable<ItemsState>;
  unsubcribe$ = new Subject<void>();
  typeBox = TypeBox;
  keys = Object.keys;
  displayedColumns: string[] = [
    'name',
    'num_box',
    'type_box',
    't_box',
    't_pomo',
    'fob',
    'stems',
    'amount',
    'ref',
    'button',
  ];
  exporterDataForm: FormGroup;
  itemDataForm: FormGroupTyped<Item>;

  constructor(private store: Store<AppState>) {
    this.items$ = this.store.select('items').pipe(takeUntil(this.unsubcribe$));
    this.exporterDataForm = new FormGroup({
      name_exporter: new FormControl(''),
      date_from: new FormControl(''),
      date_to: new FormControl(''),
    });
    this.itemDataForm = new FormGroup({
      name: new FormControl('', Validators.required),
      num_box: new FormControl('', Validators.required),
      type_box: new FormControl('', Validators.required),
      t_box: new FormControl('', Validators.required),
      t_pomo: new FormControl('', Validators.required),
      fob: new FormControl('', Validators.required),
      stems: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      ref: new FormControl('', Validators.required),
    }) as FormGroupTyped<Item>;
  }

  ngOnInit(): void {}

  exporterSubmit(): void {}

  addItemSubmit(): void {
    this.store.dispatch(addItem({ item: this.itemDataForm.value }));
  }

  deleteItem(i: number) {
    this.store.dispatch(deleteItem({ index: i }));
  }
}
