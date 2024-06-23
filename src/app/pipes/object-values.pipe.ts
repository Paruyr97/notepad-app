import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../../interfaces/note';

@Pipe({
  name: 'objectValues',
  pure: true
})
export class ObjectValuesPipe implements PipeTransform {

  transform(value: object): Note[] {
    return Object.values(value);
  }
}
