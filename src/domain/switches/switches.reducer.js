// Actions

export const TOGGLE_ALL = 'redux-tech-demo/switches/TOGGLE_ALL'

// Reducer

const initialState = {
  allToggled: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ALL:
      return {
        allToggled: !state.allToggled,
      }
    default:
      return state
  }
}

