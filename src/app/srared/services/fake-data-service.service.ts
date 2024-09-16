import { Injectable } from '@angular/core';

@Injectable()
export class FakeDataService {
  constructor() { }

  fakeTableData = [
    {
      id: '1000',
      code: '12354ee',
      name: 'new gen',
      price: 65,
      quantity: 1345
    },
    {
      id: '1001',
      code: '58f3054',
      name: 'some price',
      price: 80,
      quantity: 20
    },
    {
      id: '1002',
      code: 'f39485734567',
      name: 'new gen',
      price: 633,
      quantity: 99
    },
    {
      id: '1003',
      code: '900234se',
      name: 'alert',
      price: 2567,
      quantity: 24
    },
    {
      id: '1004',
      code: 'f230gg434',
      name: 'fleer',
      price: 340,
      quantity: 0
    },
    {
      id: '1005',
      code: 'f33455fh0g3',
      name: 'new gen 2',
      price: 0,
      quantity: 0
    },
  ]
}
