import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinUsUlComponent } from './fin-us-ul.component';

describe('FinUsUlComponent', () => {
  let component: FinUsUlComponent;
  let fixture: ComponentFixture<FinUsUlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinUsUlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinUsUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
