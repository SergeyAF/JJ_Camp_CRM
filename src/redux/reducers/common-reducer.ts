const initState = {
  isLoading: false
}

type IState = typeof initState;

const commonReducer = (state:IState = initState, action: any) => {
  switch (action.type) {
    case 'LOADING-DATA':
      return ({
        ...state,
        isLoading: true,
      })
    case 'HAD-LOADED':
      return ({
        ...state,
        isLoading: false
      })
    default:
      return state
  }
}

export default commonReducer