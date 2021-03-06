import { Component, OnInit,Input,Injectable } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
        <span *ngFor="let item of stars" [ngClass]="ratingIcon(item)"></span>
    `,
    styles: [`
        .yellow {
            color: #ffa600;
        }
    `]
})
@Injectable ()
export class RatingComponent implements OnInit {
  @Input() public value:number=0;
  @Input() public max: number=0;
  public stars: number[]=[];
  constructor( ) {

   }
 

  public ngOnInit(): void {
      this.stars = new Array(this.max).fill(1).map((item, index) => item + index);
  }

  public ratingIcon(item: number): string {
      return (item <= this.value) ? 'k-icon k-i-star yellow' : 'k-icon k-i-star-outline';
  }

}
