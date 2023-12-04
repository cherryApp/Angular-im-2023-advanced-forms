import { Component, Input, OnInit, effect, inject, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomerStore } from '../../store/CustomerStore';
import { Customer } from '../../model/customer';
import { Router, RouterModule } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { Observable, firstValueFrom, map } from 'rxjs';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
  ],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.scss',
  providers: [
    CustomerStore,
    MatSnackBar,
  ],
})
export class CustomerAddComponent {

  store = inject(CustomerStore);

  snackBar = inject(MatSnackBar);

  router = inject(Router);

  customerService = inject(CustomerService);

  customer = new Customer();

  selectError = this.store.error;

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9 ]{3,}$'),
    ]),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      asyncValidators: [this.validateEmail.bind(this)()],
    }),
    address: new FormControl('', {
      validators: [Validators.required],
    }),
    ip_address: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)
      ],
    }),
    active: new FormControl(false),
    id: new FormControl(0),
  });

  constructor() {
    effect(() => {
      if (this.selectError()) {
        this.snackBar.open(this.selectError(), 'Close', {
          duration: 3000,
        });
      }
    });
  }

  onAdd(form: FormGroup) {
    this.store.createItem(form.value);
    this.router.navigate(['/customers']);
  }

  validateEmail() {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.customerService.query(
        `email=${control.value}`
      ).pipe( map((customers: Customer[]) => {
        if (customers && customers.length > 0) {
          return { emailAlreadyExists: true };
        }
        return null;
      }));
    }
  }
}
