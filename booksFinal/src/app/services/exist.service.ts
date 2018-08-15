import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ExistService {

  constructor(private snack: MatSnackBar) { }

  exist(error) {
    this.snack.open(error, '', { panelClass: 'error'});
  }
}