import { Component, OnInit } from '@angular/core';
import { CommodityService } from '../commodity.service';

@Component({
  selector: 'app-commodity-listing',
  templateUrl: './commodity-listing.component.html',
  styleUrls: ['./commodity-listing.component.css']
})
export class CommodityListingComponent implements OnInit {

  constructor(private repo: CommodityService) { }

  commodityList: any;

  ngOnInit(): void {
    this.repo.getCommodity().subscribe(
      (response) => {this.commodityList = response;}
    )
  }

}
