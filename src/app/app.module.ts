import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { ToastrModule } from 'ngx-toastr';
import localeFr from '@angular/common/locales/fr';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularComponent } from './components/angular/angular.component';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { FavotitesLinksComponent } from './components/favotites-links/favotites-links.component';
import { WebPagesComponent } from './components/web-pages/web-pages.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RibSepaComponent } from './components/angular/rib-sepa/rib-sepa.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { FeaturesComponent } from './components/features/features.component';
import { BusinessWebsiteComponent } from './components/web-pages/business-website/business-website.component';
import { EcommerceWebsiteComponent } from './components/web-pages/ecommerce-website/ecommerce-website.component';
import { HtmlSelectorComponent } from './components/web-pages/html-selector/html-selector.component';
import { FlexboxComponent } from './components/web-pages/flexbox/flexbox.component';
import { TemplateWebsiteOneComponent } from './components/web-pages/template-website-one/template-website-one.component';
import { DropDownMenuComponent } from './components/web-pages/drop-down-menu/drop-down-menu.component';
import { LoginRegistretionComponent } from './components/web-pages/login-registretion/login-registretion.component';
import { FitnessWebsiteComponent } from './components/web-pages/fitness-website/fitness-website.component';
import { JavaComponent } from './components/java/java.component';
import { BasesDonneesComponent } from './components/bases-donnees/bases-donnees.component';
import { JenkinsComponent } from './components/jenkins/jenkins.component';
import { MavenComponent } from './components/maven/maven.component';
import { DockerComponent } from './components/docker/docker.component';
import { NoSqlComponent } from './components/no-sql/no-sql.component';
import { GitComponent } from './components/git/git.component';
import { SpringComponent } from './spring/spring.component';
import { SpringBootComponent } from './spring/spring-boot/spring-boot.component';
import { SpringBatchComponent } from './spring/spring-batch/spring-batch.component';

registerLocaleData(localeFr);

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AngularComponent,
    JavascriptComponent,
    FavotitesLinksComponent,
    WebPagesComponent,
    ErrorPageComponent,
    ScrollToTopComponent,
    SideNavComponent,
    RibSepaComponent,
    MenuListItemComponent,
    FeaturesComponent,
    BusinessWebsiteComponent,
    EcommerceWebsiteComponent,
    HtmlSelectorComponent,
    FlexboxComponent,
    TemplateWebsiteOneComponent,
    DropDownMenuComponent,
    LoginRegistretionComponent,
    FitnessWebsiteComponent,
    SpringBootComponent,
    SpringBatchComponent,
    JavaComponent,
    BasesDonneesComponent,
    JenkinsComponent,
    MavenComponent,
    DockerComponent,
    NoSqlComponent,
    GitComponent,
    SpringComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 10000,
    }),
    MatNativeDateModule,
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  onstructor(library: FaIconLibrary) {
    // ajout des icons de style regular , solid et brand  de la librairie fortawesome
    library.addIconPacks(fas, far, fab);
  }
}
