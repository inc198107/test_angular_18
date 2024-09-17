import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { palette, usePreset, updatePrimaryPalette, updateSurfacePalette} from 'primeng/themes';
import {myNora, myAura, myLara} from './presets';
import { PrimengUIModule } from './srared/modules/primeng-ui/primeng-ui.module';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchChangeEvent } from 'primeng/toggleswitch';
import { Menu } from 'primeng/menu';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    PrimengUIModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angular18_primeg18_gridstack';
  darkMode: boolean = false;
  currentTheme: any;
  currentPrimary: string;
  currentSurface: string;
  showPalette = false;
  showProfile = false;

  userName = 'John D.';
  userEmail = 'somthing@email.com';
  tenant = 'Global'


  sidebarMinimized: boolean = false;

  tenantOptions: MenuItem[] = [
    {
      label: 'Local',
      command: () => {
        this.tenant = "Local"
      }
    },
    {
      label: 'Global',
      command: () => {
        this.tenant = "Global"
      }
    }
  ]

  dynamicMenu: MenuItem[] = [];

  sidebarMenu: MenuItem[] = [
    {
      label: 'Data',
      icon: 'pi pi-database',
      items: [
        {
          label: 'Local data',
        },
        {
          label: 'Global data',
        }
      ]
    },
    {
      label: 'Advanced',
      icon: 'pi pi-server',
      items: [
        {
          label: 'Preset A',
        },
        {
          label: 'Preset B',
        }
      ]
    },
    {
      label: 'Configurations',
      icon: 'pi pi-cog'
    }

  ];


  currentDate = Date.now();



  mainMenuOptions: MenuItem[] = [
    {
      routerLink: '/dashboard',
      icon: 'pi pi-objects-column',
      label: 'Overview'
    },
    {
      label: 'Market Abuse',
      routerLink: '/market_abuse'
    },
    {
      label: 'Insider Compliance',
      routerLink: '/insider_compliance'
    },
    {
      label: 'Conflict of interest',
      routerLink: '/coi'
    }
  ];


  userMenu: MenuItem[] = [
    {
      label: 'Edit Profile',
      icon: 'pi pi-pencil',
      command: this.toggleUserSettings.bind(this)
    },
    {
      label: 'Preferences',
      icon: 'pi pi-palette',
      command: this.toggleProfile.bind(this)
    }
  ];


  themeOptions: MenuItem[] = [
    {
      label: 'Aura',
      value: myAura
    },
    {
      label: 'Nora',
      value: myNora
    },
    {
      label: 'Lara',
      value: myLara
    }
  ];

  @ViewChildren(Menu) submenus!: QueryList<Menu>;

  constructor(private config: PrimeNGConfig) {
    this.currentTheme = myAura;
    this.currentPrimary = 'emerald';
    this.currentSurface = 'ocean';
    this.config.theme.set({
      preset: this.currentTheme,
      prefix: 'p',
      options: {
        darkModeSelector: '.dark',
        cssLayer: false
      }
    })

  }

  toggleProfile() {
    this.showPalette = !this.showPalette;
  }

  minimizeSidebar() {
    this.sidebarMinimized = !this.sidebarMinimized;
  }

  openMenu(event: Event, idx: number, items?: MenuItem[]) {
    if (items) {
      this.dynamicMenu = items;
      this.submenus.toArray().forEach((item: Menu) => {
        if (item.id && +item.id == idx) {
          item.show(event);
        } else {
          item.hide();
        }
      })
    }
  }

  clear() {
    this.showProfile = false;
    this.userName = 'John D.';
    this.userEmail = 'somthing@email.com';
  }

  toggleUserSettings() {
    this.showProfile = !this.showProfile
  }

  changePrimaryColor(color: string) {
    this.currentPrimary = color;
    const colorPalette = palette(`{${color}}`);
    updatePrimaryPalette(colorPalette);
  }

  changeSurface(color: string) {
    this.currentSurface = color;
    const colorPalette = palette(`{${color}}`);
    if (this.darkMode) {
      updateSurfacePalette({
        dark: colorPalette
      })
    } else {
      updateSurfacePalette({
        light: colorPalette
      })
    }
  }

  toggleDarkTheme($event: ToggleSwitchChangeEvent) {
    const root = document.querySelector('html');
    if ($event.checked) {
      root && root.classList.add('dark');
    } else {
      root && root.classList.remove('dark');
    }
    this.changeSurface(this.currentSurface);
  }

  handleSelectPreset($event: any) {
    usePreset(this.currentTheme);
  }
}
