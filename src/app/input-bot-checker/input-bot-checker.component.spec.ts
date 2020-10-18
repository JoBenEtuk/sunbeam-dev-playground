import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBotCheckerComponent } from './input-bot-checker.component';

describe('InputBotCheckerComponent', () => {
  let component: InputBotCheckerComponent;
  let fixture: ComponentFixture<InputBotCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBotCheckerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBotCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
