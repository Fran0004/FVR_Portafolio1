import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact-component/contact-component';
import { ExpComponent } from './exp-component/exp-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ContactComponent,ExpComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FVR_Portafolio');
}
