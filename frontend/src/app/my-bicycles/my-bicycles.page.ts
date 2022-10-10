import { Component, OnInit } from '@angular/core';
import { BicycleService } from '../services/bicycle.service';
@Component({
  selector: 'app-my-bicycles',
  templateUrl: './my-bicycles.page.html',
  styleUrls: ['./my-bicycles.page.scss'],
})
export class MyBicyclesPage implements OnInit {
  bicycles: any = [];

  constructor(private bicycleService: BicycleService) { }

  ngOnInit() {
    this.getAllBicycles();
  }
    getAllBicycles(){
      this.bicycleService.getBicycles().subscribe(response =>{
        this.bicycles = response;
      });
    }

}
