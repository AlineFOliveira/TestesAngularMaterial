import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { MultiSelectListboxComponent } from './multi-select-listbox/multi-select-listbox.component';
import { ScroolingCdkComponent } from './scrooling-cdk/scrooling-cdk.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AutocompleteComponent, FormComponent, CardComponent, MultiSelectListboxComponent, ScroolingCdkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TestesAngularMaterial';
}
