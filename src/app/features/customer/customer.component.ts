import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/core/services/customer.service';
import { NotifyService } from 'src/app/core/services/notify.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerFormGroup: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly customerService: CustomerService,
    private readonly notify: NotifyService,
  ) { 
    this.customerFormGroup = this.formBuilder.group({
      customerName: ['', Validators.required],
      customerAge: ['', Validators.required],
      customerAddress: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  addCustomer(): void {
    this.customerService.addCustomer(this.customerFormGroup.value).subscribe(response => {
      this.notify.success('Customer added successfully')
    });
  }
}
