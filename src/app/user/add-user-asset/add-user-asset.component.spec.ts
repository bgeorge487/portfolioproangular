import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserAssetComponent } from './add-user-asset.component';

describe('AddUserAssetComponent', () => {
  let component: AddUserAssetComponent;
  let fixture: ComponentFixture<AddUserAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
