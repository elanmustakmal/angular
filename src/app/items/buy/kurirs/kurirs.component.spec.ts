import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KurirsComponent } from './kurirs.component';

describe('KurirsComponent', () => {
  let component: KurirsComponent;
  let fixture: ComponentFixture<KurirsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurirsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KurirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
