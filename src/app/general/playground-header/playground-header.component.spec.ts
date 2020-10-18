import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundHeaderComponent } from './playground-header.component';

describe('PlaygroundHeaderComponent', () => {
  let component: PlaygroundHeaderComponent;
  let fixture: ComponentFixture<PlaygroundHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaygroundHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
