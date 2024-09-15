import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { PopoverModule } from 'primeng/popover';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AvatarModule } from 'primeng/avatar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [],
  imports: [
    MenuModule,
    ButtonModule,
    ToggleSwitchModule,
    PopoverModule,
    SelectButtonModule,
    AvatarModule,
    SplitButtonModule,
    DialogModule,
    MenubarModule,
    IconFieldModule,
    InputIconModule,
    BadgeModule,
    OverlayBadgeModule,
    BreadcrumbModule,
    SelectModule,
    DatePickerModule,
    CardModule,
    ChartModule,
    TableModule,
    InputTextModule,
    ToolbarModule,
    TieredMenuModule,
    ToastModule
  ],
   exports:[
    MenuModule,
    ButtonModule,
    ToggleSwitchModule,
    PopoverModule,
    SelectButtonModule,
    AvatarModule,
    SplitButtonModule,
    DialogModule,
    MenubarModule,
    IconFieldModule,
    InputIconModule,
    BadgeModule,
    OverlayBadgeModule,
    BreadcrumbModule,
    SelectModule,
    DatePickerModule,
    CardModule,
    ChartModule,
    TableModule,
    InputTextModule,
    ToolbarModule,
    TieredMenuModule,
    ToastModule 
   ]
})
export class PrimengUIModule { }
