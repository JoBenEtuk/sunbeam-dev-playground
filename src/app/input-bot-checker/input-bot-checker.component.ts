import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-input-bot-checker',
  templateUrl: './input-bot-checker.component.html',
  styleUrls: ['./input-bot-checker.component.scss']
})
export class InputBotCheckerComponent implements OnInit, AfterViewInit {

  constructor(private renderer2: Renderer2) {
  }
  ngAfterViewInit(): void {
    // const swipe = document.getElementsByClassName('.swipe');
    // this.renderer2.listen(swipe, 'touchmove', (e) => {
    //   console.log(e);
    // });
  }

  ngOnInit(): void {
  }

  checkedAction(evt: any): void {
    console.log(evt);
  }
}