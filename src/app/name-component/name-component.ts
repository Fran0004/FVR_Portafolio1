import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-name-component',
  imports: [],
  templateUrl: './name-component.html',
  styleUrl: './name-component.css',
})

export class NameComponent implements AfterViewInit {
  
  scrollProgress = 0;
 ngAfterViewInit() : void{
  gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
	// yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: '.nameDiv',
      pin: true, // pin the trigger element while active
      start: 'top top', // when the top of the trigger hits the top of the viewport
      end: '+=800', // end after scrolling 500px beyond the start
      scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      snap: {
        snapTo: 'labels', // snap to the closest label in the timeline
        duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
        }
      }
      
    });
    tl.addLabel('start')
    .to('.nameDiv', { scale: 5,opacity:0})
    .addLabel('end')
    .set('.nameDiv', {display:0,scale:1,duration:0});
  }
}
