import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormComponent } from './form/form.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AutocompleteComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TestesAngularMaterial';
}
