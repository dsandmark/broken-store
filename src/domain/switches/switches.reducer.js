// Actions

export const TOGGLE_ALL = 'broken-store/switches/TOGGLE_ALL'

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

