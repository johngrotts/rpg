import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatBlockDetailComponent } from './stat-block-detail.component';

describe('StatBlockDetailComponent', () => {
  let component: StatBlockDetailComponent;
  let fixture: ComponentFixture<StatBlockDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatBlockDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatBlockDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
