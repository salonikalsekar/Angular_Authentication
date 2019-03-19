import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  specialEvents = []

  constructor(private _eventService: EventsService,
              private _router: Router) { }


  ngOnInit() {
    this._eventService.getSpecialEvents()
      .subscribe(
        res => this.specialEvents = res,
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              // this._router.navigate(['/login'])
              window.location.href = 'https://google.com';
            }
          }
        }
      )
}
}
