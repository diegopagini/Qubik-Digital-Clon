import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WathWeDoComponent } from './wath-we-do.component';

describe('WathWeDoComponent', () => {
  let component: WathWeDoComponent;
  let fixture: ComponentFixture<WathWeDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WathWeDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WathWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
