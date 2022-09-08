import { Component, OnInit } from '@angular/core';
import {FormControl,FormControlName, Validators} from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
form:any;

  constructor(private fb: FormBuilder) {  }

  ngOnInit() {
   this.createform();
 
}
createform(){
  this.form=this.fb.group({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  });
  
}
submit(){
  console.log(this.form.value)
}
}
