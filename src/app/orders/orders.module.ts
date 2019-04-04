import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import{CustomersModule} from '../customers/customers.module';

import { CustomerListComponent } from '../customers/customer-list/customer-list.component';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,//CustomerListComponent,
    OrdersRoutingModule,CustomersModule
  ]
})
export class OrdersModule { }
