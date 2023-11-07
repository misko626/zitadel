import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLayoutComponent } from './create-layout.component';
import { AppModule } from '../../app.module';

describe('CreateLayoutComponent', () => {
  let component: CreateLayoutComponent;
  let fixture: ComponentFixture<CreateLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateLayoutComponent],
      imports: [AppModule],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
