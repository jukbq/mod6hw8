import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HraderComponent } from './hrader/hrader.component';
import { FooterComponent } from './footer/footer.component';

//pages
import { HomeComponent } from './pages/home/home.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { RolesComponent } from './pages/roles/roles.component';
import { SetsComponent } from './pages/sets/sets.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { SaucesComponent } from './pages/sauces/sauces.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

//admin
import { AdminComponent } from './admin//admin.component';
import { ActionComponent } from './admin/action/action.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { GoodsComponent } from './admin/goods/goods.component';
import { OrderComponent } from './admin/order/order.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    HraderComponent,
    FooterComponent,
    HomeComponent,
    ActionsComponent,
    RolesComponent,
    SetsComponent,
    DrinksComponent,
    SaucesComponent,
    DeliveryComponent,
    AboutUsComponent,
    AdminComponent,
    ActionComponent,
    CategoriesComponent,
    GoodsComponent,
    OrderComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
