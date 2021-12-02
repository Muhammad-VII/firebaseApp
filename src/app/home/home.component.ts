import { FirestoreService, Note } from '../firestore.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Note[] = []
  constructor(private _FirebaseService: FirestoreService,  private cd: ChangeDetectorRef) {
    // this._FirebaseService.getNotes().subscribe(res => {
    //   this.notes = res;
    //   this.cd.detectChanges();
    // });
  }
  addNote(): void {
    this._FirebaseService.addNote({title: "Muhammad", text: "me"})
  }

  updateNote(): void {
    this._FirebaseService.updateNote({id:"djvEk1MsqwLe8K9eJSPa", title: "Ahmed", text: "Akmal"})
  }

  deleteNote(id: string): void {
    this._FirebaseService.deleteNote({id, title: "Ahmed", text: "Akmal"})
  }

  displayNoteById(): void {
    this._FirebaseService.getNoteById("3AYCGZrhJvy2jplThWfW").subscribe((res:Note) => {
      this.data.push(res)
    })
  }  

  displayNotes(): void {
    this._FirebaseService.getNotes().subscribe((res:any) => {
      this.data = res
    })
  }
  ngOnInit(): void {
    // this.displayNoteById()
    this.displayNotes()
    // this.deleteNote("3AYCGZrhJvy2jplThWfW")
    // this.updateNote()
    // this.addNote()
  }
}
