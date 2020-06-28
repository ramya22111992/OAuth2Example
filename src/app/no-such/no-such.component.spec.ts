import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSuchComponent } from './no-such.component';

describe('NoSuchComponent', () => {
  let component: NoSuchComponent;
  let fixture: ComponentFixture<NoSuchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSuchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
