import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoViewDetailsComponent } from './repo-view-details.component';

describe('RepoViewDetailsComponent', () => {
  let component: RepoViewDetailsComponent;
  let fixture: ComponentFixture<RepoViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
