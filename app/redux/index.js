import { combineReducers } from 'redux'
import campusesReducer from './campuses'
import studentsReducer from './students'
import singleCampusReducer from './singleCampus'

const appReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  singleCampus: singleCampusReducer
})

export default appReducer
