import { CommonModule } from '@angular/common';
import { Component, ElementRef, signal, ViewChild } from '@angular/core';



@Component({
  selector: 'app-exp-component',
  imports: [CommonModule],
  templateUrl: './exp-component.html',
  styleUrl: './exp-component.css'  
})
export class ExpComponent {
  enterClass = signal('enter-animation');
  enterClass2 = signal('enter-animation');

 
  @ViewChild('miDiv', { static: true }) miDiv!: ElementRef;
  @ViewChild('miDiv2', { static: true }) miDiv2!: ElementRef;
  
  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('✅ El div está en el viewport');
            this.enterClass.set("enter-animation")

          } else {
            console.log('❌ El div salió del viewport');
            this.enterClass.set("leave-animation")

          }
        });
      },
      { threshold: 0.5 } // 10% visible para considerarlo "en viewport"
    );
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('✅ El div está en el viewport');
            this.enterClass2.set("enter-animation")

          } else {
            console.log('❌ El div salió del viewport');
            this.enterClass2.set("leave-animation")

          }
        });
      },
      { threshold: 0.5 } // 10% visible para considerarlo "en viewport"
    );

    observer.observe(this.miDiv.nativeElement);
    observer2.observe(this.miDiv2.nativeElement);
  }
}
