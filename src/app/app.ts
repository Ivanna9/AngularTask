import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CutTextPipe } from './pipes/cut-text-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CutTextPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
