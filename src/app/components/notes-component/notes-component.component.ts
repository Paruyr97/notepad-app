import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-notes-component',
  templateUrl: './notes-component.component.html',
  styleUrl: './notes-component.component.scss'
})
export class NotesComponentComponent {
  constructor(public noteService: NoteService) {}
}
