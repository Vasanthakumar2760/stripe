import { Routes } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { CancelComponent } from './cancel/cancel.component';

export const routes: Routes = [


    {path:'success',component:SuccessComponent},
    {path:'cancel',component:CancelComponent}
];
