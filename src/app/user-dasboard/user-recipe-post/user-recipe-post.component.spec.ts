import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecipePostComponent } from './user-recipe-post.component';

describe('UserRecipePostComponent', () => {
  let component: UserRecipePostComponent;
  let fixture: ComponentFixture<UserRecipePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecipePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRecipePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
