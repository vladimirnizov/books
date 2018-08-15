import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
import {Book} from '../../common/Book';
import {MatDialog} from '@angular/material';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import {CheckService} from '../../services/chek.service';
import {ExistService} from '../../services/exist.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  
  static id=1;
  books: Array<Book>;
  constructor(private _rest: RestService, private check: CheckService, 
  private dialog: MatDialog, private exist: ExistService) { }

  ngOnInit() {
    this.getBooks();
  }

  add() {
    const dislogRef = this.dialog.open(EditDialogComponent, {});
    dislogRef.afterClosed().subscribe((book: Book) => {
      if (book) {
      const exists = this.check.ifExists(this.books.map((b) => b.title), book.title);
      if (exists) {
        this.exist.exist(book.title + ' already exists');
      } else {
        book.id = StoreComponent.id++;
        book.imageLink = 'https://rta.org.af/eng/wp-content/uploads/2016/02/book.png';
        this.books.push(book);
      }
    }
    });
  }

  del() {
    this.books.splice(this._rest.shared, 1);
  }
  
  getBooks(){
    this._rest.getBooks().subscribe((books: Array<any>) => {
      this.books = books['items'].map((res) => {
        return {
          id: StoreComponent.id++,
          title: res.volumeInfo.title,
          author: res.volumeInfo.authors,
          date: res.volumeInfo.publishedDate,
          imageLink: res.volumeInfo.imageLinks.thumbnail
        };
      });
    });
  }


}