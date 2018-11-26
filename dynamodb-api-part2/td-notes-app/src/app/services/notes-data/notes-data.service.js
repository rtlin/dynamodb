import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export class NotesDataService {
    constructor() {
        this.announceAddNoteSource = new Subject();
        this.addNote$ = this.announceAddNoteSource.asObservable();
    }
    // announceRefreshNotes() {
    //     this.announceRefreshNotesSource.next();
    // }
    announceAddNote(note) {
        this.announceAddNoteSource.next(note);
    }
}
NotesDataService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NotesDataService.ctorParameters = () => [];
