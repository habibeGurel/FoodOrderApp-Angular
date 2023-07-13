import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KampanyaComponent } from './kampanya.component';

describe('KampanyaComponent', () => {
  let component: KampanyaComponent;
  let fixture: ComponentFixture<KampanyaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KampanyaComponent]
    });
    fixture = TestBed.createComponent(KampanyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
