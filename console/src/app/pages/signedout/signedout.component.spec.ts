import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SignedoutComponent } from './signedout.component';
import { AppModule } from '../../app.module';
import SignedoutModule from './signedout.module';
import { SignedoutRoutingModule } from './signedout-routing.module';

describe('SignedoutComponent', () => {
  let component: SignedoutComponent;
  let fixture: ComponentFixture<SignedoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SignedoutComponent],
      imports: [AppModule, SignedoutModule, SignedoutRoutingModule],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
