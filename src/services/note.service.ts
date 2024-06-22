import { Injectable, OnInit } from "@angular/core";
import { Note } from "../interfaces/note";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    public notes: Note[] = [];
    BASE_URL = 'http://localhost:5000/';
      
    constructor(private http: HttpClient) {
      
    }
    getNotes(): Observable<Note[]> {
      return this.http.get<Note[]>(this.BASE_URL);
    }
  
    createNote(note: Note): any {
      console.log(note, 'created note');
      
      this.http.post(this.BASE_URL, note);
    }
  
    updateNote(updatedNote: Note): void {
      this.http.put(this.BASE_URL, updatedNote);
    }
  
    deleteNote(id: number): void {
      this.http.delete(`${this.BASE_URL}/${id}`);
    }
}