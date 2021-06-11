interface IPayment {
    id: number
    date: string
    tillId: number
    campId: number
    contract: string
    contractor: string // kid or some organisation
    typeOfTransaction: string // income, outcome
    value: number
    authorId: number
    comment?: string
}

export const paymentList: IPayment[] = [
    {
        id: 1,
        date: '01.05.2021, 09:30:25',
        tillId: 1,
        campId: 1,
        contract: 'some contract', // todo: link with contracts list
        contractor: 'kid',
        typeOfTransaction: 'income',
        value: 9100,
        authorId: 1,
        comment: 'Путевка 9100',
    }
]



