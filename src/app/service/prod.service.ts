import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  private dataSubject = new BehaviorSubject<any>([]);
  public data$ = this.dataSubject.asObservable();

  constructor() { }

  setData(data: any) {
    this.dataSubject.next(data);
  }

}
