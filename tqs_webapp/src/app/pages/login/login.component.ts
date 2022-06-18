import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInFailed: boolean = false; 

  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }

  submit() {

    let mail = (<HTMLInputElement>document.getElementById("email")).value
    let password = (<HTMLInputElement>document.getElementById("password")).value

    let str = '{"email": "'+ mail +'", "password": "'+ password +'"}';
    let json = JSON.parse(str);

    if (mail && password) {
      this.service.logIn(json).subscribe({
        next: () => {
          this.logInFailed = false;
          window.location.href = "/"

        }, 
        error: () => {
          this.logInFailed = true;
        }
      });

    } else {
      this.logInFailed = true;
    }
  }

}
