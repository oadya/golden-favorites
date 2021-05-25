import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-suppression-dialog',
  templateUrl: './suppression-dialog.component.html',
  styleUrls: ['./suppression-dialog.component.scss']
})
export class SuppressionDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    message: string,
    title: string
  },
    private dialogRef: MatDialogRef<SuppressionDialogComponent>) {
  }

  ngOnInit(): void {
  }

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }

}
