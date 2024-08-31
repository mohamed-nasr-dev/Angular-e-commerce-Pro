import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
  },
  {
    path: 'view',
    component: ViewComponent,
    title: 'My Profile',
  },
  {
    path: 'edit',
    component: EditComponent,
    title: 'My Profile',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
