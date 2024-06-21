import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPublicComponent } from './web-public.component';

describe('WebPublicComponent', () => {
  let component: WebPublicComponent;
  let fixture: ComponentFixture<WebPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebPublicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
