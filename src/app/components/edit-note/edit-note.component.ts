import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../../../services/note.service';
import { Note } from '../../../interfaces/note';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.scss'
})
export class EditNoteComponent implements OnInit {
  @Output() submitEditEmitter: EventEmitter<boolean> = new EventEmitter();
  @Input() note: Note = {} as Note;

  public noteForm: FormGroup;
  public canEdit = false;

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService
  ) {
    this.noteForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(255)]],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.canEdit = true;   
    this.noteForm.reset({
      title: this.note.title,
      description: this.note.description
    });
  }

  get title(): any {
    return this.noteForm.get('title');
  }

  get description(): any {
    return this.noteForm.get('description');
  }

  public editNote() {
    if (!this.canEdit) { return; }

    this.noteService.updateNote({
      title: this.title.value,
      description: this.description.value,
      id: this.note.id
    }, this.note.id)
    .subscribe(data => {
      if (!data) { return; }

      this.noteService.notes = {
        ...this.noteService.notes,
        [data.id]: data
      };

      this.submitEditEmitter.emit(true);
    });
  }
}
