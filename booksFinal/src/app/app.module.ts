import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatIconModule,MatButtonModule,MatCardModule,MatDatepickerModule, MatDialogModule, MatDividerModule, MatFormFieldModule,MatInputModule, MatNativeDateModule,MatSnackBarModule,MatTooltipModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { TitlePipePipe } from './pipes/title-pipe.pipe';
import { AppComponent } from './app.component';
import {EditDialogComponent} from './components/edit-dialog/edit-dialog.component';
import { StoreComponent } from './components/store/store.component';
import { DisplayBookComponent } from './components/display-book/display-book.component';

@NgModule({
  declarations: [
    AppComponent,
    EditDialogComponent,
    StoreComponent,
    DisplayBookComponent,
    TitlePipePipe
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDividerModule,
    HttpClientModule
  ],
  entryComponents:[EditDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TitlePipePipe],

})
export class AppModule { }
