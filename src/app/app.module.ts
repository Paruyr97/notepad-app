import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponentComponent } from './components/notes-component/notes-component.component';
import { ObjectValuesPipe } from './pipes/object-values.pipe';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartModule } from 'angular-highcharts';
import { FilterNotesPipe } from './pipes/filter-notes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponentComponent,
    ObjectValuesPipe,
    CreateNoteComponent,
    EditNoteComponent,
    ChartComponent,
    FilterNotesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
