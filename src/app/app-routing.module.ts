import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import HomeComponent from './pages/home.compoment'

const routes: Routes = [
//   {path:'',component:HomeComponent},
// {path:'home',component:HomeComponent},
// // {path:'products',component:ProductlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
