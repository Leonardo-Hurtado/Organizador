import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then(m => m.RegistrarPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'actividad',
    loadChildren: () => import('./pages/actividad/actividad.module').then(m => m.ActividadPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
