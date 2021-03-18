import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';


@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule, FormsModule, SharedModule, OrdersRoutingModule
  ],
  exports: [OrdersComponent]
})
export class OrdersModule { }
