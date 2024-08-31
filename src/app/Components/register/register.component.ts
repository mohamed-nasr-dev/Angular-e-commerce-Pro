import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserApiService } from '../../Services/user-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  userRegister: FormGroup;
  text: string[] = ['city', 'postalCode', 'street'];
  // (1)	Show button (add another mobile), that will show new input with the same pattern validation, and other button (remove) to remove only additional numbers (Use Dynamic form building).

  constructor(private fb: FormBuilder, private userService: UserApiService) {
    this.userRegister = this.fb.group({
      //   i)	Full Name, use: required, min length 5 validators.

      fullName: ['', [Validators.required, Validators.minLength(5)]],
      // ii)	Email, use required, Email validators.
      email: ['', [Validators.required, Validators.email]],
      // iii)	Mobile number, use required, pattern validators.
      mobiles: this.fb.array([this.newMobile()]),

      // iv)	Address (City, Postal Code, street):
      // make the city, postal code and street nested from Address field, and make all of them required.
      address: this.fb.array([
        this.fb.group({
          city: ['', [Validators.required]],
        }),
        this.fb.group({
          postalCode: ['', [Validators.required]],
        }),
        this.fb.group({
          street: ['', [Validators.required]],
        }),
      ]),
      // v)	Password : required, min length 6.
      // vi)	Confirm password
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
    console.log(this.userRegister);
  }

  get fullName() {
    return this.userRegister.get('fullName');
  }
  get email() {
    return this.userRegister.get('email');
  }

  get password() {
    return this.userRegister.get('password');
  }
  get confirmPassword() {
    return this.userRegister.get('confirmPassword');
  }
  get address() {
    return this.userRegister.get('address') as FormArray;
  }

  get mobiles(): FormArray {
    return this.userRegister.get('mobiles') as FormArray;
  }
  newMobile(): FormGroup {
    return this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
    });
  }
  addMobile() {
    this.mobiles.push(this.newMobile());
  }

  removeMobile(numOfIndex: number) {
    this.mobiles.removeAt(numOfIndex);
  }

  addUser() {
    delete this.userRegister.value['confirmPassword'];
    this.userService.addNewUser(this.userRegister.value).subscribe({
      next: () => {
        console.log('Done ');
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
