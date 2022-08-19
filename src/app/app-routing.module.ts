import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActionsComponent } from './pages/actions/actions.component'
import { RolesComponent } from './pages/roles/roles.component';
import { SetsComponent } from './pages/sets/sets.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { SaucesComponent } from './pages/sauces/sauces.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';


import { AdminComponent } from './admin/admin.component';
import { ActionComponent } from './admin/action/action.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { GoodsComponent } from './admin/goods/goods.component';
import { OrderComponent } from './admin/order/order.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'action', component: ActionsComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'sets', component: SetsComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'sauces', component: SaucesComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: 'action', component: ActionComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'goods', component: GoodsComponent },
    { path: 'order', component: OrderComponent },
    { path: '', pathMatch: 'full', redirectTo: 'action' }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
