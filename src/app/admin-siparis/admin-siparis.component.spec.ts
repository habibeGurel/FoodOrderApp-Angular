import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiparisComponent } from './admin-siparis.component';

describe('AdminSiparisComponent', () => {
  let component: AdminSiparisComponent;
  let fixture: ComponentFixture<AdminSiparisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSiparisComponent]
    });
    fixture = TestBed.createComponent(AdminSiparisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
