import { Component, OnInit } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { startWith } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [
    MatAutocompleteModule, 
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent {
  pesquisar = new FormControl();
  cidades: string[] = ['Cascavel', 'Laranjeiras', 'Toledo', 'Curitiba', 'Foz do Iguaçu'];

  filtro!: Observable<string[]>

  ngOnInit(){
    this.filtro = this.pesquisar.valueChanges.pipe(
      startWith(''),
      map(value => this._filtro(value))
    )
  }

  private _filtro(value: string): string[]{
    const filtroValue = value.toLowerCase(); //letras minusculas
    return this.cidades.filter(city => city.toLowerCase().includes(filtroValue));
  }
}
