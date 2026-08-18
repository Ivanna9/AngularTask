import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'angularTask';
  person = {
    name: 'John Doe',
    age: 30,
  };

  tooltip = 'This is a tooltip';

  inlineStyle = {
    background: 'blue',
    width: '50%',
  };

  cssClass = 'blue';
}
