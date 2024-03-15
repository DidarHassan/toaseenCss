import { Component, HostListener, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common'
import { Route , RouterLink , RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  mobileMenu: boolean = true
  isShrink: boolean = false
  


  constructor() {}

  ngOnInit(): void {}


  @HostListener('window:scroll', ['$event']) onScroll(){
    if(window.pageYOffset > 50){
      this.isShrink = true
    }else{
      this.isShrink = false
    }
  }



  openDialog() {
   
  }
  openMenu(){
    this.mobileMenu =! this.mobileMenu ;
  }

}

