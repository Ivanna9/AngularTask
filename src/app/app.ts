import { Component, signal, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child } from './components/child/child';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Child],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  currentName = signal<string>('John Doe');
  resetName(): void {
    this.currentName.set('John Doe');
  }
}
