
import { HttpClient} from '@angular/common/http';
import { Table } from './table-bus.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ListRequest {
    tables: Table[];

  constructor(private httpClient:HttpClient){}

  getHttpBus():Observable<Table[]>{
    return this.httpClient.get<Table[]>
      ("http://www.poatransporte.com.br/php/facades/process.php", 
      {params:{ a: "nc", p: "%", t: "o"}});
  }  
  getHttpMicroBus():Observable<Table[]>{
    return this.httpClient.get<Table[]>
      ("http://www.poatransporte.com.br/php/facades/process.php", 
      {params:{ a: "nc", p: "%", t: "l"}});
  }  
}