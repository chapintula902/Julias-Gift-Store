import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireAuthModule } from '@angular/fire/auth'
import {AngularFireModule} from '@angular/fire'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService as AdminAuthGuard } from './admin-auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      //Normal Users
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent }, 
      { path: 'shopping-cart', component: ShoppingCartComponent }, 
      { path: 'login', component: LoginComponent }, 

      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] }, 
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard]  }, 
   
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]  }, 
      //Admin Components
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard]  }, 
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard]  }, 
    
    ])
  ],
  providers: [AuthService, AuthGuard, UserService, AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
