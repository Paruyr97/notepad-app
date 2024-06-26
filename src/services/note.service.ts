import { Injectable, OnInit } from "@angular/core";
import { Note, Notes } from "../interfaces/note";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NoteService {
    public notes: Notes = {} as Notes;
    private BASE_URL = 'http://localhost:3000/';
    public noteCreationTimes$: BehaviorSubject<boolean> = new BehaviorSubject(false);
      
    constructor(private http: HttpClient) {
      
    }

    public getNotes(): Observable<Notes> {
      return this.http.get<Notes>(`${this.BASE_URL}note`);
    }
  
    public createNote(note: Omit<Note, 'id'>): Observable<Note> {
      return this.http.post<Note>(`${this.BASE_URL}note`, note);
    }
  
    public updateNote(updatedNote: Note, id: number): Observable<Note> {
      return this.http.put<Note>(`${this.BASE_URL}note/${id}`, updatedNote);
    }
  
    public deleteNote(id: number): Observable<Note> {
      return this.http.delete<Note>(`${this.BASE_URL}note/${id}`);
    }
}