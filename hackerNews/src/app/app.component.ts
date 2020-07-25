import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hackerNews';
  public newsList;
  public isState: Boolean = false;

  ngOnInit() {
    let dataKey = "userList";
    // Create item:
    let userData = [{ id: '1', votes: 0, value: 'Seemingly Impossible Swift Programs', hidden: 0 },
    { id: '2', votes: 0, value: 'An Open Letter', hidden: 1 },
    { id: '3', votes: 0, value: 'When your profiler lies', hidden: 0 },
    { id: '4', votes: 0, value: 'JIRA is antipattern.', hidden: 1 },
    { id: '5', votes: 0, value: 'Netflix biggest competition is youtube.', hidden: 0 },
    { id: '6', votes: 0, value: 'An Open Letter', hidden: 1 },
    { id: '7', votes: 0, value: 'Seemingly Impossible Swift Programs', hidden: 0 },
    { id: '8', votes: 0, value: 'An Open Letter', hidden: 1 },
    { id: '9', votes: 0, value: 'Seemingly Impossible Swift Programs', hidden: 0 },
    { id: '10', votes: 0, value: 'An Open Letter', hidden: 1 },
    ];
    localStorage.setItem(dataKey, JSON.stringify(userData));
    this.newsList = JSON.parse(localStorage.getItem(dataKey));

  }

  countVotes(event, item) {
    return item.votes++;
  }



  // isAllowed = (hidden) => {
  //   return hidden === 0 ? true : this.isState;
  // }

  // changeState = () => {
  //   this.isState = !this.isState;
  // }




}
