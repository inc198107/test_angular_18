import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { palette, usePreset, updatePrimaryPalette, updateSurfacePalette } from 'primeng/themes';
import { Aura } from 'primeng/themes/aura';
import { Nora } from 'primeng/themes/nora';
import { Lara } from 'primeng/themes/lara';
import { PrimengUIModule } from './srared/modules/primeng-ui/primeng-ui.module';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchChangeEvent } from 'primeng/toggleswitch';



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

  
tenantOptions:MenuItem[] = [
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
      value: Aura
    },
    {
      label: 'Nora',
      value: Nora
    },
    {
      label: 'Lara',
      value: Lara
    }
  ];

  constructor(private config: PrimeNGConfig) {
    this.currentTheme = Aura;
    this.currentPrimary = 'emerald';
    this.currentSurface = 'slate';
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
