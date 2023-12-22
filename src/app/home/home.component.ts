import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
backgroundimg:string = '/assets/heroImage.png'

constructor(private router:Router){}

onLoadProduct(){
  this.router.navigate(['/products'])
}
}
