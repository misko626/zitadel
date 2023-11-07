import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionKeysComponent, ActionKeysType } from './action-keys.component';

describe('ActionKeysComponent', () => {
  let component: ActionKeysComponent;
  let fixture: ComponentFixture<ActionKeysComponent>;
  let mockActiveElement: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionKeysComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockActiveElement = document.createElement('div');
    spyOn(mockActiveElement, 'blur');
    spyOn(window, 'focus');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Utility function to create a keyboard event
  function createKeyboardEvent(
    key: string,
    code: string,
    ctrlKey: boolean = false,
    metaKey: boolean = false,
    tagName: string = 'DIV',
  ): KeyboardEvent {
    const event = new KeyboardEvent('keydown', { key, code, ctrlKey, metaKey });
    Object.defineProperty(event, 'target', {
      value: { tagName },
      writable: true,
    });
    return event;
  }

  it('should emit actionTriggered for ADD type with KeyN', () => {
    spyOn(component.actionTriggered, 'emit');
    component.type = ActionKeysType.ADD;

    const event = createKeyboardEvent('N', 'KeyN', false, false, 'DIV');
    document.dispatchEvent(event);
    fixture.detectChanges();

    expect(component.actionTriggered.emit).toHaveBeenCalled();
  });

  // for ORGSWITCHER
  it('should emit actionTriggered for ORGSWITCHER type with / key', () => {
    spyOn(component.actionTriggered, 'emit');
    component.type = ActionKeysType.ORGSWITCHER;

    const event = createKeyboardEvent('/', '/');
    document.dispatchEvent(event);
    fixture.detectChanges();

    expect(component.actionTriggered.emit).toHaveBeenCalled();
  });

  // Edge case: Event target is input or textarea
  it('should not emit actionTriggered if target is input or textarea', () => {
    spyOn(component.actionTriggered, 'emit');
    component.type = ActionKeysType.ADD;

    const inputEvent = createKeyboardEvent('N', 'KeyN');
    Object.defineProperty(inputEvent, 'target', { value: { tagName: 'INPUT' } });
    document.dispatchEvent(inputEvent);
    fixture.detectChanges();

    expect(component.actionTriggered.emit).not.toHaveBeenCalled();
  });

  // Test for DELETE type with Ctrl+Backspace or Meta+Backspace
  it('should emit actionTriggered for DELETE type with Ctrl+Backspace', () => {
    spyOn(component.actionTriggered, 'emit');
    component.type = ActionKeysType.DELETE;

    const event = createKeyboardEvent('Backspace', 'Backspace', true);
    document.dispatchEvent(event);
    fixture.detectChanges();

    expect(component.actionTriggered.emit).toHaveBeenCalled();
  });

  // Test for DEACTIVATE type with Ctrl+ArrowDown or Meta+ArrowDown
  it('should emit actionTriggered for DEACTIVATE type with Ctrl+ArrowDown', () => {
    spyOn(component.actionTriggered, 'emit');
    component.type = ActionKeysType.DEACTIVATE;

    const event = createKeyboardEvent('ArrowDown', 'ArrowDown', true);
    document.dispatchEvent(event);
    fixture.detectChanges();

    expect(component.actionTriggered.emit).toHaveBeenCalled();
  });

  // Test for REACTIVATE type with Ctrl+ArrowUp or Meta+ArrowUp
  it('should emit actionTriggered for REACTIVATE type with Ctrl+ArrowUp', () => {
    spyOn(component.actionTriggered, 'emit');
    component.type = ActionKeysType.REACTIVATE;

    const event = createKeyboardEvent('ArrowUp', 'ArrowUp', true);
    document.dispatchEvent(event);
    fixture.detectChanges();

    expect(component.actionTriggered.emit).toHaveBeenCalled();
  });

  // Test for FILTER type with KeyF without Ctrl
  it('should emit actionTriggered for FILTER type with KeyF', () => {
    spyOn(component.actionTriggered, 'emit');
    component.type = ActionKeysType.FILTER;

    const event = createKeyboardEvent('F', 'KeyF');
    document.dispatchEvent(event);
    fixture.detectChanges();

    expect(component.actionTriggered.emit).toHaveBeenCalled();
  });

  // Test for CLEAR type with Escape
  it('should emit actionTriggered for CLEAR type with Escape', () => {
    spyOn(component.actionTriggered, 'emit');
    component.type = ActionKeysType.CLEAR;

    const event = createKeyboardEvent('Escape', 'Escape');
    document.dispatchEvent(event);
    fixture.detectChanges();

    expect(component.actionTriggered.emit).toHaveBeenCalled();
  });

  it('should call window.focus and blur the active element on view init', () => {
    spyOnProperty(document, 'activeElement', 'get').and.returnValue(mockActiveElement);

    component.ngAfterViewInit();

    expect(window.focus).toHaveBeenCalled();
    expect(mockActiveElement.blur).toHaveBeenCalled();
  });

  it('should call window.focus and not try to blur if no active element', () => {
    spyOnProperty(document, 'activeElement', 'get').and.returnValue(null);

    component.ngAfterViewInit();

    expect(window.focus).toHaveBeenCalled();
    // Ensure blur is not called since there's no active element
    expect(mockActiveElement.blur).not.toHaveBeenCalled();
  });
});
