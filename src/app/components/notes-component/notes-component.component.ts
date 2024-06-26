import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../../../services/note.service';
import { Note } from '../../../interfaces/note';

@Component({
  selector: 'app-notes-component',
  templateUrl: './notes-component.component.html',
  styleUrl: './notes-component.component.scss'
})
export class NotesComponentComponent implements OnInit {
  @Input() searchQuery: string = '';
  public editingNoteId: number = -1;

  constructor(public noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  private getNotes(): void {
    this.noteService.getNotes().subscribe(data => {      
      if (!data) { return; }

      this.noteService.notes = data;
      this.noteService.noteCreationTimes$.next(true);
    });
  }

  public deleteNote(id: number) {
    this.noteService.deleteNote(id)
      .subscribe(_id => {
        if (typeof _id !== 'number') { return; }
        
        delete this.noteService.notes[_id];
        this.noteService.notes = structuredClone(this.noteService.notes);
        this.noteService.noteCreationTimes$.next(true);
      });
  }
}
