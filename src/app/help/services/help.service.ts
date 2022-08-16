import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HelpService {

    constructor(private http: HttpClient) { }

    loadContactData(contactForm): Observable<any> {
        return this.http.post("https://mywebapp/submitRequst", contactForm)
          .pipe(
            catchError(this.loadContactData)
          );
      }

      getContactData(contactForm): Observable<any>  {
        return this.http.get("https://mywebapp/getData")
          .pipe(
            catchError(contactForm) // then handle the error
          );
      }


}