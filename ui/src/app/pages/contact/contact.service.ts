import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contactEndpoint = `${environment.backendApiUrl}/contact`;

  constructor(private http: HttpClient) {}

  sendMessage(contactForm: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post(this.contactEndpoint, contactForm);
  }
}