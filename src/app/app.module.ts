import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DebtorViewComponent } from './debtor-view/debtor-view.component';
import { UnderwriterViewComponent } from './underwriter-view/underwriter-view.component';
import { CreditorViewComponent } from './creditor-view/creditor-view.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';

import { LoanService } from './loan.service';


@NgModule({
  declarations: [
    AppComponent,
    DebtorViewComponent,
    UnderwriterViewComponent,
    CreditorViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
