import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';
import { RibSepaComponent } from './components/angular/rib-sepa/rib-sepa.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BusinessWebsiteComponent } from './components/web-pages/business-website/business-website.component';
import { DropDownMenuComponent } from './components/web-pages/drop-down-menu/drop-down-menu.component';
import { EcommerceWebsiteComponent } from './components/web-pages/ecommerce-website/ecommerce-website.component';
import { FitnessWebsiteComponent } from './components/web-pages/fitness-website/fitness-website.component';
import { FlexboxComponent } from './components/web-pages/flexbox/flexbox.component';
import { HtmlSelectorComponent } from './components/web-pages/html-selector/html-selector.component';
import { LoginRegistretionComponent } from './components/web-pages/login-registretion/login-registretion.component';
import { TemplateWebsiteOneComponent } from './components/web-pages/template-website-one/template-website-one.component';
import { WebPagesComponent } from './components/web-pages/web-pages.component';

const routes: Routes = [
  {
    path: 'golden-favorites',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: HomeComponent,
      },
      {
        path: 'angular',
        component: AngularComponent,
        children: [
          {
            path: 'rib-sepa',
            component: RibSepaComponent,
          },
        ]
      },
      {
        path: 'javacript',
        component: JavascriptComponent,
        children: [
          {
            path: 'angular',
            component: AngularComponent,

          },
        ]

      },
      {
        path: 'pages-web',
        component: WebPagesComponent,
        children: [
          {
            path: 'business-website',
            component: BusinessWebsiteComponent,

          },
          {
            path: 'ecommerce-website',
            component: EcommerceWebsiteComponent,
          },
          {
            path: 'drop-down-menu',
            component: DropDownMenuComponent,
          },
          {
            path: 'fitness-website',
            component: FitnessWebsiteComponent,
          },
          {
            path: 'login-registration',
            component: LoginRegistretionComponent,
          },
          {
            path: 'template-website-one',
            component: TemplateWebsiteOneComponent,
          },
          {
            path: 'flex-box',
            component: FlexboxComponent,

          },
          {
            path: 'selecteurs-css',
            component: HtmlSelectorComponent,

          },
        ]
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component: ErrorPageComponent },

    ],
  },
  { path: '**', redirectTo: 'golden-favorites' },
  //{ path: '', redirectTo: 'golden-favorites', pathMatch: 'full' },
  //{ path: '**', component: ErrorPageComponent }, 
  // à placer à la fin


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
