import { Component, OnInit } from '@angular/core';
import { GridstackModule } from 'gridstack/dist/angular';
import { GridStackNode, GridStackOptions, GridStack } from 'gridstack';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimengUIModule } from '../../srared/modules/primeng-ui/primeng-ui.module';
import { MenuItem } from 'primeng/api';
import { GridItemComponent } from '../../components/grid-item/grid-item.component';
import { ColumnChartComponent } from '../../demoCharts/column-chart/column-chart.component';
import { PieChartComponent } from '../../demoCharts/pie-chart/pie-chart.component';
import { ComboLineComponent } from '../../demoCharts/combo-line/combo-line.component';
import { BarChartComponent } from '../../demoCharts/bar-chart/bar-chart.component';
import { TableViewComponent } from '../../demoCharts/table-view/table-view.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    GridstackModule,
    CommonModule,
    FormsModule,
    PrimengUIModule,
    GridItemComponent,
    ColumnChartComponent,
    PieChartComponent,
    ComboLineComponent,
    BarChartComponent,
    TableViewComponent
  ],
  providers: [MessageService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent implements OnInit{

  constructor(private messages: MessageService){}

  items: MenuItem[] = [];

  gridConfig: GridStackOptions = {
    float: true,
    removable: false,
    disableDrag: false,
    disableResize: true,
    minRow: 1,
    cellHeight: '10rem'
  }


  message = {severity: 'warn', summary:'Isn`t working yet', detail:'Functionality under development now' };

  datePresets:{label: string, value: any}[] = [
    {
      label:"This week",
      value: 'week'
    },
    {
      label:"This Month",
      value: 'month'
    },
    {
      label:"This Quarter",
      value: 'quarter'
    } 
  ];

  defaultWidgetOptions: GridStackNode =  {
    noResize: true,
    h:2,
    w:3
  }

  bigOptions: GridStackNode = {
    ...this.defaultWidgetOptions,
    h:4,
    w:12,
    x:0,
    y:2
  }

  selectedDate: Date | undefined;

  selectedDataPreset = 'week'

  home: MenuItem | undefined;

  ngOnInit(): void {
    this.selectedDate = new Date();
    this.home = { icon: 'pi pi-home', routerLink: '/dashboard' };
  }

  showMessage($event:{severity: string, summary:string, detail:string}){
    this.messages.add($event);
  }

}
