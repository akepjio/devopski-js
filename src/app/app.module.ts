import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RewardsComponent } from './rewards/rewards.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './products/products.component';
import { CardComponent } from './products/card/card.component';
import { LostPasswordComponent } from './auth/lost-password/lost-password.component';
import { CategoryCardComponent } from './products/category-card/category-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    RewardsComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    ProfileComponent,
    IndexComponent,
    ProductsComponent,
    CardComponent,
    LostPasswordComponent,
    CategoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
