import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit{
 loader : boolean = false;
  constructor(private router: Router){}

  ngOnInit(): void{
    this.loader = true
    setTimeout(() => {
      this.loader = false;
      this.router.navigate(['/home']);
    }, 3000);
  }
}