import { Component } from '@angular/core';
import {CdkListboxModule, CdkOption} from '@angular/cdk/listbox';
import { CdkListbox } from '@angular/cdk/listbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multi-select-listbox',
  standalone: true,
  imports: [CdkListboxModule, CdkListbox, CdkOption, CommonModule],
  templateUrl: './multi-select-listbox.component.html',
  styleUrl: './multi-select-listbox.component.scss'
})
export class MultiSelectListboxComponent {
  cuisines = ['Chinese', 'French', 'Italian', 'Japanese'];

}
