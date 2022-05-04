import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  id:number = 0;
  name:string = '';
  constructor(private active:ActivatedRoute) { 
    this.id =  this.active.snapshot.params.id;
    this.name = this.active.snapshot.params.name;

  }

  ngOnInit(): void {
  }

}
