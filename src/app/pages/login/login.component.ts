import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionGuardService } from "../../services/session-guard.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup
  loading = false;
  submitted = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router : Router,
    private service : SessionGuardService
  ) { }   

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  };

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmitLoguer():void {  
     this.submitted = true;
     if(this.form.invalid)return;
     this.loading = true;
     this.service.login(this.f.username.value, this.f.password.value).subscribe((result:any) => {
      if(!(result != null))return console.error();
      console.log(sessionStorage)
      this.router.navigate(['../home', ], { relativeTo: this.activatedRoute })
    });
    
  }

}
