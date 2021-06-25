import {IKid} from "../../MockData/kidList";
import { ActionsType } from "../actions/actions.type";


const initState = {
  kidsList: [] as IKid[],
  total: 0 as number,
  offset: 0 as number,
  limit: 10 as number
}

type initStateType = typeof initState;

const kidsListReducer = (state:initStateType = initState, action: ActionsType) => {
  switch (action.type) {
    case 'kidsList/SET-KIDS-LIST':
      return ({
        ...state,
        kidsList: action.payload.data,
        total: action.payload.total
        })
    case 'kidsList/ADD-KID-TO-LIST':
      return ({
        ...state,
        kidsList: [...state.kidsList, action.payload],
        total: state.total+1
      })
    default:
      return state
  }
}

export default kidsListReducer