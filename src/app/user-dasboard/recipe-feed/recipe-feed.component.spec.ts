import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFeedComponent } from './recipe-feed.component';

describe('RecipeFeedComponent', () => {
  let component: RecipeFeedComponent;
  let fixture: ComponentFixture<RecipeFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
