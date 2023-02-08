import { Component, OnInit } from '@angular/core';
import { ApiService } from './api-service.service';

@Component({
  selector: 'app-test-term',
  templateUrl: './test-term.component.html',
  styleUrls: ['./test-term.component.scss']
})
export class TestTermComponent implements OnInit {
  data: any;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

}
