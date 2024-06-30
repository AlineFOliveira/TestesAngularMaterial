import { Component } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-scrooling-cdk',
  standalone: true,
  imports: [ScrollingModule],
  templateUrl: './scrooling-cdk.component.html',
  styleUrl: './scrooling-cdk.component.scss'
})
export class ScroolingCdkComponent {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}
