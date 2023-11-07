import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { GrpcAuthService } from './services/grpc-auth.service';

const mockUserProfile = {
  id: 'some-id', // Mock value
  state: 'some-state', // Mock value
  userName: 'mockUserName', // Mock value
  loginNamesList: ['mockLoginName'], // Mock value
  preferredLoginName: 'mockPreferredLoginName', // Mock value
  human: {
    profile: {
      preferredLanguage: 'es', // The preferred language you want to test
    },
  },
  // Add other required fields here as per the AsObject structure
};

describe('AppComponent', () => {
  let translateService: jasmine.SpyObj<TranslateService>;
  let authService: jasmine.SpyObj<GrpcAuthService>;
  let component: AppComponent;

  beforeEach(waitForAsync(() => {
    const translateSpy = jasmine.createSpyObj('TranslateService', ['addLangs', 'setDefaultLang', 'use']);
    const authSpy = jasmine.createSpyObj('GrpcAuthService', [], {
      userSubject: new Subject(), // Or use a BehaviorSubject if needed
    });

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppModule],
      declarations: [AppComponent],
      providers: [
        AppComponent,
        { provide: TranslateService, useValue: translateSpy },
        { provide: GrpcAuthService, useValue: authSpy },
      ],
    }).compileComponents();

    component = TestBed.inject(AppComponent);
    translateService = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
    authService = TestBed.inject(GrpcAuthService) as jasmine.SpyObj<GrpcAuthService>;
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should set default languages and add supported languages on init', () => {
    const supportedLanguages = ['en', 'es', 'fr']; // Example values
    const fallbackLanguage = 'en';

    component.setLanguage();

    expect(translateService.addLangs).toHaveBeenCalledWith(supportedLanguages);
    expect(translateService.setDefaultLang).toHaveBeenCalledWith(fallbackLanguage);
  });

  it('should use user preferred language if it matches supported languages', () => {
    const userPreferredLanguage = 'es';
    const userprofile = { human: { profile: { preferredLanguage: userPreferredLanguage } } };
    authService.userSubject.next(mockUserProfile);

    component.setLanguage();

    expect(translateService.use).toHaveBeenCalledWith(userPreferredLanguage);
  });
});
