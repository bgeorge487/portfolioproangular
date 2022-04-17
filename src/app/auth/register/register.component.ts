import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegistrationDto } from 'src/app/shared/interfaces/auth-interfaces/reg-model/registration-dto';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registrationForm!: FormGroup;
  public errorMessage: string [] = [];
  public showError: boolean = false;

  constructor(private _authService :AuthService, private router: Router ) {
    
}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('')
    });
    
  }

  public registerUser = (registerFormValue:any) => {
    this.showError = false;
    const formValues = { ...registerFormValue };

    const user: RegistrationDto = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirm
    };
    this._authService.registerUser(user)
    .subscribe(
      {next: resp => {if(resp.regSuccessful==true){ this.router.navigate(['/auth/login'])}; //remove if 
       error: () =>  {this.errorMessage = resp.errors;}}
    })
  }
}