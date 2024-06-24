import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.scss'
})
export class CreateNoteComponent {
  public noteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService
  ) {
    this.noteForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(255)]],
      description: ['', Validators.required]
    });
  }

  get title(): any {
    return this.noteForm.get('title');
  }

  get description(): any {
    return this.noteForm.get('description');
  }

  public createNote() {
    console.log('cccccccccccccccccccccccccccc');
    
    this.noteService.createNote({
      title: this.title.value,
      description: this.description.value
    })
    .subscribe(data => {
      console.log(data, 'posted data');
      
      if (!data) { return; }

      this.noteService.notes = {
        ...this.noteService.notes,
        [data.id]: data
      };

      this.noteForm.reset({
        title: '',
        description: ''
      });
    });
  }
}
