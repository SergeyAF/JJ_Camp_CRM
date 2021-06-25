import {IKid} from "../../MockData/kidList";

//----  actions for kidsList-Reducer ----
interface IData {
  data: IKid[]
  total: number
  limit: number
  offset: number
}

export const setKidsListAction = (data: IData) => {
  return {
    type: 'kidsList/SET-KIDS-LIST',
    payload: data
  } as const
}
// todo: fix backend or typeScript
export const addKidToListAction = (kid: IKid) => {
  return {
    type: 'kidsList/ADD-KID-TO-LIST',
    payload: kid
  } as const
}
