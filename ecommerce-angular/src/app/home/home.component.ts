import { Component } from '@angular/core';
import { menJeans } from '../../Data/Men/men_jeans';
import { gounsPage1 } from '../../Data/Gouns/gouns';
import { lehngacholiPage2 } from '../../Data/Saree/lenghaCholiPage2';
import { mensShoesPage1 } from '../../Data/shoes';
import { mens_kurta } from '../../Data/Men/men_kurta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  menJeans:any;
  womenGouns:any;
  lenghCholi:any;
  mensKurta:any;
  mensShoes:any;

  ngOnInit(){
    this.menJeans = menJeans.slice(0,5);
    this.womenGouns = gounsPage1.slice(0,5);
    this.lenghCholi = lehngacholiPage2.slice(0,5);
    this.mensKurta = mens_kurta.slice(0,5);
    this.mensShoes = mensShoesPage1.slice(0,5);
  }

}
