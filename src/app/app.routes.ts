import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { authGuard, loginGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginGuard]  // Redirect to dashboard if already authenticated
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]  // Require authentication
  },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [authGuard]  // Require authentication
  },
  {
    path: 'products',
    component: ProductComponent,
    canActivate: [authGuard]  // Require authentication
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }  // Default route to dashboard
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
