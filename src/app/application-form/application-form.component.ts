import { Component, OnInit,Directive,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApplicationViewComponent } from './../application-view/application-view.component';

@Component({
  selector: 'app-root',  
  templateUrl: './application-form.component.html'
  
})
export class ApplicationFormComponent implements OnInit { 
  @Input() applicant: Applicant;
  displayDetails: boolean;
  form: any = {};
  
  constructor() {
    this.applicant = new Applicant();
    this.displayDetails = false;
  }

  onSubmit(f) {
    console.log(f);
    this.displayDetails = true;                    
  }

  ngOnInit(){
  
  }


  resumeUploaded(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        console.log(event);
        this.applicant.File = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
    console.log(this.applicant.File);
  }
}

export class Applicant{
  public Name: string;
  public Email: string;
  public PhoneNumber: number | string;
  public Experience: number;
  public File: string;
}
