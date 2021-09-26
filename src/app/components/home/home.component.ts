import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target1 = document.querySelector('.tw')
    const target2 = document.querySelector('.tw2');
    const writer1 = new Typewriter(target1, {
      typeSpeed: 60 
    })
    
    const writer2 = new Typewriter(target2, { 
      typeSpeed: 60 
    })
    
    writer1
      .type('Task Tracker Application to')
      .removeCursor()
      .then(writer2.start.bind(writer2))
      .start()
    
    writer2
      .type("create daily tasks")
      .rest(500)
      .clear()
      .changeTypeColor('lightblue')
      .type("to set task reminders")
      .rest(500)
      .clear()
      .changeTypeColor('lightgray')
      .type("delete tasks")
      .rest(500)
      .clear()
      .changeTypeColor('black')
      .then(writer1.start.bind(writer1))
      .type("to update tasks")
      .rest(500)
      .clear()
      .changeTypeColor('white')
}
}