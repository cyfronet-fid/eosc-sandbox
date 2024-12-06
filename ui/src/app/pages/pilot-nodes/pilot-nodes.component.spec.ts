import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotNodesComponent } from './pilot-nodes.component';

describe('PilotNodesComponent', () => {
  let component: PilotNodesComponent;
  let fixture: ComponentFixture<PilotNodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilotNodesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PilotNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
