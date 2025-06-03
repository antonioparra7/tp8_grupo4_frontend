import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lectores } from './lectores';

describe('Lectores', () => {
  let component: Lectores;
  let fixture: ComponentFixture<Lectores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lectores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lectores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
