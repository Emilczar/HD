import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontageListComponent } from './montage-list.component';

describe('MontageListComponent', () => {
  let component: MontageListComponent;
  let fixture: ComponentFixture<MontageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
