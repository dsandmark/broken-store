import { combineReducers } from 'redux'

import switches from './switches/switches.reducer.js'

const rootReducer = combineReducers({
  switches,
})

export default rootReducer
