import { Component } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [MatAutocompleteModule],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent {

}
