import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CheckService} from '../../services/chek.service';
import {ExistService} from '../../services/exist.service';
import {RestService} from '../../services/rest.service';
import swal from 'sweetalert2'
import { MatDialog } from '@angular/material';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import {Book} from '../../common/Book';


@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {

    @Input('books') books;
    @Output('del') del = new EventEmitter();
    
    constructor(private _rest: RestService, private dialog: MatDialog, private check: CheckService,
    private exist: ExistService) { }
  
    ngOnInit() {
    }
  
    delete(book:Book, index:number) {
    swal({
      title:'Delete '+ book.title+'?',
      text: "Are you sure?",
      type: 'warning',
      showCancelButton: true,
      background: '#fff url(https://otdelkino.ru/upload/iblock/559/559d2d09163ecdcd9cd2c5a955194a85.jpg)',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
        this._rest.shared=index;
        this.del.emit();
         swal({
           background: '#fff url(https://otdelkino.ru/upload/iblock/559/559d2d09163ecdcd9cd2c5a955194a85.jpg)',
           title:'Deleted!',
           text: "Your file has been deleted.",
          }
          )
        }
      })
  }
  
    edit(book:Book) {
    const dial = this.dialog.open(EditDialogComponent, {data: book});
    dial.afterClosed().subscribe((b: Book) => {
      if (b) {
      const exixts = this.check.ifExists(this.books.map((b) => b.title), b.title);
       if(exixts && book.title.trim().toLowerCase().localeCompare(b.title.trim().toLowerCase()) !== 0) 
        { this.exist.exist(b.title + ' already exists');} 
       else {
        book.title = b.title;
        book.author = b.author;
        book.date = b.date;
       }
      }
      });
    }
  
  
  }