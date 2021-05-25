import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToasteurService } from 'src/app/services/toasteur.service';
import { SuppressionDialogComponent } from 'src/app/shared/components/suppression-dialog/suppression-dialog.component';
import { Validator } from 'src/app/shared/validator/validator';



@Component({
  selector: 'app-rib-sepa',
  templateUrl: './rib-sepa.component.html',
  styleUrls: ['./rib-sepa.component.scss']
})
export class RibSepaComponent implements OnInit {

  public ribForm: FormGroup;

  acceptedExtensions = "pdf, jpg, png,";
  file: File = null;
  isFileEmpty: boolean;

  isFileSelected: boolean;
  selectedAppearance: string;

  constructor(
    private toastr: ToasteurService,
    private dialog: MatDialog,
    private router: Router) {

    this.isFileEmpty = true;
    this.selectedAppearance = "fill";
  }

  ngOnInit(): void {

    this.ribForm = new FormGroup({
      nomBanque: new FormControl(null, [Validators.required]),
      titulaireCompte: new FormControl('', [Validators.required]),
      iban: new FormControl('', [Validators.required, Validators.maxLength(27)]),
      codeBanque: new FormControl('', [Validators.required, Validators.minLength(5)]),
      codeGuichet: new FormControl('', [Validators.required, Validators.minLength(5)]),
      numCompte: new FormControl('', [Validators.required, Validators.minLength(11)]),
      cle: new FormControl('', [Validators.required, Validators.minLength(2)]),
      codeBIC: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]),
      nameFilesToUpload: new FormControl('', [Validators.required]),
      filesToUpload: new FormControl('', [Validators.required, Validator.fileExtensionValidator(this.acceptedExtensions)]),
    })

    this.handleFormChanges();
  }


  handleFormChanges() {
    this.iban?.valueChanges.subscribe(value => {
      // suppression des espace
      let ibanSansEspace = value.replace(/\s/g, "");
      // Remplissage du RIB
      this.updateRIB(ibanSansEspace);
    });
  }

  updateRIB(iban: any) {
    this.ribForm.get('codeBanque')?.setValue(iban.substring(4, 9));
    this.ribForm.get('codeGuichet')?.setValue(iban.substring(9, 14));
    this.ribForm.get('numCompte')?.setValue(iban.substring(14, 25));
    this.ribForm.get('cle')?.setValue(iban.substring(25, 27));

    this.ribForm.get('codeBanque')?.updateValueAndValidity();
    this.ribForm.get('codeGuichet')?.updateValueAndValidity();
    this.ribForm.get('numCompte')?.updateValueAndValidity();
    this.ribForm.get('cle')?.updateValueAndValidity();
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ribForm.controls[controlName].hasError(errorName);
  }

  onSelectFile(event): void {

    this.isFileSelected = true;
    if (event.target.files.length > 0) {
      this.isFileEmpty = false;
      this.file = event.target.files[0];

      let fileName: string = this.file.name.split('.').shift();
      if (fileName && fileName.trim() !== '') {
        this.ribForm.get('nameFilesToUpload')?.setValue(fileName);
        this.ribForm.get('nameFilesToUpload')?.updateValueAndValidity();
      }
    }

  }

  public onFormSubmit = () => {
    const title = 'Enregistrement fichier';
    const message = 'Confirmez-vous l\'envoi d\'un fichier ?';

    const dialogRef = this.dialog.open(SuppressionDialogComponent, {
      data: {
        title: title,
        message: message,
      }
    });

    dialogRef.afterClosed().subscribe((resp: boolean) => {
      if (resp) {
        this.addRib();
      }
    });


  }

  addRib(): void {

    const formData = new FormData();

    formData.append("BankName", this.nomBanque.value);
    formData.append("OwnerName", this.titulaireCompte.value);
    formData.append("RibBank", this.codeBanque.value);
    formData.append("RibGuichet", this.codeGuichet.value);
    formData.append("RibAccountNumber", this.numCompte.value);
    formData.append("RibKey", this.cle.value);
    formData.append("Iban", this.iban.value);
    formData.append("BIC", this.codeBIC.value);
    formData.append("file", this.file, this.file.name);



    if (!this.file) {
      this.toastr.showErrorWithMessage("Veuillez sélectioner un fichier valide");
      return;

    }
  }





  sendMessage(isValid: boolean): void {
    // send message to subscribers via observable subject
  }

  get filesToUpload(): FormControl {
    return this.ribForm.get('filesToUpload') as FormControl;
  }

  get nameFilesToUpload(): FormControl {
    return this.ribForm.get('nameFilesToUpload') as FormControl;
  }

  get nomBanque() {
    return this.ribForm.get('nomBanque');
  }
  get titulaireCompte() {
    return this.ribForm.get('titulaireCompte');
  }
  get iban() {
    return this.ribForm.get('iban');
  }
  get codeBanque() {
    return this.ribForm.get('codeBanque');
  }

  get codeGuichet() {
    return this.ribForm.get('codeGuichet');
  }

  get numCompte() {
    return this.ribForm.get('numCompte');
  }

  get cle() {
    return this.ribForm.get('cle');
  }

  get codeBIC() {
    return this.ribForm.get('codeBIC');
  }


  set codeBanque(val) {
    this.ribForm?.get('codeBanque')?.setValue(val);
  }

  set codeGuichet(val) {
    this.ribForm.get('codeGuichet')?.setValue(val);
  }

  set numCompte(val) {
    this.ribForm.get('numCompte')?.setValue(val);
  }

  set cle(val) {
    this.ribForm.get('cle')?.setValue(val);
  }



}

