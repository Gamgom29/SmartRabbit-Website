import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderDeatilsComponent } from './components/order-deatils/order-deatils.component';
import { HomeComponent } from './components/home/home.component';
import { ImportsModule } from './imports/imports.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    OrdersComponent,
    WalletComponent,
    ProfileComponent,
    OrderDeatilsComponent,
    HomeComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    AuthNavbarComponent,
  ],
  imports: [
    BrowserModule,
    ImportsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
