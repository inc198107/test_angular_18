import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboLineComponent } from './combo-line.component';

describe('ComboLineComponent', () => {
  let component: ComboLineComponent;
  let fixture: ComponentFixture<ComboLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
