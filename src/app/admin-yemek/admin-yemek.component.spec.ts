import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminYemekComponent } from './admin-yemek.component';

describe('AdminYemekComponent', () => {
  let component: AdminYemekComponent;
  let fixture: ComponentFixture<AdminYemekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminYemekComponent]
    });
    fixture = TestBed.createComponent(AdminYemekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
