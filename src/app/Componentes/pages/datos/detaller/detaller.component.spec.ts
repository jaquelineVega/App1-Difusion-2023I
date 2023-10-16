import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallerComponent } from './detaller.component';

describe('DetallerComponent', () => {
  let component: DetallerComponent;
  let fixture: ComponentFixture<DetallerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallerComponent]
    });
    fixture = TestBed.createComponent(DetallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
