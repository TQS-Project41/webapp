import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { formatDate } from '@angular/common'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  error_name: Boolean = false;
  error_email: Boolean = false;
  error_password: Boolean = false;
  error_birthday: Boolean = false;
  error_telephone: Boolean = false;
  error_diff_password: Boolean = false;
  error_register: boolean = false;
  success: boolean = false;

  constructor(private fb: FormBuilder, private service: AuthService) { 
    this.registerForm = this.fb.group({
      name: [null],
      email: [null],
      password:[null],
      birthday:[null],
      phoneNumber:[null],
    });
  }


  ngOnInit(): void {
  }

  register() {

    this.reset();

    if (!this.registerForm.value["name"]) this.error_name = true;
    if (!this.registerForm.value["email"]) this.error_email = true;
    if (!this.registerForm.value["password"]) {
      this.error_password = true;

    } else if ( (<HTMLInputElement>document.getElementById("pass_again")).value !== this.registerForm.value["password"]) {
      this.error_diff_password = true;

    }
    if (!this.registerForm.value["phoneNumber"]) this.error_telephone = true;
    if (!this.registerForm.value["birthday"]) {
      this.error_birthday = true;

    } else {
      var today = new Date();
      today.setHours(0,0,0,0);
      var bday = new Date(this.registerForm.value["birthday"]);
      if(bday >= today) this.error_birthday = true;
      this.registerForm.value["birthday"] = bday;
    }

    if (this.allValid()) {
      let str = JSON.stringify(this.registerForm.value);
      let json = JSON.parse(str);

      let bday = formatDate(json["birthday"], 'dd-MM-yyyy', 'en_US')
      json["birthday"] = bday

      this.service.register(json).subscribe({
        next: () => {
          this.success = true;
        }, 
        error: (error) => {
          console.log(error);
          this.error_register  =true;
        }
      });
    }
  }

  reset() {
    this.error_name = false;
    this.error_email = false;
    this.error_password = false;
    this.error_birthday = false;
    this.error_telephone = false;
    this.error_diff_password = false;
    this.error_register = false;
  }

  allValid() {
    if (!this.error_name && !this.error_email && !this.error_password && !this.error_birthday && !this.error_telephone && !this.error_diff_password) return true;
    return false;
  }

}




