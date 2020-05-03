import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitAuthComponent } from './git-auth.component';

describe('GitAuthComponent', () => {
  let component: GitAuthComponent;
  let fixture: ComponentFixture<GitAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
