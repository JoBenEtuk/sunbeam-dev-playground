import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailsHeadComponent } from './page-details-head.component';

describe('PageDetailsHeadComponent', () => {
  let component: PageDetailsHeadComponent;
  let fixture: ComponentFixture<PageDetailsHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDetailsHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailsHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
