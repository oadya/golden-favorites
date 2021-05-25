import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NumberDirective } from './directives/number.directive';
import { TitleCaseDirective } from './directives/title-case-directive';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SuppressionDialogComponent } from './components/suppression-dialog/suppression-dialog.component';
import { GroupByPipe } from './pipes/group-by.pipe';
//import { SortByPipe } from './pipes/sort-by.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyNumberPipe } from './pipes/my-number.pipe';
import { MyNumberFormatterDirective } from './directives/my-number-formatter.directive';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BackButtonDirective } from './directives/back-button.directive';
import { MatRadioModule } from '@angular/material/radio';
import { CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";
import { NgAutonumericModule } from '@angularfy/ng-autonumeric';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { DatePipe } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxScrollToFirstInvalidModule } from '@ismaestro/ngx-scroll-to-first-invalid';
import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive';
import { CalendarFormatDirective } from './directives/calendar-format.directive';
import { MatBadgeModule } from '@angular/material/badge';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { OrderByPipe } from './sort/sort';
import { FlexLayoutModule } from '@angular/flex-layout';

export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "",
  suffix: "",
  thousands: " ",
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

const maskConfig: Partial<IConfig> = {
  validation: false,
};

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.arrows
};

const materialModules = [
  CdkTreeModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatTreeModule,
  OverlayModule,
  PortalModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatStepperModule,
  NgxMaterialTimepickerModule,
  MatBadgeModule,
  FlexLayoutModule

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    NgxPaginationModule,
    ...materialModules,
    NgxSpinnerModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    NgAutonumericModule,
    NgxMaskModule.forRoot(maskConfig),
    NgxDocViewerModule,
    NgxScrollToFirstInvalidModule,
    NgWizardModule.forRoot(ngWizardConfig),
    UiSwitchModule.forRoot({
      size: 'small',
      color: 'green',
      switchColor: 'white',
      defaultBgColor: '#9d9b9a',
      defaultBoColor: 'none',
      checkedLabel: 'on',
      uncheckedLabel: 'off'
    }),
    NgxUpperCaseDirectiveModule,

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    NgxPaginationModule,
    ...materialModules,
    NumberDirective,
    TitleCaseDirective,
    GroupByPipe,
    OrderByPipe,
    MyNumberPipe,
    MyNumberFormatterDirective,
    NgxSpinnerModule,
    BackButtonDirective,
    NgxCurrencyModule,
    NgAutonumericModule,
    NgxMaskModule,
    NgxDocViewerModule,
    NgxScrollToFirstInvalidModule,
    NgWizardModule,
    UiSwitchModule,
    NgxUpperCaseDirectiveModule,
    CalendarFormatDirective,
    PhoneMaskDirective

  ],
  entryComponents: [SuppressionDialogComponent, ConfirmationDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [NumberDirective, TitleCaseDirective, SuppressionDialogComponent, GroupByPipe,
    OrderByPipe,
    MyNumberPipe, MyNumberFormatterDirective, PhoneMaskDirective, BackButtonDirective, ConfirmationDialogComponent, CalendarFormatDirective]
  ,
  providers: [
    // { provide: LOCALE_ID, useValue: 'fr-FR' }
    DecimalPipe,
    MyNumberPipe,
    DatePipe
  ],
})
export class SharedModule { }
