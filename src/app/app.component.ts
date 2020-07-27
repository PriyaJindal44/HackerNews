import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('lineChart') private chartRef;
  chart: any;
  title = 'hackerNews';
  public newsList;
  public isState: Boolean = false;
  public dataKey = "userList";
  config: any;
  // Create item:
  public userData = [{ id: '1', votes: 8, value: 'Seemingly Impossible Swift Programs', hidden: false },
  { id: '2', votes: 10, value: 'An Open Letter', hidden: false },
  { id: '3', votes: 70, value: 'When your profiler lies', hidden: false },
  { id: '4', votes: 41, value: 'JIRA is antipattern.', hidden: false },
  { id: '5', votes: 20, value: 'Netflix biggest competition is youtube.', hidden: false },
  { id: '6', votes: 40, value: 'An Open Letter', hidden: false },
  { id: '7', votes: 0, value: 'Seemingly Impossible Swift Programs', hidden: false },
  { id: '8', votes: 35, value: 'An Open Letter', hidden: false },
  { id: '9', votes: 0, value: 'Seemingly Impossible Swift Programs', hidden: false },
  { id: '10', votes: 0, value: 'An Open Letter XXXXXXXX', hidden: false },
  { id: '11', votes: 0, value: 'An Open Letter GGGGG', hidden: false },
  { id: '12', votes: 34, value: 'Seemingly Impossible Swift Programs', hidden: false },
  { id: '13', votes: 30, value: 'An Open Letter', hidden: false },
  { id: '14', votes: 0, value: 'Seemingly Impossible Swift Programs', hidden: false },
  { id: '15', votes: 0, value: 'An Open Letter', hidden: false },
  { id: '16', votes: 65, value: 'An Open Letter GGGGG', hidden: false },
  { id: '17', votes: 0, value: 'Seemingly Impossible Swift Programs', hidden: false },
  { id: '18', votes: 54, value: 'An Open Letter', hidden: false },
  { id: '19', votes: 9, value: 'Seemingly Impossible Swift Programs', hidden: false },
  { id: '20', votes: 0, value: 'An Open Letter', hidden: false }
  ]

  constructor(private cdr: ChangeDetectorRef) {

  }

  ngAfterViewInit() {

    let newsID = [];
    let votes = [];

    for (let x = 0; x < this.newsList.length; x++) {
      newsID.push(this.newsList[x].id);
      votes.push(this.newsList[x].votes);
    }

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',

      data: {
        labels: newsID, // your labels array
        datasets: [
          {
            data: votes, // your data array
            borderColor: '#00AEFF',
            fill: false

          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true


          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
    this.cdr.detectChanges();
  }




  ngOnInit() {
    if (localStorage.getItem("userList") === null) {
      localStorage.setItem(this.dataKey, JSON.stringify(this.userData));
      this.newsList = JSON.parse(localStorage.getItem(this.dataKey));

    }
    else {
      //localStorage.setItem(this.dataKey, JSON.stringify(this.userData));
      this.newsList = JSON.parse(localStorage.getItem("userList"));

    }

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.newsList.length
    };



  }
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: '<--',
    nextLabel: '-->',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };
  onPageChange(event) {
    console.log(event);
    this.config.currentPage = event;
  }

  countVotes(item) {
    let updatedVote = 0;
    for (let i = 0; i < this.newsList.length; i++) {
      if (item.id == i + 1) {
        updatedVote = item.votes + 1;
        this.newsList[i].votes = updatedVote;
      }
    }
    localStorage.setItem("userList", JSON.stringify(this.newsList));
    this.ngAfterViewInit();
    return updatedVote;
  }

  hideRow = (index) => {
    for (let i = 0; i < this.newsList.length; i++) {
      if (index.id == i + 1) {
        this.newsList[i].hidden = true;
      }
    }
    localStorage.setItem("userList", JSON.stringify(this.newsList));
  }






}
