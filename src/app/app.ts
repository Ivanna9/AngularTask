import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortDataPipe } from './pipes/sort-data-pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, SortDataPipe],
  templateUrl: './app.html',
})
export class App {
  ageOfPerson = [{ age: 35 }, { age: 26 }, { age: 30 }];

  private cdr = inject(ChangeDetectorRef);
  constructor() {
    setTimeout(() => {
      this.ageOfPerson.push({ age: 10 });
      this.cdr.detectChanges();
    }, 2000);
  }
}
