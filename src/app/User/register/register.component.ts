import { state } from "@angular/animations";
import { jsonpCallbackContext } from "@angular/common/http/src/module";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators,
} from "@angular/forms";
// import { FormBuilder } from '@angular/forms';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { forEach } from "@angular/router/src/utils/collection";
interface States {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  form: any;
  para: any;
  selectedValue: string;
  constructor(private fb: FormBuilder) {}
  // name=new FormControl ('')
  ngOnInit() {
    this.creteForm();
  }
  creteForm() {
    this.form = this.fb.group({
      first: new FormControl("", Validators.required),
      last: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      code: new FormControl("", Validators.required),
    });

    const details = JSON.parse(localStorage.getItem("detail"));
    console.log(details);
  }
  states: States[] = [
   {value:"Andaman and Nicobar Islands	",viewValue:"Andaman and Nicobar Islands	"},
   {value:"Andhra Pradesh	",viewValue:"Andhra Pradesh	"},
   {value:"Arunachal Pradesh	",viewValue:"Arunachal Pradesh	"},
   {value:"Assam	",viewValue:"Assam"},
   {value:"Bihar	",viewValue:"Bihar"},
   {value:"Chhattisgarh	",viewValue:"Chhattisgarh"},
   {value:"Goa	",viewValue:"Goa"},
   {value:"Gujarat		",viewValue:"Gujarat	"},
   {value:"Haryana		",viewValue:"Haryana	"},
   {value:"Himachal Pradesh",viewValue:"Himachal Pradesh"},
   {value:"Jharkhand	 ",viewValue:"Jharkhand	 "},
   {value:"Karnataka	 ",viewValue:"Karnataka	 "},
   {value:"Kerala	 ",viewValue:"Kerala		 "},
  ];

  Submit() {
    // const fvalue=document.getElementsByTagName("Form.value")
    // console.log(fvalue);
    console.log(this.form.value);
    // window.localStorage.setItem('Detail',this.form.first.value)
    localStorage.setItem("Detail", JSON.stringify(this.form.value));
    this.form.reset();
  }
}

// Andhra Pradesh			                                                                                    	Amaravati
// Arunachal Pradesh	                                                                                    Itanagar
// Assam                                                                                   Dispur
// Bihar	                                                                                    Patna
// Chhattisgarh	                                                                                    Raipur
// Goa	                                                                                    Panaji
// Gujarat	                                                                                    Gandhinagar
// Haryana	                                                                                    Chandigarh
// Himachal Pradesh	                                                                                    Shimla
// Jharkhand	                                                                                    Ranchi
// Karnataka                                                                                   	Bengaluru
// Kerala	                                                                                    Thiruvananthapuram
// Madhya Pradesh	                                                                                    Bhopal
// Maharashtra	                                                                                    Mumbai
// Manipur	                                                                                    Imphal
// Meghalaya	                                                                                    Shillong
// Mizoram	                                                                                    Aizawl
// Nagaland	                                                                                    Kohima
// Odisha	                                                                                    Bhubaneswar
// Punjab	                                                                                    Chandigarh
// Rajasthan	                                                                                    Jaipur
// Sikkim	                                                                                    Gangtok
// Tamil Nadu	                                                                                    Chennai
// Telangana                                                                                   	Hyderabad
// Tripura	                                                                                    Agartala
// Uttar Pradesh	                                                                                    Lucknow
// Uttarakhand         West Bengal                                                                          	Dehradun (Winter)
