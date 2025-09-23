import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-background-component',
  imports: [],
  templateUrl: './background-component.html',
  styleUrl: './background-component.scss'
})
export class BackgroundComponent implements OnInit, OnDestroy {
    bubbles: {
    id: number;
    size: number;
    left: number;
    duration: number;
    opacity: number;
    blur : number;

  }[] = [];

  private intervalId: any;
  private bubbleCounter = 0;

  ngOnInit(): void {
      this.intervalId = setInterval(() =>{if(this.bubbles.length < 20 ){
        this.addBubble()
      }} , 500);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  addBubble(): void {
    const bubble = {
      id: this.bubbleCounter++,
      size: Math.random() * 30 + 10,        // 10px - 40px
      left: Math.random() * 100,           // porcentaje
      duration: Math.random() * 10 + 10,    // 5s - 15s
      opacity: Math.random() * 0.3 + 0.05,  // 0.05 - 0.35
      blur: Math.random() * 3 + 10
    };
    console.log(this.bubbles.length)
    this.bubbles.push(bubble);

    // eliminar después de la animación
    setTimeout(() => {
      this.bubbles = this.bubbles.filter(b => b.id !== bubble.id);
    }, (bubble.duration ) * 1000);
  }
}
