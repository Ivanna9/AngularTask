import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SortDataPipe } from './pipes/sort-data-pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
})
export class App {
  color: string = 'black';
  color1 = 'red';

  changeColor(newColor: string) {
    this.color = newColor;
  }
  changeColor1(newColor1: string) {
    this.color1 = newColor1;
  }

  checkCurrentValue(event: Event) {
    const target = event.target as HTMLInputElement;
    // console.log('e', event);
    console.log(target.value);
  }
}
