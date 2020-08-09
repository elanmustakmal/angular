import { InsertService } from './../insert.service';
import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

formGroup: FormGroup;
formGroup1: FormGroup;

  constructor(private authService: AuthServiceService, private insertService: InsertService,
    private router: Router) { }

  ngOnInit(){
    this.initForm();
    this.initFormInsert();
  }
  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])

    });
}

  initFormInsert(){
    this.formGroup1 = new FormGroup({
      Username: new FormControl('',[Validators.required]),
      Password: new FormControl('',[Validators.required]),
      Name: new FormControl('',[Validators.required]),
      Email: new FormControl('',[Validators.required]),
      Roles: new FormControl('',[Validators.required]),
      Active: new FormControl('',[Validators.required])
    });
}

  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result => {
        if(result.success) {
          console.log(result);
          alert(result.message);
          localStorage.setItem('token', result.token)
          this.router.navigate(['/special'])
        } else {
          alert(result.message);
        }
      })
    }
  }

  insertProcess(){
    if(this.formGroup1.valid){
      this.insertService.insert(this.formGroup1.value).subscribe(result1 => {
        if(result1.success) {
          console.log(this.formGroup1.value);
          alert("please Log In to continue")
        } else {
          alert("Sign Up Failed");
        }
      })
    }
  }

  
 

}
