import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './auth/login/login.component';
import { LostPasswordComponent } from './auth/lost-password/lost-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './cart/cart.component';
import { IndexComponent } from './index/index.component';
import { CardComponent } from './products/card/card.component';
import { OneProductComponent } from './products/one-product/one-product.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RewardsComponent } from './rewards/rewards.component';

const routes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'rewards', component: RewardsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'one-product', component: OneProductComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product-card', component: CardComponent},
  {path: 'lost-password', component: LostPasswordComponent},
  {path: '', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
