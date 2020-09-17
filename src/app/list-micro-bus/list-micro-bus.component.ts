import { Component, OnInit } from '@angular/core';
import { ListRequest } from '../list-request.service';
import { Table } from '../table-bus.model';

@Component({
  selector: 'app-list-micro-bus',
  templateUrl: './list-micro-bus.component.html',
  providers: [ ListRequest]
})
export class ListMicroBusComponent implements OnInit{
  tables: Table[];

  constructor(private listsRequest: ListRequest){}
  ngOnInit(){
    this.listsRequest
      .getHttpMicroBus()
      .subscribe((table)=>{
        this.tables=table
      });
  }
}