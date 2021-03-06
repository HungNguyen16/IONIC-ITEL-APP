import { Component, Input, OnInit } from '@angular/core';
import { PaymentModel } from 'src/app/models/payment-model';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  payments: PaymentModel[] = [];
  checkIndex = 0;
  @Input() type: number;

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.getListPaymentByType(this.type).subscribe(res => {
      this.payments = res;
      console.log('thanh toan', this.payments);
    });
  }
}
