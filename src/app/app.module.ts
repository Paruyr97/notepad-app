import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponentComponent } from './components/notes-component/notes-component.component';
import { ObjectValuesPipe } from './pipes/object-values.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponentComponent,
    ObjectValuesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
