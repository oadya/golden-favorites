import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasteurService {

  constructor(private toastr: ToastrService) { }


  public showSuccessWithMessage(mess: string) {
    this.toastr.success(mess, '');
  }

  public showErrorWithMessage(mess: string) {
    this.toastr.error(mess, 'Enregistrement impossible',);
  }
  public showErrorWithMessageAndTitle(mess: string, title: string) {
    this.toastr.error(mess, title);
  }

  public showError() {
    this.toastr.error('Une erreur a été rencontrée', 'Enregistrement impossible');
  }
}
