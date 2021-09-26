import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerLayoutComponent } from './seeker-layout.component';

describe('SeekerLayoutComponent', () => {
  let component: SeekerLayoutComponent;
  let fixture: ComponentFixture<SeekerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
