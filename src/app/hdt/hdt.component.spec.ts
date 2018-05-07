import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdtComponent } from './hdt.component';

describe('HdtComponent', () => {
  let component: HdtComponent;
  let fixture: ComponentFixture<HdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
