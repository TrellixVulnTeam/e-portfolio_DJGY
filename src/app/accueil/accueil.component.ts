import { Component, HostListener, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { LISTIMAGES } from '../mockimage';

declare let Typewriter: any;
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  title = "Accueil";
  images= LISTIMAGES;
  showNavigationArrows = true;
  showNavigationIndicators = false;

  ngOnInit():void {
    const p = document.querySelector('p');
    new Typewriter(p, {
      //deleteSpeed : 20
    })
    .changeDelay(100)
    .typeString("Etudiant en 3ème année d'ingénieur Fintech à l'ESILV")
    .pauseFor(500)
    .deleteAll(30)
    .pauseFor(500)
    .typeString('Futur Développeur FullStack')
    .start();
  }
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  

}