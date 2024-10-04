import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Customer} from "./Customer.type";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:8080/customers';

  constructor(private http: HttpClient) { }

  getList(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.apiUrl);
  }

  get(id: string | null): Observable<Customer | null> {
    if (!id) return of(null);
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  add(customer: Omit<Customer, "id">): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  update(id: string, customer: Customer): Observable<Customer> {
    console.log("updateservice : "+JSON.stringify(customer));
    return this.http.put<Customer>(`${this.apiUrl}/${id}`, customer);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
