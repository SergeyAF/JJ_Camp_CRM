export interface IKid {
  id: number
  name: string
  gender: 'male' | 'female'
  dob: string
  contractorTypeId?: string
  comments?: string
  image?: string
}