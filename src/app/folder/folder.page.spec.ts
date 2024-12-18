import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FolderPage } from './folder.page';
import { CommonModule } from '@angular/common'; // Si es necesario para resolver dependencias comunes

describe('FolderPage', () => {
  let component: FolderPage;
  let fixture: ComponentFixture<FolderPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FolderPage],
      imports: [
        IonicModule.forRoot(),
        RouterModule.forRoot([
          { path: 'folder', component: FolderPage } 
        ]),
        CommonModule 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FolderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
