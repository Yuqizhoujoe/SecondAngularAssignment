import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  studentLists = [
    {
      id: 1,
      name: "Yuqi Zhou",
      age: 24,
      major: "data",
      school: "fordham",
      isFavorite: false
    },
    {
      id: 2,
      name: "Luffy",
      age: 30,
      major: "Pirate",
      school: "One Piece",
      isFavorite: true
    },
    {
      id: 3,
      name: "Naruto",
      age: 35,
      major: "Ninja",
      school: "Naruto",
      isFavorite: true
    }
];
}
