import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginPolicyComponent } from './login-policy.component';
import { AppModule } from '../../../app.module';
import { LoginPolicyModule } from './login-policy.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginPolicyComponent', () => {
  let component: LoginPolicyComponent;
  let fixture: ComponentFixture<LoginPolicyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPolicyComponent],
      imports: [HttpClientTestingModule, AppModule, LoginPolicyModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
