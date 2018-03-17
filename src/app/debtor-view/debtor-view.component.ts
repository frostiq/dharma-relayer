import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

import { forEach } from "@angular/router/src/utils/collection";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-debtor-view',
    templateUrl: './debtor-view.component.html',
    styleUrls: ['./debtor-view.component.css']
})
export class DebtorViewComponent implements OnInit {
    public loans = [];
    public newLoan = {
        amount: '100',
        tokenSymbol: 'ZRX',
        purpose: 'investing',
        firstName: 'Jonh',
        lastName: 'Doe',
        ssn: '111-222',
        streetAddress: '12 Some str',
        city: 'Boston',
        state: 'MA',
        zipCode: '02115'
    };
    public loan = {};
    public tokens = ['REP', 'ZRX', 'MKR', 'DAI', 'MANA', 'EOS'];
    public purposes = ['home improvement', 'investing', 'Lambo purchase', 'debt consolidation', 'business'];

    constructor(private loanService: LoanService, private modalService: NgbModal) {
    }

    ngOnInit() {
        this.getLoans();
    }

    getLoans(): void {
        this.loanService.getLoans()
            .subscribe(loans => {
                loans.forEach((loan) => {
                    if (loan.status === 'SignedByUnderwriter') {
                        this.loans.push(loan)
                    }
                });
            });
    }

    onSubmit() {
        this.loanService.createLoan(this.newLoan).subscribe();
    }

    signLoan(loan, content) {
        this.loan = loan;
        this.modalService.open(content, {size: 'lg'}).result.then((result) => {
            console.log(result);
            loan.status = 'SignedByDebter';
            this.loanService.updateLoan(loan).subscribe();
        }, (reason) => {
            console.log(reason);
        });
    }

}
