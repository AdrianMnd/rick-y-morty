import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasComponent } from './tarjetas.component';

describe('TarjetasComponent', () => {
  let component: TarjetasComponent;
  let fixture: ComponentFixture<TarjetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetasComponent]
    });
    fixture = TestBed.createComponent(TarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have image', () => {
    expect(component.lista['image']).toBeDefined();
  });

  it('should have name', () => {
    expect(component.lista['name']).toBeDefined();
  });

  it('should have status', () => {
    expect(component.lista['status']).toBeDefined();
  });

  it('should have origin', () => {
    expect(component.lista['origin']).toBeDefined();
  });

  it('should have gender', () => {
    expect(component.lista['gender']).toBeDefined();
  });

  it('should have species', () => {
    expect(component.lista['species']).toBeDefined();
  });

  it('should have episodes', () => {
    expect(component.lista['episodes']).toBeDefined();
  });
});
