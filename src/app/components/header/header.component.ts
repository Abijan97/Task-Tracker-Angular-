import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string='Task Tracker';


  //constructor runs when a object is initialized
  constructor() { }
  //ngoninit is a lifecycle method  -use when u initizalize some code 
  //when a component loads you would put it here 
  // ex-when use to make a http request
  ngOnInit(): void {


  }

  toggleAddTask(){
    console.log('toggle')
  }

}
