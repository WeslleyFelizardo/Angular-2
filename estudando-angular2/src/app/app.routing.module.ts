import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

import { ModuleWithProviders, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent}
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}