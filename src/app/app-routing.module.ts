import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { ListBusComponent } from './list-bus/list-bus.component';
import { ListMicroBusComponent } from './list-micro-bus/list-micro-bus.component';
import { E404Component} from './e404/e404.component';

const routes: Routes = [
  { path: 'bus-component', component: ListBusComponent },
  { path: 'micro-bus-component', component: ListMicroBusComponent},
  { path: '',   redirectTo: '/bus-component', pathMatch: 'full' },
  { path: '**', component:  E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
