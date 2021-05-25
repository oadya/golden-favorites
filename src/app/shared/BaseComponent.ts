import { Injector } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { NgWizardService } from "../demande-financement/stepper-components/ng-wizard.service";
import { AuthenticationService } from "../services/authentication/authentication.service";
import { LocalStorageService } from "../services/authentication/local-storage.service";
import { MessageService } from "../services/message.service";
import { ToasteurService } from "../services/toasteur.service";

export abstract class RootComponent{

  protected spinner: NgxSpinnerService;
  protected toastr: ToasteurService;
  protected localStorageService: LocalStorageService;
  protected authenticationService: AuthenticationService;

  constructor(injector: Injector)
  {
    this.spinner = injector.get(NgxSpinnerService);
    this.toastr = injector.get(ToasteurService);
    this.localStorageService = injector.get(LocalStorageService);
    this.authenticationService = injector.get(AuthenticationService);
    
    let lastUseDate = this.localStorageService.getLastUseDate();
    
    if (lastUseDate == null)
    {
      this.authenticationService.logout();
    }
    else 
    {
      let date = new Date(new Date().getTime() - 20* 60 * 1000);


      if (date > lastUseDate)
      {
        this.localStorageService.clearLastUserData();
        this.authenticationService.logout();
      }
      else
      {
        this.localStorageService.setLastUserData();
      }
    }
  }
  public labels = {
    previousLabel: 'Précédent',
    nextLabel: 'Suivant',
  };
}

export abstract class BaseComponent extends RootComponent {
    protected messageService: MessageService;
    protected route: ActivatedRoute;
    protected ngWizardService: NgWizardService;

    constructor(injector: Injector)
    {
        super(injector);
        this.messageService = injector.get(MessageService);
        this.route = injector.get(ActivatedRoute);
        this.ngWizardService = injector.get(NgWizardService);

        this.route.data.subscribe((data) => {
            //console.log('data.navItem', data.navItem);
            this.messageService.setNavItemValue(data.navItem);
          });
    }

    
  fetchSelectionStagiaire() {
    this.ngWizardService.updateLoadChildRoutes();
    this.ngWizardService.setCurrentstepData();
  }
}