import { Component, OnInit } from '@angular/core';
import { IOrder, ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer: ICustomer;

  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');//+ used for converting to number
    this.dataService.getOrders(id).subscribe(
      (orders: IOrder[]) => { this.orders = orders }
    );
    this.dataService.getCustomer(id).subscribe(
      (customer: ICustomer) => { this.customer = customer }
    );

  }

}
