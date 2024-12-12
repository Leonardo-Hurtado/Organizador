import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { ApiRestService } from './services/api-rest.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [ApiRestService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    
    component.nombre = 'Juan';
    component.apellido = 'Pérez';
    component.email = 'juan.perez@example.com';
    component.appPages = [
      { title: 'Index', url: '/index', icon: 'home' },
      { title: 'Usuario', url: '/usuario', icon: 'person' }
    ];

    fixture.detectChanges(); 
  });

  it('should have menu labels', () => {
    const compiled = fixture.nativeElement;

    const navElement = compiled.querySelector('ion-list');
    expect(navElement).not.toBeNull();

    
    expect(navElement.textContent).toContain('Index');
    expect(navElement.textContent).toContain('Usuario');
  });
});