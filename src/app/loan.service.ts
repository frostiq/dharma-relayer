import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class LoanService {
    private apiUrl = 'api/debts';

    constructor(private http: HttpClient) { }

    getLoans(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl)
            .pipe(
                tap(loans => this.log('fetched loans')),
                catchError(this.handleError('getLoans', []))
            );
    }

    createLoan(loan): Observable<any> {
        console.log(loan);
        return this.http.post<any>(this.apiUrl, loan, httpOptions)
            .pipe(
                catchError(this.handleError('getLoans', loan))
            );
    }

    updateLoan(loan): Observable<any> {
        console.log(loan);
        const url = `${this.apiUrl}/${loan.id}`;
        return this.http.put<any>(url, loan, httpOptions)
            .pipe(
                catchError(this.handleError('getLoans', loan))
            );
    }

    getLoan(id: string): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<any>(url).pipe(
            catchError(this.handleError<any>(`getLoan id=${id}`))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        console.log('LoanService: ' + message);
    }

}
