import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-underwriter-view',
    templateUrl: './underwriter-view.component.html',
    styleUrls: ['./underwriter-view.component.css']
})
export class UnderwriterViewComponent implements OnInit {
    public loans = [];
    public loan = {};
    public tokens = ['REP', 'ZRX', 'MKR', 'DAI', 'MANA', 'EOS'];

    constructor(private loanService: LoanService, private modalService: NgbModal) {}

    signLoan(loan, content) {
        loan.status = 'SignedByUnderwriter';
        this.loan = loan;
        this.modalService.open(content, {size: 'lg'}).result.then((result) => {
            console.log(result);
        }, (reason) => {
            console.log(reason);
        });
    }

    ngOnInit() {
        this.getLoans();
    }

    getLoans(): void {
        this.loanService.getLoans()
            .subscribe(loans => {
                loans.forEach((loan) => {
                    if (loan.status === 'New') {
                        this.loans.push(loan)
                    }
                });
            });
    }

    onSubmit() {
        this.loanService.updateLoan(this.loan).subscribe();
    }

}
