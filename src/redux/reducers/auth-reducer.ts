interface IUser {
  id: number
  email: string
  role: string
  isDisabled: boolean
}

const initState = {
  isAuth: false,
  user: {} as IUser
}

type IState = typeof initState;

const authReducer = (state: IState = initState, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return ({
        ...state,
        isAuth: true
      })
    case 'LOGOUT':
      return ({
        ...state,
        isAuth: false
      })
    case 'SET_USER':
      return ({
        ...state,
        user: action.payload
      })
    default: return state
  }
}

export default authReducer