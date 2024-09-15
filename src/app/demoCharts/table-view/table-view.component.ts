import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PrimengUIModule } from '../../srared/modules/primeng-ui/primeng-ui.module';
import { CommonModule } from '@angular/common';
import { FakeDataService } from '../../srared/services/fake-data-service.service';
import { MenuItem, MessageService } from 'primeng/api';
import { Message } from 'primeng/message';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [ 
    PrimengUIModule, 
    CommonModule
  ],
  providers: [FakeDataService, MessageService],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css'
})
export class TableViewComponent implements OnInit {
  @Output() outMessage: EventEmitter<{severity: string, summary:string, detail:string}> = new EventEmitter<{severity: string, summary:string, detail:string}>()

  constructor(private dataService: FakeDataService, private messages: MessageService){}

  products!:any;
  mainMenuItems: MenuItem[] = [
    {
      label: 'Manage columns',
      icon: "pi pi-search",
      command: () => {
        this.outMessage.emit({severity: 'warn', summary:'Isn`t working yet', detail:'Functionality under development now' })
      }
    },
    {
      label: 'Export data',
      items:[
        {
          label: "Excel",
          icon: "pi pi-download",
          command: () => {
            this.outMessage.emit({severity: 'warn', summary:'Isn`t working yet', detail:'Functionality under development now' })
          }
        },
        {
          label: "PDF",
          icon: "pi pi-download",
          command: () => {
            this.outMessage.emit({severity: 'warn', summary:'Isn`t working yet', detail:'Functionality under development now' })
          }
        },
        
      ]
    },
    {
      label: 'Share  by email',
      icon: "pi pi-share-alt",
      command: () => {
        this.outMessage.emit({severity: 'warn', summary:'Isn`t working yet', detail:'Functionality under development now' })
      }
    },

  ]

  ngOnInit(): void {
   this.products =  this.dataService.fakeTableData;
  }

}
