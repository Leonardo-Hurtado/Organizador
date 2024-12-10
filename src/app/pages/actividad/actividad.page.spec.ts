import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActividadPage } from './actividad.page';
import { HttpClientModule } from '@angular/common/http';  
import { ApiRestService } from 'src/app/services/api-rest.service';  // Asegúrate de importar el servicio correctamente

TestBed.configureTestingModule({
  imports: [HttpClientModule],
  declarations: [ActividadPage],
  providers: [ApiRestService]  // Añade este proveedor si es necesario
}).compileComponents();

describe('ActividadPage', () => {
  let component: ActividadPage;
  let fixture: ComponentFixture<ActividadPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],  
      declarations: [ActividadPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ActividadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
