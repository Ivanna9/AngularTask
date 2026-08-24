import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  childColor = input.required<string>();
  staticProp = input<string>('by default');
  currentName = input<string>('John Doe');
  nameChange = output<string>();

  changeName() {
    this.nameChange.emit('The name has been changed from Child');
  }
}
