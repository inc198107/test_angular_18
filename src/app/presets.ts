import { Aura } from 'primeng/themes/aura';
import { Nora } from 'primeng/themes/nora';
import { Lara } from 'primeng/themes/lara';

import { definePreset } from 'primeng/themes';

export const myAura = definePreset(Aura, {
    primitive: {
      ocean: {
        50: '#eafaff', 100: '#d2f6fe', 150: '#b9f1fe', 200: '#a1ecff', 250: '#0082a3', 300: '#007c9b',
        350: '#007592', 400: '#006f8a', 450: '#006882', 500: '#00627a', 600: '#00546a', 650: '#004e61',
        700: '#004759', 750: '#004151', 800: '#003a49', 900: '#002d39', 950: '#001a20'
      }
    },
    semantic: {
      colorScheme: {
        light: {
          surface: {
            0: '#ffffff',
            50: '{ocean.50}',
            100: '{ocean.100}',
            200: '{ocean.200}',
            300: '{ocean.300}',
            400: '{ocean.400}',
            500: '{ocean.500}',
            600: '{ocean.600}',
            700: '{ocean.700}',
            800: '{ocean.800}',
            900: '{ocean.900}',
            950: '{ocean.950}'
          }
        },
        dark: {
          surface: {
            0: '#ffffff',
            50: '{ocean.50}',
            100: '{ocean.100}',
            200: '{ocean.200}',
            300: '{ocean.300}',
            400: '{ocean.400}',
            500: '{ocean.500}',
            600: '{ocean.600}',
            700: '{ocean.700}',
            800: '{ocean.800}',
            900: '{ocean.900}',
            950: '{ocean.950}'
          }
        }
      }
    }
  });
  export const myNora = definePreset(Nora, {
    primitive: {
      ocean: {
        50: '#eafaff', 100: '#d2f6fe', 150: '#b9f1fe', 200: '#a1ecff', 250: '#0082a3', 300: '#007c9b',
        350: '#007592', 400: '#006f8a', 450: '#006882', 500: '#00627a', 600: '#00546a', 650: '#004e61',
        700: '#004759', 750: '#004151', 800: '#003a49', 900: '#002d39', 950: '#001a20'
      }
    },
    semantic: {
      colorScheme: {
        light: {
          surface: {
            0: '#ffffff',
            50: '{ocean.50}',
            100: '{ocean.100}',
            200: '{ocean.200}',
            300: '{ocean.300}',
            400: '{ocean.400}',
            500: '{ocean.500}',
            600: '{ocean.600}',
            700: '{ocean.700}',
            800: '{ocean.800}',
            900: '{ocean.900}',
            950: '{ocean.950}'
          }
        },
        dark: {
          surface: {
            0: '#ffffff',
            50: '{ocean.50}',
            100: '{ocean.100}',
            200: '{ocean.200}',
            300: '{ocean.300}',
            400: '{ocean.400}',
            500: '{ocean.500}',
            600: '{ocean.600}',
            700: '{ocean.700}',
            800: '{ocean.800}',
            900: '{ocean.900}',
            950: '{ocean.950}'
          }
        }
      }
    }
  });
  export const myLara = definePreset(Lara, {
    primitive: {
      ocean: {
        50: '#eafaff', 100: '#d2f6fe', 150: '#b9f1fe', 200: '#a1ecff', 250: '#0082a3', 300: '#007c9b',
        350: '#007592', 400: '#006f8a', 450: '#006882', 500: '#00627a', 600: '#00546a', 650: '#004e61',
        700: '#004759', 750: '#004151', 800: '#003a49', 900: '#002d39', 950: '#001a20'
      }
    },
    semantic: {
      colorScheme: {
        light: {
          surface: {
            0: '#ffffff',
            50: '{ocean.50}',
            100: '{ocean.100}',
            200: '{ocean.200}',
            300: '{ocean.300}',
            400: '{ocean.400}',
            500: '{ocean.500}',
            600: '{ocean.600}',
            700: '{ocean.700}',
            800: '{ocean.800}',
            900: '{ocean.900}',
            950: '{ocean.950}'
          }
        },
        dark: {
          surface: {
            0: '#ffffff',
            50: '{ocean.50}',
            100: '{ocean.100}',
            200: '{ocean.200}',
            300: '{ocean.300}',
            400: '{ocean.400}',
            500: '{ocean.500}',
            600: '{ocean.600}',
            700: '{ocean.700}',
            800: '{ocean.800}',
            900: '{ocean.900}',
            950: '{ocean.950}'
          }
        }
      }
    }
  })
  