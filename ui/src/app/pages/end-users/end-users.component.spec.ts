import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUsersComponent } from './end-users.component';

describe('EndUsersComponent', () => {
  let component: EndUsersComponent;
  let fixture: ComponentFixture<EndUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
