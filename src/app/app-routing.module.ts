import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditorViewComponent } from './creditor-view/creditor-view.component';
import { DebtorViewComponent } from './debtor-view/debtor-view.component';
import { UnderwriterViewComponent } from './underwriter-view/underwriter-view.component';
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'debtor', component: DebtorViewComponent },
    { path: 'underwriter', component: UnderwriterViewComponent },
    { path: 'creditor', component: CreditorViewComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
