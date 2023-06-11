import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
  url = "https://thispersondoesnotexist.com/";
  currentUrl: string = "";
  shouldLoad = true;

  showChallenges = true;
  challenges = [
    {text: 'Challenge: Krant van vandaag', checked: true},
    {text: 'Challenge: Lepel op hoofd', checked: false},
    {text: 'Challenge: Landmark', checked: false},
    {text: 'Challenge: Handstand', checked: false},
  ]

  constructor(private cdr: ChangeDetectorRef) {}

  onClick() {
    this.currentUrl = this.url + "?" + new Date().getTime();
  }

  ngOnInit(): void {
    this.onClick();
  }

  setChallenges(value: boolean) {
    this.showChallenges = value;
  }

  onChallengeClick(challenge: any) {
    challenge.checked = true;
  }
}
