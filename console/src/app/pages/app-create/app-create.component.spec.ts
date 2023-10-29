import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppCreateComponent } from './app-create.component';

describe('OrgCreateComponent', () => {
  let component: AppCreateComponent;
  let fixture: ComponentFixture<AppCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppCreateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
