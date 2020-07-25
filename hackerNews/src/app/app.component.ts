import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hackerNews';
  public newsList;
  public isState: Boolean = false;
  public dataKey = "userList";
  // Create item:
  public userData = [{ id: '1', votes: 0, value: 'Seemingly Impossible Swift Programs', hidden: false },
  { id: '2', votes: 0, value: 'An Open Letter', hidden: false },
  { id: '3', votes: 0, value: 'When your profiler lies', hidden: false },
  { id: '4', votes: 0, value: 'JIRA is antipattern.', hidden: false },
  { id: '5', votes: 0, value: 'Netflix biggest competition is youtube.', hidden: false },
  { id: '6', votes: 0, value: 'An Open Letter', hidden: false },
  { id: '7', votes: 0, value: 'Seemingly Impossible Swift Programs', hidden: false },
  { id: '8', votes: 0, value: 'An Open Letter', hidden: false },
  { id: '9', votes: 0, value: 'Seemingly Impossible Swift Programs', hidden: false },
  { id: '10', votes: 0, value: 'An Open Letter', hidden: false },
  ];

  ngOnInit() {
    if (localStorage.getItem("userList") === null) {
      localStorage.setItem(this.dataKey, JSON.stringify(this.userData));
      this.newsList = JSON.parse(localStorage.getItem(this.dataKey));
    }
    else {
      //localStorage.setItem(this.dataKey, JSON.stringify(this.userData));
      this.newsList = JSON.parse(localStorage.getItem("userList"));

    }

  }

  countVotes(index, item) {
    let updatedVote = 0;
    for (let i = 0; i < this.newsList.length; i++) {
      if (index == i) {
        updatedVote = item.votes + 1;
        this.newsList[i].votes = updatedVote;
      }
    }
    localStorage.setItem("userList", JSON.stringify(this.newsList));
    return updatedVote;
  }

  hideRow = (index) => {
    for (let i = 0; i < this.newsList.length; i++) {
      if (index == i) {
        this.newsList[i].hidden = true;
      }
    }
    localStorage.setItem("userList", JSON.stringify(this.newsList));
  }

  // isAllowed = (hidden) => {
  //   return hidden === 0 ? true : this.isState;
  // }

  // changeState = () => {
  //   this.isState = !this.isState;
  // }




}
