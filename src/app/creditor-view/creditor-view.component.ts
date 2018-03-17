import {Component, OnInit} from '@angular/core';
import {LoanService} from '../loan.service';
import { Router } from '@angular/router';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-creditor-view',
    templateUrl: './creditor-view.component.html',
    styleUrls: ['./creditor-view.component.css']
})
export class CreditorViewComponent implements OnInit {
    public loans = [];
    public loan = {};

    constructor(private loanService: LoanService, private modalService: NgbModal, private router: Router) {
    }

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

    fillOrder(loan, content) {
        this.loan = loan;
        this.modalService.open(content).result.then((result) => {
            console.log(result);
            this.loanService.updateLoan(loan, 'Filled').subscribe(() => {
                this.loans = [];
                this.getLoans();
            });
        }, (reason) => {
            console.log(reason);
        });
    }


}
