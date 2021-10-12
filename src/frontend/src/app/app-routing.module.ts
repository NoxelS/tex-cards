import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecoverPasswordComponent } from './misc/recover-password/recover-password.component';
import { routePaths } from './shared/routes.const';
import { ServermanagementComponent } from './superuser/servermanagement/servermanagement.component';
import { UsermanagementComponent } from './superuser/usermanagement/usermanagement.component';


const routes: Routes = [
    { path: routePaths.ROOT, redirectTo: routePaths.ARTICLES, pathMatch: 'full' },
    { path: routePaths.RESET_PASSWORD, component: RecoverPasswordComponent },
    { path: routePaths.USERMANAGEMENT, component: UsermanagementComponent },
    { path: routePaths.SERVERMANAGEMENT, component: ServermanagementComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
