import { Component, OnInit } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
//import { DataService } from '../../services/data.service';

@Component({
  selector: 'about-fire',
  templateUrl: './about.component.html',
  styleUrls: ['../../app.component.css']
})

export class AboutComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) {}
  // constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    // this.dataService.getApiData().subscribe(response => {
    //   this.data = response;
    // });
  }
}