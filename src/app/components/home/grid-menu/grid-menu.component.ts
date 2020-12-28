import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-menu',
  templateUrl: './grid-menu.component.html',
  styleUrls: ['./grid-menu.component.scss'],
})
export class GridMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.makeTheElementVisible('commerce-container', 'commerce');
    this.makeTheElementVisible('sales-container', 'sales');
    this.makeTheElementVisible('commerce-container', 'commerce');
    this.makeTheElementVisible('marketing-container', 'marketing');
    this.makeTheElementVisible('experiences-container', 'experiences');
    this.makeTheElementVisible('strategy-container', 'strategy');
  }

  makeTheElementVisible(father, element) {
    document.getElementById(`${father}`).addEventListener('mouseenter', () => {
      document.getElementById(`${element}`).style.display = 'block';
    });

    document.getElementById(`${father}`).addEventListener('mouseleave', () => {
      document.getElementById(`${element}`).style.display = 'none';
    });
  }
}
