import {IKid} from "../../MockData/kidList";

const initState = {
  kidsList: [] as IKid[],
  total: 0 as number
}

type initStateType = typeof initState;

const kidsListReducer = (state:initStateType = initState, action:any) => {
  switch (action.type) {
    case 'SET-KIDS-LIST':
      return ({
        ...state,
        kidsList: action.payload.kids,
        total: action.payload.total
        })
    case 'ADD-KID-TO-LIST':
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