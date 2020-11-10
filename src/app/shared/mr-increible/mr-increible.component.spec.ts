import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrIncreibleComponent } from './mr-increible.component';

describe('MrIncreibleComponent', () => {
  let component: MrIncreibleComponent;
  let fixture: ComponentFixture<MrIncreibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrIncreibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrIncreibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
