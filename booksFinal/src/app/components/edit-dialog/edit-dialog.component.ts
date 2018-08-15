import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Book} from '../../common/Book';
import {CheckService} from '../../services/chek.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  form: FormGroup;
  max = new Date();
  constructor(private thisDialog: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public book: Book,
  private check: CheckService) { }

  ngOnInit() {
    this.checkErrors();
  }

  checkErrors(){
    const title = this.book ? this.book.title : '';
    const author = this.book ? this.book.author.toString() : '';
    const d = new Date();
    if (this.book) {
      d.setFullYear(+this.book.date.split('-')[0]);
      d.setMonth(this.book.date.length === 4 ? 0 :
        +this.book.date.split('-')[1] - 1);
      d.setDate(this.book.date.length === 4 || 7 ? 1 :
        +this.book.date.split('-')[2]);
    }
    const date = this.book ? d : '';
    this.form = new FormGroup({
      'title': new FormControl(title, [Validators.required, this.onlyLetters.bind(this)]),
      'author': new FormControl(author, [Validators.required]),
      'date': new FormControl(date, [Validators.required])
    });
  }

  onlyLetters(word: FormControl) {
  if(!word.value.match(/[A-Z,a-z]/g)) 
    return { 'onlyLetters': true };
    
    return null;
  }

  save() {
  const book = {
    'id': this.book ? this.book.id : '',
    'title': this.check.onlyLetters(this.form.get('title').value),
    'author': this.form.get('author').value,
    'date': this.form.get('date').value.toLocaleString().slice(0, 10).split('/').reverse().join('-')
    };
  this.thisDialog.close(book);
  }

  wrongFormat(x:string) {
  return this.form.get(x).hasError('required') ? 'A mandotatory field' : this.form.get(x).hasError('notLatin') ? 'The field should contain Latin symbols' : '';
  }
}