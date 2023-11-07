import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { AppModule } from '../../app.module';
import { Router } from '@angular/router';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [AppModule],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if the URL starts with "/users"', () => {
    // Set a test URL
    router.navigate(['/users']);

    // Call the isUserLinkActive function
    const result = component.isUserLinkActive;

    // Expect the result to be true
    expect(result).toBe(false);
  });

  it('should return false if the URL does not start with "/users"', () => {
    router.navigate(['/dashboard']);
    const result = component.isUserLinkActive;

    expect(result).toBe(false);
  });
});
