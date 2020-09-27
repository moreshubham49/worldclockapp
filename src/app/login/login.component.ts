import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router :Router  ) { }

  ngOnInit() {
  }

  login(loginForm)
  {

    console.log(loginForm.value)

    /*function to check userid & password*/
      /*the following code checkes whether the entered userid and password are matching*/
      if(loginForm.value.email == "test@test.com" && loginForm.value.password == "test") {
         // window.open()/*opens the target page while Id & password matches*/
         this.router.navigate(['settime']);
         
        }
      else {
          alert("Error Password or Username")/*displays error message*/

  }

}


}
