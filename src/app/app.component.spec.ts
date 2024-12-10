import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Agrega esta importación
import { AppComponent } from './app.component';
import { ApiRestService } from './services/api-rest.service';  // Asegúrate de importar tu servicio si es necesario

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([
          { path: 'index', loadChildren: () => import('./pages/index/index.module').then(m => m.IndexPageModule) },
          { path: 'usuario', loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioPageModule) },
          { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
          // Aquí puedes agregar más rutas de las que uses
        ]),
        HttpClientTestingModule  // Aquí agregas el módulo de pruebas para HttpClient
      ],
      providers: [
        ApiRestService  // Asegúrate de incluir cualquier servicio que dependa de HttpClient
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have menu labels', () => {
    fixture.detectChanges();
    const menuItems = fixture.nativeElement.querySelectorAll('ion-label');

    // Asegúrate de que la cantidad de elementos y su contenido es correcto
    expect(menuItems.length).toEqual(4);  // Ajusta este valor según el número de elementos en tu menú
    expect(menuItems[0].textContent.trim()).toContain('Index');
    expect(menuItems[1].textContent.trim()).toContain('Usuario');
  });
});
