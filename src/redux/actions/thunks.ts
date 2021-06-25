import {AppDispatch} from "../store";
import {IKid} from "../../MockData/kidList";
import {addKidToListAction, setKidsListAction} from "./actions";

export const fetchKidsListThunk = () => async (dispatch:AppDispatch) => {
  const data = await api.getKids()
  //todo: to get TotalCount return full Data from GetKids
  dispatch(setKidsListAction(data))
}

//todo fix backend
export const createKidThunk = (kid:IKid) => async (dispatch:AppDispatch) => {
  const resp = await api.addKid(kid)
  if (resp.status_code === 1) {
    await dispatch(addKidToListAction(resp.data));
  }
}


//----- API ---

//todo: create Fetch.API and move this method

const host = 'http://localhost:4000/api';
class API {
  async getKids () {
    const response = await fetch(`${host}/contractor`)
    const data = await response.json()
    console.log(data)
    return data
  }
  async addKid (kid:IKid) {
    const response = await fetch(`${host}/contractor`, {
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