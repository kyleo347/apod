import { Component, OnInit } from '@angular/core';
import { PodService } from "./pod.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private pod;
  private date = new Date();

  constructor(private podService: PodService) { }

  ngOnInit() {
    this.getPOD();
  }

  public getPOD(date: string = this._date()) {
    this.podService.getPod(date).subscribe(data => this.pod = data );
  }

  private _date() {
    let dd: string | number = this.date.getDate();
    let mm: string | number = this.date.getMonth() + 1; // January is 0!
    const yyyy = this.date.getFullYear();

    if ( dd < 10 ) {
        dd = '0' + dd;
    }

    if ( mm < 10 ) {
        mm = '0' + mm;
    }

    return yyyy + '-' + mm + '-' + dd;
  }
}
