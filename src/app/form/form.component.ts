import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  onSubmit() { //ao clicar no botao
    if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);
    }
  }
}
