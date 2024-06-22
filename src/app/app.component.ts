import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private noteService: NoteService) {
    
    
  }

  subscribeToNotes() {
    this.noteService.getNotes().subscribe(data => {
      console.log(data, data);
      
      if (!data) { return; }

      this.noteService.notes = data;
      this.noteService.createNote({
        title: 'fdsfds',
        id: new Date().getTime(),
        description: 'ddddddddddddddddddddddddd'
      });
    });
  }

  ngOnInit(): void {
    this.subscribeToNotes();
  }

  deleteNote() {
    this.noteService.deleteNote(1)
  }
}
