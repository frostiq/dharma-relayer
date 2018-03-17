import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-creditor-view',
  templateUrl: './creditor-view.component.html',
  styleUrls: ['./creditor-view.component.css']
})
export class CreditorViewComponent implements OnInit {
  public loans = [];

  constructor(private loanService: LoanService) { }

    ngOnInit() {
        this.getLoans();
    }

    getLoans(): void {
        this.loanService.getLoans()
            .subscribe(loans => {
                loans.forEach((loan) => {
                    if (loan.status === 'SignedByDebter') {
                        this.loans.push(loan)
                    }
                });
            });
    }


}
