import axios from "axios";

const SET_STUDENTS = "SET_STUDENTS";

export const setStudents = (students) => (
  {
    type:SET_STUDENTS,
    students
  }
);

export const fetchStudents = () => {
  return async (dispatch) => {
    try{
      const {data} = await axios.get("/api/students");
      dispatch(setStudents(data));
    } catch (error){
        console.error(error)
    }
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function studentsReducer(state =[], action) {
  switch (action.type){
    case SET_STUDENTS:
      return {...state, students:action.students}.students;
    default: return state
  }
}
