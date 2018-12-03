import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutocompletesearchComponent } from './autocompletesearch/autocompletesearch.component';
import { AccordianComponent } from './accordian/accordian.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MultiselectdropdownComponent } from './multiselectdropdown/multiselectdropdown.component';
import { DynamictableComponent } from './dynamictable/dynamictable.component';





const routes: Routes = [
    { path: '', redirectTo: '/accordion', pathMatch: 'full' },
    { path: 'autocompletesearch', component: AutocompletesearchComponent },
    { path: 'accordion', component: AccordianComponent },
    { path: 'datepicker', component: DatepickerComponent },
    { path: 'table', component: DynamictableComponent },
    { path: 'multi-single-selectdropdown', component: MultiselectdropdownComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
