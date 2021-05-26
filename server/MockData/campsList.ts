interface ICamp {
  id: number
  name: string
  shiftList?: IShift[]
}

export const campsList: ICamp[] = [
  {
    id: 1,
    name: 'Элат',
    shiftList: [
      {
        id: 1,
        name: 'Elat 1st shift 2021',
        startDate: '',
        endDate: '',
        costValue: 9600
      },
      {
        id: 2,
        name: 'Elat 2st shift',
        startDate: '',
        endDate: '',
        costValue: 9600
      }
    ]
  },
  {id: 2, name: 'Море'},
  {id: 3, name: 'Карпаты'},
]

interface IShift {
  id: number
  name: string
  startDate: string
  endDate: string
  costValue: number
}

