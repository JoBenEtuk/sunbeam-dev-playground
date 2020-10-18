import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArticleBodyComponent } from './new-article-body.component';

describe('NewArticleBodyComponent', () => {
  let component: NewArticleBodyComponent;
  let fixture: ComponentFixture<NewArticleBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArticleBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArticleBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
