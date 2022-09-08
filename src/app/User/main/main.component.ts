
import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Route, Router} from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators,
} from "@angular/forms";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
form:any;
  constructor(private router: Router,private fb:FormBuilder) { }

  ngOnInit() {
   const a =  this.testing({x:'a',y:'b',z:undefined},'dshjfbgdhj');
   console.log(a);
   this.checkage();
   this.checkletters()
   
  }
createform(){
 this.form=this.fb.group({
current:new FormControl('',Validators.required),

 }) 
}

  testing(a:any,b:any){
    let c = [];
    c = Object.keys(a);
    console.log(c);
    
    return c.includes(b)
  }
  checkage(){
    var dob=new Date("12/25/1996");
    var age= Math.abs(new Date(Date.now()-dob.getTime()).getUTCFullYear()-1970);
    console.log(age,"years old");
    

  }
  checkletters(){
    var a='hello';var b='hello ashmar'
    return  console.log((b.split(' ').includes(a)));
       
  }

}
