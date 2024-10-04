import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Customer} from "../customer/Customer.type";
import {Order} from "./Order.type";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) { }

  getList(): Observable<Order[]>{
    return this.http.get<Order[]>(this.apiUrl);
  }

  get(id: string | null): Observable<Order | null> {
    if (!id) return of(null);
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  add(order: Omit<Order, "id">): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

  update(id: string, order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/${id}`, order);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
