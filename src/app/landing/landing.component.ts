import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  getScreenWidth: any;
  getScreenHeight: any;

  constructor(){}

  ngOnInit(){
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

}
