import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';
import { RibSepaComponent } from './components/angular/rib-sepa/rib-sepa.component';
import { BasesDonneesComponent } from './components/bases-donnees/bases-donnees.component';
import { DockerComponent } from './components/docker/docker.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { GitComponent } from './components/git/git.component';
import { HomeComponent } from './components/home/home.component';
import { JavaComponent } from './components/java/java.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { JenkinsComponent } from './components/jenkins/jenkins.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MavenComponent } from './components/maven/maven.component';
import { NoSqlComponent } from './components/no-sql/no-sql.component';
import { SpringBatchComponent } from './components/spring-batch/spring-batch.component';
import { SpringBootComponent } from './components/spring-boot/spring-boot.component';
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
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: HomeComponent,
      },
      {
        path: 'java',
        component: JavaComponent,
      },
      {
        path: 'spring-boot',
        component: SpringBootComponent,
      },
      {
        path: 'spring-batch',
        component: SpringBatchComponent,
      },

      {
        path: 'jenkins',
        component: JenkinsComponent,
      },

      {
        path: 'maven',
        component: MavenComponent,
      },
      {
        path: 'docker',
        component: DockerComponent,
      },
      {
        path: 'nosql',
        component: NoSqlComponent,
      },
      {
        path: 'bases-donnees',
        component: BasesDonneesComponent,
      },
      {
        path: 'git',
        component: GitComponent,
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
        path: 'templates-html-css',
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
  { path: '**', redirectTo: '' },
  //{ path: '', redirectTo: 'golden-favorites', pathMatch: 'full' },
  //{ path: '**', component: ErrorPageComponent }, 
  // à placer à la fin


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
