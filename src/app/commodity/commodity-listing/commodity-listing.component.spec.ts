import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityListingComponent } from './commodity-listing.component';

describe('CommodityListingComponent', () => {
  let component: CommodityListingComponent;
  let fixture: ComponentFixture<CommodityListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommodityListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
