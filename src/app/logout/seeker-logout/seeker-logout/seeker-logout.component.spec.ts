import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerLogoutComponent } from './seeker-logout.component';

describe('SeekerLogoutComponent', () => {
  let component: SeekerLogoutComponent;
  let fixture: ComponentFixture<SeekerLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
