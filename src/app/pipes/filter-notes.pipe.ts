import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../../interfaces/note';

@Pipe({
  name: 'filterNotes',
  pure: true
})
export class FilterNotesPipe implements PipeTransform {

  transform(notes: Note[], searchQuery: string): Note[] {
    return notes.filter(note => {
      return note.description.includes(searchQuery) || note.title.includes(searchQuery);
    });
  }

}
