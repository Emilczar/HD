import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontageIdComponent } from './montage-id.component';

describe('MontageIdComponent', () => {
  let component: MontageIdComponent;
  let fixture: ComponentFixture<MontageIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontageIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontageIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
