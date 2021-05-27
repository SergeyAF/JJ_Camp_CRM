import {IKid} from "../../MockData/kidList";

//----  actions for kidsList-Reducer ----

export const setKidsListAction = (data: {kids:IKid[], total:number})=> {
  return {
    type: 'kidsList/SET-KIDS-LIST',
    payload: data
  } as const
}

export const addKidToListAction = (kid:IKid)=> {
  return {
    type: 'kidsList/ADD-KID-TO-LIST',
    payload: kid
  } as const
}
