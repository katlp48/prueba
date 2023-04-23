import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { AuthorComponent } from './components/author/author.component';
import { AuthorListarComponent } from './components/author/author-listar/author-listar.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
