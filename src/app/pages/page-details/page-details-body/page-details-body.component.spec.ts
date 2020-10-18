import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailsBodyComponent } from './page-details-body.component';

describe('PageDetailsBodyComponent', () => {
  let component: PageDetailsBodyComponent;
  let fixture: ComponentFixture<PageDetailsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDetailsBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
