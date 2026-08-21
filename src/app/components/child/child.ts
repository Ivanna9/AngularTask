import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  childColor = input.required<string>();
  staticProp = input<string>('by default');
}
