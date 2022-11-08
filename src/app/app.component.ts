import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayForm: boolean = false;

  profileForm = new FormGroup({
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[+91]{3}[0-9]{10}')//first 3 must be +91 and rest 10 digits, maxlength is 10 type tel
    ]),
    panNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  });

  toggleForm() {
    this.displayForm = !this.displayForm;
  }

  onSubmit() {
    alert('Saved Sucessfully');
    this.toggleForm();
  }

}
