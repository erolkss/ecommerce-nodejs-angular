import { Component } from '@angular/core';
import { homeCarouselData } from '../../../Data/mainCarousel';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss'
})
export class MainCarouselComponent {

  carouselData = homeCarouselData;
  currentSlide = 0;
  interval: any;

  ngOnInit() {
    this.carouselData;
    this.autoPlay();
  }
  
  autoPlay() {
    setTimeout(() => {
      this.nextSlide();
    }, 2000)
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1 ) % this.carouselData.length;
  }

}
