import { Component, input, output, model } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  name = model<string>('John Doe');

  updateName() {
    this.name.set('The name has been changed from Child');
  }
}
