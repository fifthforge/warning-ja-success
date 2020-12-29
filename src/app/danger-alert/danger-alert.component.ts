import { Component, OnInit } from '@angular/core';
import { faBiohazard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-danger-alert',
  templateUrl: './danger-alert.component.html',
  styleUrls: ['./danger-alert.component.css']
})
export class DangerAlertComponent implements OnInit {
  faBiohazard = faBiohazard;
  constructor() { }

  ngOnInit(): void {
  }

}
