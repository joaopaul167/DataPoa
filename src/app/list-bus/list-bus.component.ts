import { Component, OnInit } from '@angular/core';
import { ListRequest } from '../list-request.service';
import { Table } from '../table-bus.model';

@Component({
  selector: 'app-list-bus',
  templateUrl: './list-bus.component.html',
  providers: [ ListRequest]
})
export class ListBusComponent implements OnInit{
  tables: Table[];
  constructor(private listsRequest: ListRequest){}
  ngOnInit(){
    this.listsRequest
      .getHttpBus()
      .subscribe((table)=>{
        this.tables=table;
      });
  }
}
