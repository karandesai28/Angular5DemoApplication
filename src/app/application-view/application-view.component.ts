import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './application-view.component.html'
})
export class ApplicationViewComponent implements OnInit { 
  @Input() applicant: Applicant;
  applicantToEdit: Applicant;
  hideEditView: boolean;
  displayNewForm: boolean;
  constructor() {
    
  }
  ngOnInit() {
    this.hideEditView = true;
    this.displayNewForm = false;
  }

  showEditForm() {
    console.log("here");
    this.hideEditView = false;
    this.applicantToEdit = this.applicant;
    console.log(this.hideEditView);
  }

  deleteFormData() {
    this.displayNewForm = true;
  }
}

export class Applicant{
  public Name: string;
  public Email: string;
  public PhoneNumber: number | string;
  public Experience: number;
  public File: string;
}
