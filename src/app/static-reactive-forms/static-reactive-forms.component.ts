import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-static-reactive-forms',
  templateUrl: './static-reactive-forms.component.html',
  styleUrls: ['./static-reactive-forms.component.scss'],
})
export class StaticReactiveFormsComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
