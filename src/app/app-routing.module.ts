import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignComponent } from './design/design.component';

const routes: Routes = [
  {path:'',redirectTo:'calculator',pathMatch:'full'},
  {path:'calculator',component:DesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
}
