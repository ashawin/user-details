import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [{path: 'login' , component: LoginComponent},
{path: '', canActivate:[AuthGuard],  component: HomeComponent},
{path: 'add', canActivate:[AuthGuard],  component: AddComponent},
{path: 'update/:id', canActivate:[AuthGuard],  component: UpdateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
