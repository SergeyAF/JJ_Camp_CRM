interface IContract {
  id: number
  contractNumber: string
  date: string
  contractorId: number
  campId: number
  shiftId: number
  contractValue: number
  authorId: number
}

export const contractsList: IContract[] = [
  {
    id: 1,
    contractNumber: '4/20',
    date: '01.05.2021, 09:30:25',
    contractorId: 2,
    campId: 1,
    shiftId: 2,
    contractValue: 9100,
    authorId: 1
  },
  {
    id: 2,
    contractNumber: '5/20',
    date: '02.05.2021, 15:17:26',
    contractorId: 1,
    campId: 1,
    shiftId: 2,
    contractValue: 9100,
    authorId: 1
  },
  {
    id: 3,
    contractNumber: '1/22',
    date: '14.05.2021, 10:30:11',
    contractorId: 5,
    campId: 1,
    shiftId: 1,
    contractValue: 9100,
    authorId: 1
  },
  {
    id: 4,
    contractNumber: '5/26',
    date: '15.05.2021, 21:22:11',
    contractorId: 6,
    campId: 2,
    shiftId: 1,
    contractValue: 8000,
    authorId: 1
  },
]