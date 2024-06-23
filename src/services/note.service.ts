import { Injectable, OnInit } from "@angular/core";
import { Note, Notes } from "../interfaces/note";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    public notes: Notes = {} as Notes;
    private BASE_URL = 'http://localhost:3000/';
      
    constructor(private http: HttpClient) {
      
    }

    public getNotes(): Observable<Notes> {
      return this.http.get<Notes>(`${this.BASE_URL}note`);
    }
  
    public createNote(note: Note): any {
      console.log(note, 'created note');
      
      this.http.post(`${this.BASE_URL}note`, note).subscribe(data => {
        console.log(data, 'created data');
        
      });
    }
  
    public updateNote(updatedNote: Note): Observable<Note> {
      return this.http.put<Note>(`${this.BASE_URL}note`, updatedNote);
    }
  
    public deleteNote(id: number): Observable<Note> {
      return this.http.delete<Note>(`${this.BASE_URL}note/${id}`);
    }
}