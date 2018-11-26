import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { multiSingleDropDownModule } from 'angular-multi-single-dropdown';
import { AccordionModule } from 'ng-dynamic-accordion';
import { DatepickersModule } from 'ng6-datepickers';
import { AutocompleteSearchModule } from 'ng-dynamic-autocomplete-searchfield';
import { DynamicTableModule } from 'ng-creating-dynamic-table';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AutocompletesearchComponent } from './autocompletesearch/autocompletesearch.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MultiselectdropdownComponent } from './multiselectdropdown/multiselectdropdown.component';
import { AccordianComponent } from './accordian/accordian.component';
import { DynamictableComponent } from './dynamictable/dynamictable.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompletesearchComponent,
    DatepickerComponent,
    MultiselectdropdownComponent,
    AccordianComponent,
    DynamictableComponent,
  ],
  imports: [
    BrowserModule,
    AutocompleteSearchModule,
    AppRoutingModule,
    DynamicTableModule,
    multiSingleDropDownModule,
    AccordionModule,
    DatepickersModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
