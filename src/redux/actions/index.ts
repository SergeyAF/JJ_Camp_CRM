import {IKid} from "../../MockData/kidList";
import {AppDispatch} from "../store";

//todo: create Fetch.API and move this method

const host = 'http://localhost:4000';
class API {
  async getKids () {
    const response = await fetch(`${host}/kids`)
    const data = await response.json()
    return data
  }
  async addKid (kid:IKid) {
    const response = await fetch(`${host}/kids`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(kid)
    })
    const data = await response.json()
    return data
  }
}
const api = new API()



const setKidsListAction = (data: {kids:IKid[], total:number})=> {
  return {
    type: 'SET-KIDS-LIST',
    payload: data
  } as const
}

export const fetchKidsListThunk = () => async (dispatch:AppDispatch) => {
  const data = await api.getKids()
  //todo: to get TotalCount return full Data from GetKids
  dispatch(setKidsListAction(data))
}

const addKidToListAction = (kid:IKid)=> {
  return {
    type: 'ADD-KID-TO-LIST',
    payload: kid
  }
}

export const createKidThunk = (kid:IKid) => async (dispatch:AppDispatch) => {
  const resp = await api.addKid(kid)
  if (resp.status_code === 1) {
    await dispatch(addKidToListAction(resp.data));
  }
}



// export const startLoadingAction = ()=> {
//   return {
//     type: 'LOADING-DATA',
//   }
// }
// export const endLoadingAction = ()=> {
//   return {
//     type: 'HAD-LOADED',
//   }
// }
