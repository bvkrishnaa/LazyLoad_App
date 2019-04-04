import { Component, OnInit ,Input} from '@angular/core';
import { CustomerListComponent} from '../../customers/customer-list/customer-list.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  @Input() hh:CustomerListComponent;
  constructor() {
    //alert(this.hh.listName);
   }

  ngOnInit() {
  }

}
