import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor() { }

  ifExists(array: Array<string>, book: string) {
    return array.some((title) => {
      return this.onlyLetters(title).localeCompare(this.onlyLetters(book)) === 0;
    });
  }

  onlyLetters(title) {
    const letters = title.trim().split(' ');
    const res = [];
    letters.forEach(e => {
      if (e !== '' && e.match(/[A-Z,a-z,0-9]/g)) {
        const newTitle = e.match(/[A-Z,a-z,0-9]/g).join('');
        res.push(newTitle.toLowerCase());
      }
    });
    return res.join(' ');
  }
}