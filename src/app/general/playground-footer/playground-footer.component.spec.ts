import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundFooterComponent } from './playground-footer.component';

describe('PlaygroundFooterComponent', () => {
  let component: PlaygroundFooterComponent;
  let fixture: ComponentFixture<PlaygroundFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaygroundFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
