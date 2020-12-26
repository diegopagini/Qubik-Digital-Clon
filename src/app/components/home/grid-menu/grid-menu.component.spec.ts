import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMenuComponent } from './grid-menu.component';

describe('GridMenuComponent', () => {
  let component: GridMenuComponent;
  let fixture: ComponentFixture<GridMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
