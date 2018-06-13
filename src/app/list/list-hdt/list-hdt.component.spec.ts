import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHdtComponent } from './list-hdt.component';

describe('ListHdtComponent', () => {
  let component: ListHdtComponent;
  let fixture: ComponentFixture<ListHdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
