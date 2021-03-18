import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-text-box',
  templateUrl: './filter-text-box.component.html',
  styleUrls: ['./filter-text-box.component.css']
})
export class FilterTextBoxComponent implements OnInit {

  private _filter: string;
  @Input() get filter() {//this is useful if there is a preference from the user
      return this._filter;
  }
  
  set filter(val: string) { 
      this._filter = val;
      this.changed.emit(this.filter); //Raise changed event
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
