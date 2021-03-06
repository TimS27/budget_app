import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() isIncome: boolean=true;   //using for dynamic class changing which leads to color changing

  constructor() { }

  ngOnInit(): void {
  }

}
