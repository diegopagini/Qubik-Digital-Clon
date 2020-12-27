import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-menu',
  templateUrl: './grid-menu.component.html',
  styleUrls: ['./grid-menu.component.scss'],
})
export class GridMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document
      .getElementById('commerce-container')
      .addEventListener('mouseenter', () => {
        document.getElementById('commerce').style.display = 'block';
      });

    document
      .getElementById('commerce-container')
      .addEventListener('mouseleave', () => {
        document.getElementById('commerce').style.display = 'none';
      });

    document
      .getElementById('sales-container')
      .addEventListener('mouseenter', () => {
        document.getElementById('sales').style.display = 'block';
      });

    document
      .getElementById('sales-container')
      .addEventListener('mouseleave', () => {
        document.getElementById('sales').style.display = 'none';
      });

    document
      .getElementById('marketing-container')
      .addEventListener('mouseenter', () => {
        document.getElementById('marketing').style.display = 'block';
      });

    document
      .getElementById('marketing-container')
      .addEventListener('mouseleave', () => {
        document.getElementById('marketing').style.display = 'none';
      });

    document
      .getElementById('experiences-container')
      .addEventListener('mouseenter', () => {
        document.getElementById('experiences').style.display = 'block';
      });

    document
      .getElementById('experiences-container')
      .addEventListener('mouseleave', () => {
        document.getElementById('experiences').style.display = 'none';
      });

    document
      .getElementById('strategy-container')
      .addEventListener('mouseenter', () => {
        document.getElementById('strategy').style.display = 'block';
      });

    document
      .getElementById('strategy-container')
      .addEventListener('mouseleave', () => {
        document.getElementById('strategy').style.display = 'none';
      });
  }
}
