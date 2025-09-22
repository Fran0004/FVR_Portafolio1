import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact-component/contact-component';
import { ExpComponent } from './exp-component/exp-component';
import { NameComponent } from "./name-component/name-component";
import { BackgroundComponent } from "./background-component/background-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactComponent, ExpComponent, NameComponent, BackgroundComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FVR_Portafolio');
  
}
