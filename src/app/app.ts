import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child } from './components/child/child';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Child],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  color: string = 'blue';
  currentName: string = 'John Doe';

  changeColor(newColor: string): void {
    this.color = newColor;
  }

  checkCurrentValue(): void {
    const target = document.getElementById('colorInput') as HTMLInputElement;
    console.log('e', target.value);
  }

  setNewName(newName: string): void {
    this.currentName = newName;
    this.color = 'green';
  }
}
