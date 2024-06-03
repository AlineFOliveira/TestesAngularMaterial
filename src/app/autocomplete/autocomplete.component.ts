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

  filtro!: Observable<string[]>//emitirá arrays de string

  ngOnInit(){
    //pipes permitem transformar, filtrar e combinar os valores emitidos pelo observable
    this.filtro = this.pesquisar.valueChanges.pipe(//se o valor do campo de pesquisa muda
      startWith(''), //emite um valor inicial antes de emitir valores de mudança
      map(value => this._filtro(value))//'mapeia'/pega cada valor emitido e passa para a função _filtro
    )
  }

  private _filtro(value: string): string[]{
    const filtroValue = value.toLowerCase(); //letras minusculas
    //value tepresenta o texto digitado pelo usuário
    return this.cidades.filter(city => city.toLowerCase().includes(filtroValue));
    //o filter cria um novo array...?
    //city é cada elemento no array das cidades
    //verifica se filtroValue está no nome da cidade do array.
    // o includes retorna true se o que for passado for encontrado na string
  }
}
