import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrgCreateComponent } from './org-create.component';
import { AppModule } from '../../app.module';
import OrgCreateModule from './org-create.module';
import { OrgCreateRoutingModule } from './org-create-routing.module';

describe('OrgCreateComponent', () => {
  let component: OrgCreateComponent;
  let fixture: ComponentFixture<OrgCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OrgCreateComponent],
      imports: [AppModule, OrgCreateModule, OrgCreateRoutingModule],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
