import { Component, OnInit, Input } from '@angular/core';//SimpleChanges
import { ICustomer } from '../../shared/interfaces';
import { SorterService } from 'src/app/core/sorter.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = [];
  //only need to put the input decorator in one of them (getter or setter)
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }
  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'EUR';//'USD';

  constructor(private sorterService: SorterService) { }

  ngOnInit(): void {
    this.filteredCustomers = [
      { id: 1, name: 'john doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
      { id: 2, name: 'jane doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22) },
      { id: 3, name: 'mariana fonseca', city: 'New York', orderTotal: 99.99, customerSince: new Date(2002, 10, 31) },
      { id: 4, name: 'jim thomas', city: 'Baltimore', orderTotal: 599.99, customerSince: new Date(2002, 10, 31) }
    ];
  }

  ///If I need to change several properties,instead of just one:
  // @Input() customers: any[];
  // ngOnChanges(changes: SimpleChanges){}

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  sort(property: string) {
    // A sorter service will handle the sorting
    this.sorterService.sort(this.filteredCustomers, property);
    console.log(property);
  }

  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
        return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.orderTotal.toString().indexOf(data) > -1;
      });
      this.calculateOrders();
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }

}
